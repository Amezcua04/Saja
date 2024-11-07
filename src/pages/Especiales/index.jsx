import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import PlatilloItem from "../../components/Platillo";

const platillos = {
  Especiales: [
    {
      nombre: "Especial Nayasaki Roll",
      precio: 125,
      XD: "Pepino, zanahoria, phila y camarón, carne, queso y surimi",
      XF: "Tampico y chipotle",
    },
    {
      nombre: "Black Nori Especial",
      precio: 125,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Alga, phila y camarón y tampico",
    },
    {
      nombre: "Miami Roll",
      precio: 125,
      XD: "Pepino, zanahoria, phila, camarón y surimi",
      XF: "Chipotle",
    },
    {
      nombre: "Lava (volcán) Roll",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Surimi, piña y chipotle",
    },
    {
      nombre: "Cordon Blue",
      precio: 125,
      XD: "Pepino, zanahoria, phila y tocino",
      XF: "Queso fundido",
    },
    {
      nombre: "Palta Roll",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Aguacate y salsa anguila",
    },
    {
      nombre: "Castello Roll",
      precio: 120,
      XD: "Tampico, camarón empanizado, aguacate y salsa anguila",
      XF: "",
    },
    {
      nombre: "Ash Roll",
      precio: 125,
      XD: "Pate de marlin, aguacate, camarón y sriracha",
      XF: "",
    },
    {
      nombre: "Rena Roll",
      precio: 125,
      XD: "Pate de marlin, aguacate, camarón y sriracha",
      XF: "",
    },
    {
      nombre: "Xaas Roll",
      precio: 125,
      XD: "Pate de marlin, aguacate y sriracha",
      XF: "",
    },
    {
      nombre: "Chitaba Roll",
      precio: 120,
      XD: "Camarón dorado y toque de sriracha",
      XF: "Pepino, zanahoria y phila",
    },
    {
      nombre: "BBQ Roll",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Salsa BBQ",
    },
  ],
};

const Especiales = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          ESPECIALES
        </Typography>
        <Typography variant="h4" sx={{ color: "red", fontWeight: "bold" }}>
          2x1 EN SUSHI TODOS LOS DÍAS
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {platillos.Especiales.map((platillo, index) => (
            <PlatilloItem
              key={index}
              nombre={platillo.nombre}
              precio={platillo.precio}
              XD={platillo.XD}
              XF={platillo.XF}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Especiales;
