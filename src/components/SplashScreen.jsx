import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const SplashScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 10 segundos de carga

        return () => clearTimeout(timer); // Limpia el temporizador cuando se desmonta
    }, []);

    if (!loading) {
        return null; // Cuando el tiempo de carga termina, retorna null o redirige a otra página.
    }

    return (
        <Box

            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: { xs: "0px", sm: "600px", md: "900px", lg: "1200px", xl: "1536px" },
                backgroundColor: '#f5f5f5',
            }}
        >
            <CircularProgress size={80} />
            <Typography variant="h4" sx={{ marginTop: 2 }}>
                Cargando...
            </Typography>
        </Box>
    );
};

export default SplashScreen;
