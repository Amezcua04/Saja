import React from 'react';
import { Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Bebidas = ({ handleBeforeSection }) => {
    return (
        <>
            {/* Tercera sección: Detalles del menú */}
            <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', color: '#000', mb: 4 }}
            >
                Sección de Bebidas
            </Typography>
            <Typography variant="body1">
                Aquí se mostrarán los diferentes platillos del menú, como sushi,
                entradas, bebidas, etc.
            </Typography>


            {/* Botón para la anterior sección */}
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
        </>
    )
}

export default Bebidas
