import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function App() {
  const [progress, setProgress] = useState(0);

  function handleProgress() {
    setProgress(progress + 10);
  }

  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={handleProgress}>Increase</button>
    </div>
  );
}
