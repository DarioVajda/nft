import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";

function WorldCanvas({ style, pixelRatio, position, frameloop, children}){

  const pos = position !== undefined ? position : [0, 200, 0];
  // const pos = position?position:[175, 175, 175];
  const frloop = frameloop?frameloop:'demand';

  return(
    <Canvas
      shadows
      onCreated={null}
      // camera={{ fov:40, position: pos, near: 0.1, far: 1000, aspect: 1/1, rotation: [ -Math.PI/2, 0, 0 ] }}
      camera={{ fov:40, position: pos, near: 0.1, far: 1000, aspect: 1/1, rotation: [ -Math.PI/2, 0, 0 ] }}
      orthographic={false}
      frameloop={frloop}
      dpr={pixelRatio?pixelRatio:1}
      style={style}
    >
      <Suspense fallback={null} r3f>
        {children}
      </Suspense>
    </Canvas>
  )
}

export default WorldCanvas;