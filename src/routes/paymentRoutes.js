import express from 'express';
const router = express.Router();

import {
  getPayments,
  createPayment,
  deletePayment,
  updatePayment
} from '../controllers/paymentController.js';

router.get("/payment", getPayments);
router.post("/payment", createPayment);
router.delete("/payment/:id", deletePayment);
router.patch("/payment/:id", updatePayment);

export default router;
