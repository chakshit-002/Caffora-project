// import React from 'react'
// import CollectionAtelier from './CollectionAtelier'
// import CoffeCup3D from './CoffeeCup3D'
// import AnimatedCoffeeCup from './AnimatedCoffeeCup'

// const Categories = () => {
//     return (
//         <div className='relative'>

//             <div >
//                 <CollectionAtelier />
//                 <CollectionAtelier />
//                 <CollectionAtelier />
//                 <CollectionAtelier />
//             </div>

//             <div className='absolute top-0 left-1/2 -translate-x-1/2 '>
//                 <AnimatedCoffeeCup />
//             </div>
//         </div>
//     )
// }

// export default Categories




// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

// function Model() {
//   const obj = useLoader(OBJLoader, "/Coffe cupobj.obj");
//   return <primitive object={obj} scale={0.5} />;
// }

// export default function CoffeCup3D() {
//   return (
//     <div className="w-140 h-140" > {/* Full screen ya apni marzi ki height/width */}
//       <Canvas camera={{ position: [0, 0, 5], fov: 50 }} >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />
//         <Suspense fallback={null}>
//           <Model />
//           <OrbitControls 
//             enableZoom={false} // 👈 zoom disable
//             enablePan={false}  // 👈 pan disable (optional)
//             autoRotate={true}  // 👈 object apne aap ghoomta rahe
//             autoRotateSpeed={8} 
//           />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
