import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Intro from "./pages/Intro";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
