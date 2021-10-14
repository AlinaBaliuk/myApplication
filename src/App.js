import logo from './logo.svg';
import './App.css';
import './index.css';
import ClassToggler from './classComponent';
import FuncToggler from './funcComponent';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassToggler />
        <FuncToggler />
      </header>
    </div>
  );
}

export default App;