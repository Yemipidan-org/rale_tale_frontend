import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/home";
import ListingPage from "./pages/searchResultPage/page";
import VirtualInspection from "./pages/virtualInspection/page";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/searchResult" element={<ListingPage />} />
          <Route path="/vi" element={<VirtualInspection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
