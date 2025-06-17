/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.text('username').comment('Nome completo do usuário');
    table.text('email').notNullable().unique();
    table.text('password').defaultTo('123456');
    table.string('telefone');
    table.string('role').defaultTo('user').comment('user = comum, parcial, admin');
    table.string('tipo_usuario').comment('cliente, entregador, admin');
    table.text('photo').comment('link da foto do perfil');
    table.string('cpf');
    table.date('data_nascimento');
    table.string('status').comment('ativo, inativo, bloqueado');
    table.string('preferencias_contato');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');

    // Índices nomeados
    table.index(['email', 'password'], 'login');
    table.index(['username'], 'name');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
