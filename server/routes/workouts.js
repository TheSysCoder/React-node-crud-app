// import all required all packages
import express from "express";
// create router
const router = express.Router();

// create all workout routes
// get all workouts
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "All workouts here",
  });
});

// get single workout
router.get("/:workoutId", (req, res, next) => {
  const workoutId = req.params.workoutId;
  res.status(200).json({
    message: "We found workout",
    workoutId: workoutId,
  });
});

// post request
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Workout added",
  });
});

// patch workout
router.patch("/:workoutId", (req, res, next) => {
  res.status(200).json({
    message: "workout updated",
  });
});

// delete workout
router.delete("/:workoutId", (req, res, next) => {
  res.status(200).json({
    message: "workout deleted",
  });
});

export default router;
