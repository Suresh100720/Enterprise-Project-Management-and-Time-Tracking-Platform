import express from "express";
import {
  createInvoice,
  getInvoices,
  getPayments
} from "../controllers/billingController.js";

const router = express.Router();

router.post("/invoice", createInvoice);
router.get("/invoices", getInvoices);
router.get("/payments", getPayments);

export default router;