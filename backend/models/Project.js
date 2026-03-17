import mongoose from "mongoose";

const projectSchemaDefinition = new mongoose.Schema(
  {
    name: String,

    description: String,

    budget: Number,

    budgetType: String,

    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    team: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],

    status: {
      type: String,
      default: "Active"
    }
  },
  { timestamps: true }
);

const ProjectModel = mongoose.model("Project", projectSchemaDefinition);

export default ProjectModel;