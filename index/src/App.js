import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
