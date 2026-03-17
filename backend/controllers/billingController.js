import Invoice from "../models/Invoice.js";
import Payment from "../models/Payment.js";

export const createInvoice = async (requestObject, responseObject) => {

  const invoiceRecord = await Invoice.create(requestObject.body);

  responseObject.json(invoiceRecord);
};

export const getInvoices = async (requestObject, responseObject) => {

  const invoicesList = await Invoice.find();

  responseObject.json(invoicesList);
};

export const getPayments = async (requestObject, responseObject) => {

  const paymentsList = await Payment.find();

  responseObject.json(paymentsList);
};