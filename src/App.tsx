import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FreedDrpCaseStudyPage } from "./pages/FreedDrpCaseStudyPage";
import { AgentFlowCaseStudyPage } from "./pages/AgentFlowCaseStudyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/freed-drp" element={<FreedDrpCaseStudyPage />} />
        <Route path="/case-studies/agent-flow" element={<AgentFlowCaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
