import mongoose from "mongoose";

const teamSchemaDefinition = new mongoose.Schema(
  {
    name: String,

    department: String,

    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

const TeamModel = mongoose.model("Team", teamSchemaDefinition);

export default TeamModel;