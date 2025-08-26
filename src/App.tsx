import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import "./styles/team-slider.css";
import "./styles/industry-cards-animation.css";
import {
  HomePage,
  AiSolutionsPage,
  ConsultingPage,
  ItSolutionsPage,
  AboutUsPage,
  ServicesPage,
  CasesPage,
  ContactsPage,
  CasePage,
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
          <Route path="/cases/:id" element={<CasePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
