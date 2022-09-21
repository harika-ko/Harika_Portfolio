import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
