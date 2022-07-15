import express from "express";
import {
  createGyms,
  getAllGyms,
  getSingleGym,
  deleteGym,
  updateGym,
} from "../controllers/gyms.controller.js";

const router = express.Router();

// create router
router.get("/", getAllGyms);

// post route for gyms

router.post("/", createGyms);
export default router;

// get single gym by id

router.get("/:gymId", getSingleGym);

// delete gym

router.delete("/:gymId", deleteGym);

// update gym records

router.patch("/:gymId", updateGym);
