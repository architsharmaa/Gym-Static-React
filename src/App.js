import Navbar from "./Common Components/Navbar/Navbar";
import Home from "./screens/HomeScreen/HomeScreen";
import About from "./screens/AboutScreen/AboutScreen";
import Bmi from "./screens/BmiScreen/BmiScreen";
import Services from "./screens/ServicesScreen/ServicesScreen";
import Footer from "./Common Components/Footer/FooterScreen";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Home />
        <Services />
        <Bmi />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
