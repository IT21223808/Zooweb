import { useState } from "react";

import SceneSelector from "../components/SceneSelector";
// import ZooScene from "../components/ZooScene";

export default function Home() {
    const [selectedScene, setSelectedScene] = useState<'zoo'>('zoo');

  return (
    <div>
      <SceneSelector selected={selectedScene} onChange={setSelectedScene} />
      {/* {selectedScene === 'zoo' && <ZooScene />} */}
    </div>
  );
}