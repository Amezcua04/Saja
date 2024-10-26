import { Box, Typography, IconButton, Button } from '@mui/material';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Palillos from "./../assets/palillos2.png"
import Logo from "./../assets/logo2.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Portada = ({ handleNextSection }) => {
    return (
        <>
            {/* Logo de la parte superior */}
            <Box sx={{ lineHeight: 0.5 }} >
                <img alt='Logo Saja' src={Logo} width="50%" height="50%" />
            </Box>

            {/* MENÚ y sushi roll con palillos */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
                <Typography
                    variant="h1"
                    sx={{ fontWeight: 'bold', fontSize: '12rem', lineHeight: 1.2 }}
                >
                    M E
                </Typography>
                <Box
                    sx={{
                        width: '600px',
                        height: '850px',
                        // borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'absolute',
                        bottom: 0,
                        // mx: 2,
                    }}
                >
                    <img
                        src={Palillos}
                        alt="Sushi Roll"
                        style={{ width: '100%', height: '100%' }}
                    />
                </Box>
                <Typography
                    variant="h1"
                    sx={{ fontWeight: 'bold', fontSize: '12rem', lineHeight: 1.2 }}
                >
                    N Ú
                </Typography>
            </Box>

            {/* Botón para la siguiente sección */}
            <Button
                variant="contained"
                onClick={handleNextSection}
                sx={{
                    position: 'absolute',
                    justifyContent: "center",
                    right: 20,
                    backgroundColor: '#E53935',
                    '&:hover': { backgroundColor: '#d32f2f' },
                }}
            >
                Siguiente <ArrowForwardIosIcon />
            </Button>

            {/* Información de contacto en la parte inferior */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 10,
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '95%',
                    padding: '0 30px',
                }}
            >
                {/* Teléfono */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: '#E53935' }}>
                        <WhatsAppIcon fontSize='large' />
                    </IconButton>
                    <Box sx={{ flexDirection: "column" }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            SERVICIO A DOMICILIO
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: "22px", lineHeight: 0.9 }}>
                            311 493 7670
                        </Typography>
                    </Box>
                </Box>

                {/* Dirección */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: '#E53935' }}>
                        <LocationOnSharpIcon fontSize='large' />
                    </IconButton>
                    <Box sx={{ flexDirection: "column" }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            FRANCISCO GARCÍA MONTERO
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', lineHeight: 0.9 }}>
                            #11, COL. ANDARENAS
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Portada
