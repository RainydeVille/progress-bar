import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function ProgressBarPage() {
  const [progress, setProgress] = useState(0);

  function handleProgress(e) {
    if (progress < 100) {
      setProgress(progress + 10);
    } else {
      setProgress(0);
    }
  }

  return (
    <div className="btnDiv">
      <ProgressBar progress={progress} />
      <button onClick={handleProgress}>{progress < 100 ? "Increase" : "Reset"}</button>
    </div>
  );
}
