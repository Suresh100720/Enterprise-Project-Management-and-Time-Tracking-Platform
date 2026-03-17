import mongoose from "mongoose";

const milestoneSchemaDefinition = new mongoose.Schema(
  {
    name: String,

    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    dueDate: Date
  },
  { timestamps: true }
);

const MilestoneModel = mongoose.model(
  "Milestone",
  milestoneSchemaDefinition
);

export default MilestoneModel;