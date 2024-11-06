import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreen /> : <Home />}</>;
}

export default App;
