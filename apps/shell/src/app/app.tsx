import * as React from "react";
import NxWelcome from "./nx-welcome";
import { Link, Route, Routes } from "react-router-dom";
import { AuthContext } from "@ss/auth";
import { useContext } from "react";

const Inventory = React.lazy(() => import("inventory/Module"));

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title={user} />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
