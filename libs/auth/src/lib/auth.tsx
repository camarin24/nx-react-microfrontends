import React, { createContext, useEffect, useState } from "react";
import Keycloak from "keycloak-js";

export type ContextType = {
  user: string;
  setUser: (name: string) => void;
};

export const AuthContext = createContext<ContextType>({
  user: "",
  setUser: () => {
    console.warn("no user provider");
  },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [_, setKeycloakInstance] = useState<Keycloak | null>(null);

  useEffect(() => {
    console.log("init keycloak");
    (async function () {
      console.log("init keycloak");
      const instance = new Keycloak({
        url: "http://localhost:8080",
        realm: "super-secret",
        clientId: "js-client",
      });

      try {
        await instance.init({
          onLoad: "login-required",
          checkLoginIframe: false,
        });
        setKeycloakInstance(instance);
        if (instance.authenticated) {
          setUser(`${instance.tokenParsed?.name}`);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const [user, setUser] = useState<string>("initial value 2");
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
