import { Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      {/* Intro / Splash */}
      <Route path="/" element={<Intro />} />

      {/* Public pages */}
      <Route path="/home" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />

      {/* Post-login dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;