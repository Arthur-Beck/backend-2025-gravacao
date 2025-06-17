import {
  findAllPayments,
  createPaymentDB,
  removePayment,
  updatePaymentDB
} from '../models/paymentModel.js';

export const getPayments = async (req, res) => {
  try {
    const payments = await findAllPayments();
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error - Payment Controller' });
  }
};

export const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const result = await createPaymentDB(paymentData);
    res.status(201).json({ message: 'Payment created successfully', paymentId: result.lastInsertRowid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error - Payment Controller' });
  }
};

export const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await removePayment(id);
    if (result.changes === 0) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error - Payment Controller' });
  }
};

export const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentData = req.body;
    const result = await updatePaymentDB(id, paymentData);
    if (result.changes === 0) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error - Payment Controller' });
  }
};
