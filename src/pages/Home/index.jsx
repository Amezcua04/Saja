import React, { useState } from "react";
import { Box } from "@mui/material";
import Portada from "../../components/Portada";
import Makis from "../../components/Makis";
import Bebidas from "../../components/Bebidas";

const Menu = () => {
  const [section, setSection] = useState(0);

  const handleNextSection = () => {
    setSection((prevSection) => prevSection + 1);
  };

  const handleBeforeSection = () => {
    setSection((prevSection) => prevSection - 1);
  };

  return (
    <Box height="100dvh">
      {section === 0 && <Portada handleNextSection={handleNextSection} />}

      {section === 1 && (
        <Makis
          handleBeforeSection={handleBeforeSection}
          handleNextSection={handleNextSection}
        />
      )}

      {section === 2 && <Bebidas handleBeforeSection={handleBeforeSection} />}
    </Box>
  );
};

export default Menu;
