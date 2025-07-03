import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const RotatingTree = () => {
  const treeRef = useRef();
  const { scene } = useGLTF("/models/plane.glb"); 

  useFrame(() => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <primitive
      ref={treeRef}
      object={scene}
      scale={4.5}               
      position={[0, -1, 0]}     
    />
  );
};

const Tree = () => {
  const [canvasHeight, setCanvasHeight] = useState(window.innerWidth > 768 ? 500 : 400);

  useEffect(() => {
    const handleResize = () => {
      setCanvasHeight(window.innerWidth > 768 ? 500 : 400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      style={{ height: `${canvasHeight}px`, width: "100%" }}
      camera={{ position: [0, 2, 5], fov: 75 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 2]} intensity={1.5} />
      <directionalLight position={[0, 5, -5]} intensity={0.5} />
      <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />

      {/* ✅ Using the same 'tree' naming, but model is now the island */}
      <RotatingTree />
    </Canvas>
  );
};

export default Tree;
