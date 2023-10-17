import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Suspense, useEffect, useState } from "react";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig transition={{
        ...framerMotionConfig
      }}>
        <Canvas 
          shadows 
          camera={{ position: [-7, 4, 0] }}
        >
          <color attach="background" args={["#E5E5E5"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection}/>
            <Scroll>
              <Suspense>
                {started && <Experience section={section} menuOpened={menuOpened} />}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          section={section}
          onSectionChange={setSection} 
          menuOpened={menuOpened} 
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Cursor />
      <Leva hidden />
    </>
  );
}

export default App;
