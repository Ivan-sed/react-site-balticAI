import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import {
  HomePage,
  AiSolutionsPage,
  ConsultingPage,
  ItSolutionsPage,
  AboutUsPage,
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
