/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return await knex('payments').insert([
    {
      user_id: 1,
      value: 49.90,
      paymentdate: '2025-06-17T10:00:00',
      verified: false,
      status_pagamento: 'pendente'
    },
    {
      user_id: 2,
      value: 99.90,
      paymentdate: '2025-06-16T14:30:00',
      verified: true,
      status_pagamento: 'aprovado'
    }
  ]);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  
}
