import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./layout/sidebar";
import AccommodationPage from "./pages/accommodation";
import BudgetPage from "./pages/budget";
import FlightsPage from "./pages/flights";
import HolidaysPage from "./pages/holidays";
import HomePage from "./pages/home";
import ItineraryPage from "./pages/itinerary";
import ProfilePage from "./pages/profile";
import TransportPage from "./pages/transport";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/holidays" element={<HolidaysPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
