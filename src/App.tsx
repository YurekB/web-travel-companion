import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./layout/sidebar";
import FlightsPage from "./pages/flights";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<FlightsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
