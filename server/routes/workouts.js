// import all required all packages
import express from "express";

// import all controller
import {
  createWorkout,
  getWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workout.controller.js";
// create router
const router = express.Router();

// create all workout routes
// get all workouts
router.get("/", getWorkout);

// get single workout
router.get("/:workoutId", getSingleWorkout);

// post request
router.post("/", createWorkout);

// patch workout
router.patch("/:workoutId", updateWorkout);

// delete workout
router.delete("/:workoutId", deleteWorkout);

export default router;
