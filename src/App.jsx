import { useState, useEffect } from 'react'
import SplashScreen from "./components/SplashScreen";
import Home from './pages/Home';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? <SplashScreen /> : <Home />}
    </div>
  )
}

export default App
