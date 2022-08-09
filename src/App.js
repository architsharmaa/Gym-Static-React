import Navbar from "./Common Components/Navbar";
import Home from "./screens/HomeScreen/HomeScreen";
import About from "./screens/AboutScreen/AboutScreen";
import Bmi from "./screens/BmiScreen/BmiScreen";
import Services from "./screens/ServicesScreen/ServicesScreen";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Home />
        <About />
        <Services />
        <Bmi />
      </div>
    </div>
  );
}

export default App;
