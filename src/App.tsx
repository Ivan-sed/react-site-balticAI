import { useState } from "react";
import "./App.css";
import "./styles/styles.css";
import HomePage from "./pages/HomePage";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // HomePage теперь главная страница

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "demo":
        return <DemoPage />;
      default:
        return <HomePage />;
    }
  };

  const DemoPage = () => (
    <div style={{ padding: "2rem" }}>
      <h1>Демо навигация</h1>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button onClick={() => setCurrentPage("home")}>Home Page</button>
        <button onClick={() => setCurrentPage("demo")}>Demo</button>
      </nav>
      <p>HomePage теперь открывается по умолчанию при запуске приложения.</p>
      <p>Нажмите "Home Page" чтобы вернуться к главной странице.</p>
    </div>
  );

  return <div className="App">{renderPage()}</div>;
}

export default App;
