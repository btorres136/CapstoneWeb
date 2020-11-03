// eslint-disable-next-line no-unused-vars
const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.dateTime('deleted_at');
}

/**
 *
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.userTable, (table) => {
      table.increments().notNullable();
      table.string('email', 320).notNullable().i;
      table.string('name', 35).notNullable();
      table.string('lastName', 50).notNullable();
      table.integer('age', 2).notNullable();
      table.string('password', 2000).notNullable();
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.cTypeTable, (table) => {
      table.increments().notNullable();
      table.float('risk').notNullable();
      table.float('angle').notNullable();
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.sTypeTable, (table) => {
      table.increments().notNullable();
      table.float('risk').notNullable();
      table.float('lowAngle').notNullable();
      table.float('highAngle').notNullable();
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.analysisTable, (table) => {
      table.increments().notNullable();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable(tableNames.userTable)
        .notNullable();
      table
        .integer('cType_id')
        .unsigned()
        .references('id')
        .inTable(tableNames.cTypeTable);
      table
        .integer('sType_id')
        .unsigned()
        .references('id')
        .inTable(tableNames.sTypeTable);
      addDefaultColumns(table);
    }),
  ]);
};

/**
 *
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await Promise.all([
    tableNames.cTypeTable,
    tableNames.sTypeTable,
    tableNames.analysisTable,
    tableNames.userTable
  ].map((tableName) => knex.schema.dropTable(tableName)));
};
