import { Box, Typography, IconButton, Button } from "@mui/material";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Palillos from "./../assets/palillos2.png";
import Logo from "./../assets/logo2.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Portada = ({ handleNextSection }) => {
  return (
    <Box height="100%">
      {/* Logo de la parte superior */}
      <Box display="flex" justifyContent="center" sx={{ lineHeight: 0.5 }}>
        <Box
          mt={{ xs: 10, sm: 20, lg: 4, xl: 4 }}
          width={{ xs: "50%", sm: "30%", lg: "20%", xl: "15%" }}
        >
          <img alt="Logo Saja" src={Logo} width="100%" height="100%" />
        </Box>
      </Box>

      {/* MENÚ y sushi roll con palillos */}
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography
          variant="h1"
          component="h1"
          fontWeight="bold"
          fontSize="12rem"
          lineHeight={1.2}
        >
          M E
        </Typography>

        <Box position="absolute" overflow="hidden" height="100%" bottom={0}>
          <img
            src={Palillos}
            alt="Sushi Roll"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Typography
          variant="h1"
          component="h1"
          fontWeight="bold"
          fontSize="12rem"
          lineHeight={1.2}
        >
          N Ú
        </Typography>
      </Box>

      {/* Teléfono */}
      <Box display="flex" position="absolute" bottom={10} left={5}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          alignItems="center"
        >
          <IconButton sx={{ color: "#E53935" }}>
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <Box>
            <Typography
              variant="body1"
              component="h4"
              fontWeight="bold"
              fontSize="12px"
            >
              SERVICIO A DOMICILIO
            </Typography>
            <Typography
              variant="body1"
              component="h5"
              sx={{ fontWeight: "bold", fontSize: "20px", lineHeight: 0.9 }}
            >
              311 493 7670
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Dirección */}
      <Box display="flex" position="absolute" bottom={10} right={5}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          alignItems="center"
        >
          <IconButton sx={{ color: "#E53935" }}>
            <LocationOnSharpIcon fontSize="large" />
          </IconButton>
          <Box>
            <Typography
              variant="body1"
              component="h4"
              fontWeight="bold"
              fontSize="12px"
            >
              FCO. GARCÍA MONTERO
            </Typography>
            <Typography
              variant="body1"
              component="h5"
              sx={{ fontWeight: "bold", fontSize: "12px", lineHeight: 0.9 }}
            >
              #11, COL. ANDARENAS
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Portada;
