import logo from "./logo.svg";
import "./App.css";
import Baxic1 from "./components/Baxic1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Baxic1 name="Hooks" />
      </header>
    </div>
  );
}

export default App;
