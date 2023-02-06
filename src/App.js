import './App.css';
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./Components/Cylinder3d";

//Currently returns three canvases, each with two cylinders
//Check ./Components/Cylinder3d.js for cylinder documentation
function App() {
  return (
    <>
      <section className='App-header'>
        {/* Canvas 1 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
        {console.log("after canvas 1")}
        {/* Canvas 2 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
          <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
        </Canvas>
 
        {/* Canvas 3 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight color={"red"} />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
      </section>
    </>
  );
}

export default App;
