import mongoose from "mongoose";

const invoiceSchemaDefinition = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    client: String,

    amount: Number,

    status: {
      type: String,
      default: "Pending"
    }
  },
  { timestamps: true }
);

const InvoiceModel = mongoose.model("Invoice", invoiceSchemaDefinition);

export default InvoiceModel;