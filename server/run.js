// import all required packages
import express, { json } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// import routes
import workoutRoutes from "./routes/workouts.js";
import gymsRouter from "./routes/gyms.routes.js";

// import db
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
app.use("/api/gyms", gymsRouter);
// connect to mongodb
const dbUrl =
  "mongodb://" +
  process.env.MONGO_CONNECTION_HOST +
  ":" +
  process.env.MONGO_PORT +
  "/" +
  process.env.DB_NAME;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("yup!!, We are now connected to the database");
  })
  .catch((err) => {
    console.log("could not connected to the database", err);
    process.exit();
  });

// listen for request
app.listen(PORT, (err) => {
  if (err) {
    console.log(`something is wrong here!!!, ${err}`);
  } else {
    console.log(
      `Awesome!!! Our express server is running on http://localhost:${PORT}`
    );
  }
});
