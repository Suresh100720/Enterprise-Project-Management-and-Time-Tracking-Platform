import mongoose from "mongoose";

const availabilitySchemaDefinition = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    startDate: Date,

    endDate: Date,

    status: {
      type: String,
      enum: ["Available", "Busy", "Leave"]
    }
  },
  { timestamps: true }
);

const AvailabilityModel = mongoose.model(
  "Availability",
  availabilitySchemaDefinition
);

export default AvailabilityModel;