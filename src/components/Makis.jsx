import React from 'react';
import { Typography, Button, Box, Container, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Platillos from "./../menu.json";
import img from "./../assets/2x1.png";

const PlatilloItem = ({ nombre, precio, XD, XF }) => (
    <Box sx={{ marginBottom: 2, border: "1px solid red" }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
            {nombre} <span style={{ color: 'red' }}>${precio}</span>
        </Typography>
        <Typography variant="body1">
            <strong>XD:</strong> {XD}
        </Typography>
        {XF && (
            <Typography variant="body1">
                <strong>XF:</strong> {XF}
            </Typography>
        )}
    </Box>
);

const Makis = ({ handleBeforeSection, handleNextSection }) => {
    return (
        <Grid container height="100%">
            {/* Primera división con borde rojo */}
            <Grid item xs={6}>
                <Box
                    sx={{
                        border: '2px solid red',
                        height: '100%', // Puedes ajustar la altura según tus necesidades
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    División Roja
                </Box>
            </Grid>

            {/* Segunda división con borde azul */}
            <Grid item xs={6}>
                <Box
                    sx={{
                        border: '2px solid blue',
                        height: '100px', // Puedes ajustar la altura según tus necesidades
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    División Azul
                </Box>
            </Grid>
        </Grid>
    )
}

export default Makis

{/* Botón para la anterior sección
    <Button
        variant="contained"
        onClick={handleBeforeSection}
        sx={{
            position: 'absolute',
            justifyContent: "center",
            left: 20,
            backgroundColor: '#E53935',
            '&:hover': { backgroundColor: '#d32f2f' },
        }}
    >
        <ArrowBackIosIcon /> Atrás
    </Button>
    // {/* Botón para la siguiente sección */}
{/* <Button
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
    </Button> */}