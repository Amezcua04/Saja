import { Call, Login, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./../assets/logo.png";

const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const getMenuItemStyle = (path) => {
    return location.pathname === path
      ? {
          borderBottom: "2px solid",
          borderColor: "#E53935",
        }
      : {};
  };

  const menuItems = [
    {
      name: "Inicio",
      url: "/",
    },
    {
      name: "Makis",
      url: "/makis",
    },
    {
      name: "Especiales",
      url: "/especiales",
    },
    {
      name: "Bolas de Fuego",
      url: "/bolasfuego",
    },
    {
      name: "Entradas",
      url: "/entradas",
    },
    {
      name: "Bebidas",
      url: "/bebidas",
    },
    {
      name: "Contacto",
      url: "/contacto",
    },
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => navigate(item.url)}>
            <ListItemText
              primary={item.name}
              sx={{ ...getMenuItemStyle(item.url) }}
            />
          </ListItem>
        ))}
        <Divider />
        <Box display="flex" flexDirection="column" sx={{ mt: 2, gap: 2 }}>
          <a href="tel:3114937670" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<Call />}
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "red", color: theme.palette.grey[50] }}
            >
              Llamar
            </Button>
          </a>
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            {/* Logo a la izquierda */}
            <Box className="logoBox" gap={1}>
              <img
                src={Logo}
                className="logo"
                alt="logo"
                loading="lazy"
                onClick={() => navigate("/")}
              />
            </Box>
          </Box>

          {/* Drawer para pantallas pequeñas (responsivo) */}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <Menu />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerList()}
              </Drawer>
            </>
          ) : (
            // Enlaces para pantallas grandes
            <Box sx={{ display: "flex" }}>
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={() => navigate(item.url)}>
                  <Typography
                    variant="h6"
                    color="#000"
                    sx={{ ...getMenuItemStyle(item.url) }}
                  >
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
