import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import PlatilloItem from "../../components/Platillo";
import img from "./../../assets/2x1.png";

const platillos = {
  makis: [
    {
      nombre: "Camarón Roll",
      precio: 100,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "",
    },
    {
      nombre: "Surimi Roll",
      precio: 100,
      XD: "Pepino, zanahoria, phila y surimi",
      XF: "",
    },
    {
      nombre: "Black Nori Roll",
      precio: 100,
      XD: "Pepino, zanahoria, phila y surimi",
      XF: "Alga",
    },
    {
      nombre: "Phila Roll",
      precio: 150,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Phila",
    },
    {
      nombre: "Mary y Tierra",
      precio: 125,
      XD: "Pepino, zanahoria, phila, camarón y Res",
      XF: "",
    },
    {
      nombre: "Banana Roll",
      precio: 125,
      XD: "Plátano frito, phila y camarón",
      XF: "",
    },
    {
      nombre: "Carne Roll",
      precio: 150,
      XD: "Pepino, zanahoria, phila y res",
      XF: "",
    },
    {
      nombre: "Saja Roll",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Chipotle",
    },
    {
      nombre: "Tepiqueño Roll",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Tampico",
    },
    {
      nombre: "Anguila Roll",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Salsa de anguila",
    },
    {
      nombre: "Ibarahi Roll",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Salsa de anguila y chipotle",
    },
    {
      nombre: "Camaron especial",
      precio: 115,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Anguila y sriracha",
    },
    {
      nombre: "Especial Fukui Roll",
      precio: 125,
      XD: "Pepino, zanahoria, phila y camarón",
      XF: "Tampico y surimi",
    },
  ],
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
      nombre: "Iava (volcán) Roll",
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

const Makis = () => {
  return (
    <Container
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Box
        display="flex"
        // width="100%"
        flexDirection={{ xs: "column", lg: "row" }}
        sx={{ textAlign: "center", marginBottom: 2 }}
        border="1px solid red"
      >
        <Typography
          variant="h2"
          fontSize={{ lg: "76px" }}
          sx={{ fontWeight: "bold" }}
        >
          MAKIS
        </Typography>
        <Box display="flex" flexDirection="row">
          <Box>
            <img src={img} width="60px" height="60px" alt="2x1 img" />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              EN SUSHI
            </Typography>
            <Typography variant="h6" lineHeight={0.5}>
              TODOS LOS DÍAS
            </Typography>
          </Box>
        </Box>
      </Box> */}

      <Box sx={{ flex: 1 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", lg: "row" }}
              sx={{ textAlign: "center", marginBottom: 2 }}
            >
              <Typography
                variant="h2"
                fontSize={{ lg: "76px" }}
                sx={{ fontWeight: "bold" }}
              >
                MAKIS
              </Typography>
              <Box
                display={{ xs: "flex", lg: "none" }}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Box>
                  <img src={img} width="80px" height="80px" alt="2x1 img" />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    EN SUSHI
                  </Typography>
                  <Typography variant="h6" lineHeight={0.5}>
                    TODOS LOS DÍAS
                  </Typography>
                </Box>
              </Box>
            </Box>
            {platillos.makis.map((platillo, index) => (
              <PlatilloItem
                key={index}
                nombre={platillo.nombre}
                precio={platillo.precio}
                XD={platillo.XD}
                XF={platillo.XF}
              />
            ))}
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              display={{ xs: "none", lg: "flex" }}
              flexDirection={{ xs: "column", lg: "row" }}
              sx={{ textAlign: "center" }}
            >
              <Typography
                display={{ lg: "none" }}
                variant="h2"
                fontSize={{ lg: "76px" }}
                sx={{ fontWeight: "bold" }}
              >
                MAKIS
              </Typography>
              <Box display="flex" flexDirection="row">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <img src={img} width="70%" height="70%" alt="2x1 img" />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    EN SUSHI
                  </Typography>
                  <Typography variant="h6" lineHeight={0.5}>
                    TODOS LOS DÍAS
                  </Typography>
                </Box>
              </Box>
            </Box>
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
      </Box>
    </Container>
  );
};

export default Makis;
