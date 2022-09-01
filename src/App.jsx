import "./App.css";
import Navbar from "./componentes/navbar";
import Navbar2 from "./componentes/navbar2";
import Home from "./pages/home";
import itadori from "./images/itadori2.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Itadori</h1>
      <div className="imagen"><img src={itadori} alt="itadori" /></div>
      <Home />
      <Navbar2 />
    </div>
    
  );
}

export default App;
