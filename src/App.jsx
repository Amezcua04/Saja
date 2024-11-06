import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Bebidas from "./pages/Bebidas";
import Makis from "./pages/Makis";
import Especiales from "./pages/Especiales";
import Bolas from "./pages/Bolas";
import Entradas from "./pages/Entradas";

function App() {
  // const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makis" element={<Makis />} />
        <Route path="/especiales" element={<Especiales />} />
        <Route path="/bolasfuego" element={<Bolas />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/bebidas" element={<Bebidas />} />
      </Routes>
    </Box>
  );
}

export default App;
