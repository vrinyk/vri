import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FreedDrpCaseStudyPage } from "./pages/FreedDrpCaseStudyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/freed-drp" element={<FreedDrpCaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
