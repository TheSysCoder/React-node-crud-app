import gymModel from "../modules/gym.model.js";
import mongoose from "mongoose";
import { json } from "express";

// get all gyms

export const getAllGyms = async (req, res, next) => {
  try {
    const allGyms = await gymModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      allGyms: allGyms,
    });
  } catch (error) {
    res.status(400).json({
      error: error.error,
    });
  }
};

// create gym
export const createGyms = async (req, res, next) => {
  const { gymName, gymCity, gymContact } = req.body;

  try {
    const gym = await gymModel.create({
      gymName,
      gymCity,
      gymContact,
    });
    res.status(201).json({
      message: "Gym created successfully",
      gym: gym,
    });
  } catch (error) {
    res.status(400).json({
      message: error.error,
    });
  }
};

// get single gym by id

export const getSingleGym = async (req, res, next) => {
  const { gymId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(gymId)) {
      res.status(400).json({
        error: `${gymId} is not valid to get gym records`,
      });
    } else {
      const gymSingle = await gymModel.findById(gymId);
      res.status(200).json({
        gymSingle: gymSingle,
      });
    }
    // validate id
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// delete gym

export const deleteGym = async (req, res, next) => {
  const { gymId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(gymId)) {
      return res.status(400).json({
        error: `${gymId} is not valid`,
      });
    } else {
      const gymDel = await gymModel.findOneAndDelete({ _id: gymId });
      if (!gymDel) {
        res.status(400).json({
          error: "The record is not found",
        });
      }
      res.status(200).json({
        message: "The record is delete successfully",
        gymDel: gymDel,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// update gym

export const updateGym = async (req, res, next) => {
  const { gymId } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(gymId)) {
      res.status(400).json({
        error: `${gymId} is not valid`,
      });
    } else {
      const gymToUpdate = await gymModel.findOneAndUpdate(
        { _id: gymId },
        {
          ...req.body,
        }
      );
      if (!gymToUpdate) {
        res.status(400),
          json({
            error: "The gym record is not found",
          });
      }
      res.status(200).json({
        message: "Gym record updated",
      });
    }
  } catch (error) {
    res.status(200).json({
      error: error.message,
    });
  }
};
