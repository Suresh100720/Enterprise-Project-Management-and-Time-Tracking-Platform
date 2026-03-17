import mongoose from "mongoose";

const skillSchemaDefinition = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    skills: {
      react: Number,
      node: Number,
      python: Number,
      devops: Number
    }
  },
  { timestamps: true }
);

const SkillModel = mongoose.model("Skill", skillSchemaDefinition);

export default SkillModel;