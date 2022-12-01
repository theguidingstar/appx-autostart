import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>AppX Auto Start</h1>
      <br/>
      <div className="Hello">
          <button type="button">
            Enable Auto Start
          </button> &nbsp;
          <button type="button">
            Disable Autostart
          </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
