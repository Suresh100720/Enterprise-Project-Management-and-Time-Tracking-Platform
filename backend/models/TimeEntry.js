import mongoose from "mongoose";

const timeEntrySchemaDefinition = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task"
    },

    hours: Number,

    description: String
  },
  { timestamps: true }
);

const TimeEntryModel = mongoose.model(
  "TimeEntry",
  timeEntrySchemaDefinition
);

export default TimeEntryModel;