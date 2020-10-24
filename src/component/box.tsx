import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

function Box(props: any): React.ReactElement {
  // This reference will give us direct access to the mesh
  const mesh: React.MutableRefObject<any> = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box;