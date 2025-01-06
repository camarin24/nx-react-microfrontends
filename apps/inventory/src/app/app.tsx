import { useContext } from "react";
import "../styles.css";
import NxWelcome from "./nx-welcome";
import { AuthContext } from "@ss/auth";

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-8xl">Inventario federado 🤡</h1>
      <NxWelcome title={user} />
    </div>
  );
}

export default App;
