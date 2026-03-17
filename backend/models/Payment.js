import mongoose from "mongoose";

const paymentSchemaDefinition = new mongoose.Schema(
  {
    invoiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice"
    },

    amount: Number,

    date: Date
  },
  { timestamps: true }
);

const PaymentModel = mongoose.model("Payment", paymentSchemaDefinition);

export default PaymentModel;