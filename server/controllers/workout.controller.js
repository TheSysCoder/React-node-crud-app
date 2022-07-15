import workoutsModel from "../modules/workouts.js";
import mongoose from "mongoose";
// get all workouts

export const getWorkout = async (req, res, next) => {
  try {
    const allWorkouts = await workoutsModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      allWorkouts: allWorkouts,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// get single workout

export const getSingleWorkout = async (req, res, next) => {
  const { workoutId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(workoutId)) {
      res.status(400).json({
        error: "not valid id",
      });
    } else {
      const singleWorkout = await workoutsModel.findById(workoutId);
      if (!singleWorkout) {
        return res
          .status(404)
          .json({ error: `No such workout with id ${workoutId}` });
      } else {
        res.status(200).json({
          singleWorkout: singleWorkout,
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// create new workout
export const createWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await workoutsModel.create({
      title,
      reps,
      load,
    });
    res.status(200).json({
      message: "Workout created successfully",
      workout: workout,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// delete workout by id

export const deleteWorkout = async (req, res, next) => {
  const { workoutId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(workoutId)) {
      res.status(400).json({
        error: `${workoutId} is not a valid id`,
      });
    } else {
      const workoutToDelete = await workoutsModel.findOneAndDelete({
        _id: workoutId,
      });
      if (!workoutToDelete) {
        res.status(400).json({
          error: "This workout is not found",
        });
      }
      res.status(200).json({
        message: "Deleted workout",
        workoutToDelete: workoutToDelete,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// update workout records

export const updateWorkout = async (req, res, next) => {
  const { workoutId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(workoutId)) {
      return res.status(400).json({
        error: `${workoutId} is not valid`,
      });
    } else {
      const workoutToUpdate = await workoutsModel.findOneAndUpdate(
        { _id: workoutId },
        { ...req.body }
      );
      if (!workoutToUpdate) {
        res.status(400).json({
          error: "The record is not found to update",
        });
      }
      res.status(200).json({
        message: "Workout is updated",
      });
    }
  } catch (error) {
    res.status(200).json({
      error: error.message,
    });
  }
};
