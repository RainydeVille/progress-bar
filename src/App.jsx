import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgressBarPage from "./ProgressBarPage";

export default function App() {
  return (
    <BrowserRouter basename="/progress-bar">
      <Routes>
        <Route path="/" element={<ProgressBarPage />} />
      </Routes>
    </BrowserRouter>
  );
}
