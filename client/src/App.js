import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./routes/Home/Home.route";
import Gyms from "./routes/Gyms/Gyms.route";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gyms" element={<Gyms />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
