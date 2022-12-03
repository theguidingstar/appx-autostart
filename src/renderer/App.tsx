import './App.css';

export default function App() {
  const enableAutoStart = async () => {
    await window.electron.ipcRenderer.turnOnTheAutoStart();
    alert('Auto Start Disabled');
  };

  const disableAutostart = async () => {
    await window.electron.ipcRenderer.turnOffTheAutoStart();
    alert('Auto Start Disabled');
  };
  return (
    <div>
      <h1>AppX Auto Start</h1>
      <br />
      <div className="Hello">
        <button type="button" onClick={enableAutoStart}>Enable Auto Start</button> &nbsp;
        <button type="button" onClick={disableAutostart}>Disable Autostart</button>
      </div>
    </div>
  );
}
