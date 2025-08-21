import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import "./styles/team-slider.css";
import {
  HomePage,
  AiSolutionsPage,
  ConsultingPage,
  ItSolutionsPage,
  AboutUsPage,
  ServicesPage,
  CasesPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-solutions" element={<AiSolutionsPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/it-solutions" element={<ItSolutionsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/cases" element={<CasesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
