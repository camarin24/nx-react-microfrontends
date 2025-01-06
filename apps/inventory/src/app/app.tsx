import { useContext } from "react";
import "../styles.css";
import NxWelcome from "./nx-welcome";
import { AuthContext } from "@ss/auth";

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NxWelcome title={user} />
    </div>
  );
}

export default App;
