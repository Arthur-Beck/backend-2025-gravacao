/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
   return knex.schema.createTable('payments', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').comment('Quem realizou o pagamento');
    table.integer('user_control').comment('Usuário que criou o registro');
    table.string('tipo_pagamento');
    table.decimal('valor_pago', 10, 2);
    table.float('value');
    table.text('receipt').comment('comprovante');
    table.text('obs');
    table.timestamp('paymentdate');
    table.string('status_pagamento');
    table.boolean('verified').defaultTo(false).comment('verificado');
    table.text('photo').comment('link para foto do comprovante');
    table.timestamp('data_pagamento');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');

    // Índices nomeados
    table.index(['paymentdate'], 'all payment of date');
    table.index(['value'], 'range of value');
    table.index(['paymentdate', 'value'], 'all payment between date and value');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('payments');
}
