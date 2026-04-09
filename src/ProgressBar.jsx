export default function ProgressBar({ progress }) {
  return (
    <div className="progressContainer">
      <h1>Progress Bar</h1>
      <div className="progressBar">
        <div className="insideBar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="complete">{progress}% Complete</p>
    </div>
  );
}
