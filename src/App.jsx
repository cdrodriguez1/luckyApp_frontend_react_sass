
import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import SplashPage from "./Pages/SplashPage/SplashPage";
import HomePage from "./Pages/HomePage/HomePage";
import MapPage from "./Pages/MapPage/MapPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ToEndPage from "./Pages/ToEndPage/ToEndPage";
import AdoptionPage from "./Pages/AdoptionPage/AdoptionPage";
import AllPetsFilterPage from "./Pages/AllPetsFilterPage/AllPetsFilterPage";
import PetsFilteredPage from "./Pages/PetsFilteredPage/PetsFilteredPage";
import MasProfile from "./Pages/MasProfile/MasProfile";
import CarouselPage from "./components/Carrusel/ImageCarousel";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import AdoptionForm from "./components/AdoptionForm/AdoptionForm";
import AnimalDetail from "./components/AnimalDetail/AnimalDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/toend" element={<ToEndPage />} />
          <Route path="/adoptions" element={<AdoptionPage />} />
          <Route path="/adoptions/:animal_id" element={<AdoptionForm />} />
          <Route path="/pets-filter" element={<AllPetsFilterPage />} />
          <Route path="/petsFiltered" element={<PetsFilteredPage />} />
          <Route path="/masprofile" element={<MasProfile />} />
          <Route path="/animaldetail/:_id" element={<AnimalDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;