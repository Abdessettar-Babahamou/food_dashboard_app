'use client'

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
 import SplashScreen from "./splash-screen";  

export default function LoadingScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 100); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <AnimatePresence>
        {showSplash && <SplashScreen   />}
      </AnimatePresence>

      {/* Dashboard content */}
  
    </div>
  );
}
