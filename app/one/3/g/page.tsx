'use client'
import { useState, useEffect } from 'react';
let getInitialState = () => {
  const initialValue = localStorage.getItem("darkMode");

  if(initialValue === null){
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return initialValue == "true";
}
// , 

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const intervalId = setInterval(() => {
        let darkMode = getInitialState(); console.log(darkMode) // ✅ Pass a state updater
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅ Now count is not a dependency

  
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}
