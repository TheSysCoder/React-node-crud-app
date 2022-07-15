import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import Workout from "./routes/Workout/workout.route";
import Gyms from "./routes/Gyms/Gyms.route";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={""}></Route>
            <Route path="/gyms" element={<Gyms />}></Route>
            <Route path="/workouts" element={<Workout />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
