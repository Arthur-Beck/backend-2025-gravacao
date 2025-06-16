/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('payments', function(table) {
    table.increments('id').primary();
    table.integer('user_id').notNullable().comment('Quem realizou o pagamento');
    table.integer('user_control').comment('usuário que criou o registro');
    table.float('value').notNullable();
    table.text('receipt').notNullable();
    table.text('obs');
    table.timestamp('paymentdate').notNullable();
    table.boolean('verified').defaultTo(false).comment('verificado');
    table.text('photo').comment('link para foto do comprovante');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updted_at');

    //Índices extras
    table.index(['paymentdate'], 'all payment of date');
    table.index(['value'], 'range of value');
    table.index(['paymentdate', 'value'], 'all payment beetweend date and value');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('payments');
}
