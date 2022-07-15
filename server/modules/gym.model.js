import mongoose from "mongoose";

const gymSchema = new mongoose.Schema(
  {
    gymName: {
      type: String,
      required: true,
    },
    gymCity: {
      type: String,
      required: true,
    },
    gymContact: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("gyms", gymSchema);
