import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {step === 0 ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Duc Pro
          </a>
        </header>
      ) : (
        <div className="Container">
          <p>Hòa ghẻ, Hưng gà vào đây bố cân 2</p>
        </div>
      )}
    </div>
  );
}

export default App;
