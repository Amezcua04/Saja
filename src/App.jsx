import { useState, useEffect, lazy, Suspense } from "react";
import SplashScreen from "./components/SplashScreen";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box, CircularProgress } from "@mui/material";
const Home = lazy(() => import("./pages/Home"));
const Makis = lazy(() => import("./pages/Makis"));
const Especiales = lazy(() => import("./pages/Especiales"));
const Bolas = lazy(() => import("./pages/Bolas"));
const Entradas = lazy(() => import("./pages/Entradas"));
const Bebidas = lazy(() => import("./pages/Bebidas"));
const Contacto = lazy(() => import("./pages/Contacto"));

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<CircularProgress color="red" />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/makis"
          element={
            <Suspense fallback={<CircularProgress color="red" />}>
              <Makis />
            </Suspense>
          }
        />
        <Route
          path="/especiales"
          element={
            <Suspense fallback={<CircularProgress color="red" />}>
              <Especiales />
            </Suspense>
          }
        />
        <Route
          path="/bolasfuego"
          element={
            <Suspense fallback={<CircularProgress color="red" />}>
              <Bolas />
            </Suspense>
          }
        />
        <Route
          path="/entradas"
          element={
            <Suspense fallback={<CircularProgress color="red" />}>
              <Entradas />
            </Suspense>
          }
        />
        <Route
          path="/bebidas"
          element={
            <Suspense fallback={<CircularProgress color="red" />}>
              <Bebidas />
            </Suspense>
          }
        />
        <Route
          path="/contacto"
          element={
            <Suspense fallback={<CircularProgress color="red" />}>
              <Contacto />
            </Suspense>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
