import mongoose from "mongoose";

const taskSchemaDefinition = new mongoose.Schema(
  {
    title: String,

    description: String,

    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    priority: String,

    status: {
      type: String,
      default: "Todo"
    },

    dueDate: Date
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", taskSchemaDefinition);

export default TaskModel;