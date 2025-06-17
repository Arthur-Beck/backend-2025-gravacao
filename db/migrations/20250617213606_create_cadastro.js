/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('cadastro', (table) => {
    table.increments('id').primary();
    table.string('nome_completo');
    table.string('email');
    table.string('senha');
    table.string('telefone');
    table.date('data_nascimento');
    table.string('cpf');
    table.string('foto_perfil');
    table.text('preferencias_contato');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('cadastro');
}
