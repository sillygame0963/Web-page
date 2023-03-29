//import logo from "./logo.svg";
//import "./App.css";
import Navigation from "./components/Navigation.js";
import Background from "./components/Background.js";
import Boxcontents from "./components/Boxcontents.js";
import Mission from "./components/Mission.js";
import Container from "./components/Container.js";
import Containerend from "./components/Containerend.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>

      <div>
        <Background />
      </div>

      <div>
        <Boxcontents />
      </div>

      <div>
        <Mission />
      </div>

      <div>
        <Container />
      </div>

      <div>
        <Containerend />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
