/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('historico_pedidos', (table) => {
    table.increments('id').primary();
    table.integer('usuario_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.text('itens').notNullable().comment('descrição dos produtos/cestas/combos');
    table.decimal('valor_total', 10, 2).notNullable();
    table.string('status').defaultTo('pendente').comment('pendente, em andamento, entregue, cancelado');
    table.timestamp('data_pedido').defaultTo(knex.fn.now());
    table.string('forma_pagamento');
    table.integer('entregador_id').unsigned().references('id').inTable('users').onDelete('SET NULL').comment('usuário do tipo entregador');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('historico_pedidos');
}
