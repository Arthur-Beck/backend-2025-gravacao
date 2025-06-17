import database from '../../db/connection.js';

export async function findAllPayments() {
  try {
    const query = `
      SELECT id, user_id, value, paymentdate, status_pagamento, verified
      FROM payments;
    `;
    const statement = database.prepare(query);
    const payments = statement.all();
    return payments;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching payments: ' + error.message);
  }
}

export async function createPaymentDB(data) {
  try {
    const query = `
      INSERT INTO payments (user_id, value, paymentdate)
      VALUES (?, ?, ?);
    `;
    const statement = database.prepare(query);
    const result = statement.run(data.user_id, data.value, data.paymentdate);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating payment: ' + error.message);
  }
}

export async function removePayment(id) {
  try {
    const query = 'DELETE FROM payments WHERE id = ?;';
    const statement = database.prepare(query);
    const result = statement.run(id);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error removing payment: ' + error.message);
  }
}

export async function updatePaymentDB(id, data) {
  try {
    const fields = [];
    const values = [];

    if (data.user_id !== undefined) {
      fields.push('user_id = ?');
      values.push(data.user_id);
    }
    if (data.value !== undefined) {
      fields.push('value = ?');
      values.push(data.value);
    }
    if (data.receipt !== undefined) {
      fields.push('receipt = ?');
      values.push(data.receipt);
    }
    if (data.obs !== undefined) {
      fields.push('obs = ?');
      values.push(data.obs);
    }
    if (data.paymentdate !== undefined) {
      fields.push('paymentdate = ?');
      values.push(data.paymentdate);
    }
    if (data.verified !== undefined) {
      fields.push('verified = ?');
      values.push(data.verified ? 1 : 0); // converter booleano em 0 ou 1
    }
    if (data.photo !== undefined) {
      fields.push('photo = ?');
      values.push(data.photo);
    }
    if (data.tipo_pagamento !== undefined) {
      fields.push('tipo_pagamento = ?');
      values.push(data.tipo_pagamento);
    }
    if (data.status_pagamento !== undefined) {
      fields.push('status_pagamento = ?');
      values.push(data.status_pagamento);
    }
    if (data.data_pagamento !== undefined) {
      fields.push('data_pagamento = ?');
      values.push(data.data_pagamento);
    }

    if (fields.length === 0) {
      throw new Error('Nenhum campo fornecido para atualizar');
    }

    const query = `
      UPDATE payments SET ${fields.join(', ')}
      WHERE id = ?;
    `;

    values.push(id); // ID vai no final

    const statement = database.prepare(query);
    const result = statement.run(...values);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating payment: ' + error.message);
  }
}


