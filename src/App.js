import React, { useLayoutEffect, Suspense } from 'react'
import useMousePos from './useMousePos'
import { Canvas } from "@react-three/fiber"
import Fgm from './Fgm'
import SkyBox from './SkyBox'
import './App.css'


function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0} />
    </mesh>
  )
}

function App() {
  const mouse = useMousePos(window, {
    enterDelay: 100,
    leaveDelay: 100,
  })
  
  const [rotation, setRotation] = React.useState([0, 0, 0])
  useLayoutEffect(() => setRotation([
    (mouse.y / 750) - 0.5,
    (mouse.x / 1500) - 0.25,
    0
  ]), [mouse])

  return (
    <Canvas frameloop="demand" className="canvas" colorManagement={true} camera={{ position: [0, 0, 10], fov: 42, far: 1800 }} >
      <Suspense fallback={<Box />} > 
        <SkyBox />
        <Fgm rotation={rotation} />
      </Suspense>
    </Canvas>
  );
}

export default App;