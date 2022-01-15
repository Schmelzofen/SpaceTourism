import './App.scss';
import Home from "./components/Home"
import Header from "./components/Header"
import Planet from "./components/Planet"
import Crew from "./components/Crew"
import Technology from "./components/Technology"

// Planets
import Moon from "./components/planets/Moon"
import Mars from "./components/planets/Mars"
import Titan from "./components/planets/Titan"
import Europa from "./components/planets/Europa"


// Crew
import Douglas from "./components/crew/Douglas"
import Mark from "./components/crew/Mark"
import Victor from "./components/crew/Victor"
import Ansari from "./components/crew/Ansari"


// Technology
import Launch from "./components/technology/Launch"
import Capsule from "./components/technology/Capsule"
import Spaceport from "./components/technology/Spaceport"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* PLANETS */}
          <Route path="/destination" element={<Planet />} />
          <Route path="/destination/moon" element={<Moon />} />
          <Route path="/destination/mars" element={<Mars />} />
          <Route path="/destination/titan" element={<Titan />} />
          <Route path="/destination/europa" element={<Europa />} />

          {/* CREW */}
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew/douglas" element={<Douglas />} />
          <Route path="/crew/mark" element={<Mark />} />
          <Route path="/crew/victor" element={<Victor />} />
          <Route path="/crew/ansari" element={<Ansari />} />

          {/* TECH */}
          <Route path="/tech" element={<Technology />} />
          <Route path="/tech/launch" element={<Launch />} />
          <Route path="/tech/port" element={<Spaceport />} />
          <Route path="/tech/capsule" element={<Capsule />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
