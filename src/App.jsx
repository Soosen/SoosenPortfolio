import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/Resume" element={<ResumePage />} />
      <Route path="/Contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
