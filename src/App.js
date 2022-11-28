import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      {/* <h2> hello</h2> */}
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
