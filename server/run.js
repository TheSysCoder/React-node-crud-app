// import all required packages
import express, { json } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
// import routes
import workoutRoutes from "./routes/workouts.js";

dotenv.config({
  path: "./config.env",
});
// create express app
const app = express();
const PORT = process.env.PORT || 3001;
// create morgan middleware
app.use(morgan("dev"));

// add CORS middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  })
);
// json middleware
app.use(express.json());

// calling routes
app.use("/api/workouts", workoutRoutes);

// listen for requests

app.listen(PORT, (err) => {
  if (err) {
    console.log(`something is wrong here!!!, ${err}`);
  } else {
    console.log(
      `Awesome!!! Our express server is running on http://localhost:${PORT}`
    );
  }
});
