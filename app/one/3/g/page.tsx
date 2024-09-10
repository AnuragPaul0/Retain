'use client'
import { useState } from 'react';
let getInitialState = () => {
  const initialValue = localStorage.getItem("darkMode");

  if(initialValue === null){
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return initialValue == "true";
}
// , darkMode = getInitialState(); console.log(darkMode)

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  
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
