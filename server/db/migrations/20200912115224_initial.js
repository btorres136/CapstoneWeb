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
      table.string('email', 320).notNullable().unique();
      table.string('name', 35).notNullable();
      table.string('lastName', 50).notNullable(); 
      table.string('password', 2000).notNullable();
      table.integer('role_id').unsigned().references('id').inTable(tableNames.roleTable);
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.patientTable, (table) => {
      table.increments().notNullable();
      table.integer('age', 2).notNullable();
      table.integer('initial_weight', 4).notNullable();
      table.integer('initial_height', 4).notNullable();
      table.integer('user_id').unsigned().unique().references('id').inTable(tableNames.userTable);
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.roleTable, (table) => {
      table.increments().notNullable();
      table.string('role', 50).notNullable();
      table.string('description', 500).notNullable();
      table.specificType('permissions', 'text ARRAY').notNullable();
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
        .integer('patient_id')
        .unsigned()
        .references('id')
        .inTable(tableNames.patientTable)
        .notNullable();
      table
        .integer('cType_id')
        .unsigned().unique()
        .references('id')
        .inTable(tableNames.cTypeTable);
      table
        .integer('sType_id')
        .unsigned().unique()
        .references('id')
        .inTable(tableNames.sTypeTable);
      table.integer('last_weight', 4).nullable();
      table.integer('last_height', 4).nullable();
      table.integer('last_age',3).nullable();
      table.string('image_submitted', 2000).notNullable();
      table.string('processed_image', 2000).nullable();
      table.integer('reviewedBy').unsigned().references('id').inTable(tableNames.doctorTable);
      table.integer('spine_id').unsigned().unique().references('id').inTable(tableNames.spineTable);
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.doctorTable, (table) => {
      table.increments().notNullable();
      table.integer('user_id').unsigned().unique().references('id').inTable(tableNames.userTable);
      table.string('license', 2000).notNullable().unique();
      table.integer('validatedBy').unsigned().references('id').inTable(tableNames.userTable).nullable();
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.spineTable, (table) => {
      table.increments().notNullable();
      table.float('boneO').notNullable();
      table.float('bone1').notNullable();
      table.float('bone2').notNullable();
      table.float('bone3').notNullable();
      table.float('bone4').notNullable();
      table.float('bone5').notNullable();
      table.float('bone6').notNullable();
      table.float('bone7').notNullable();
      table.float('bone8').notNullable();
      addDefaultColumns(table);
    })
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
    tableNames.userTable,
    tableNames.doctorTable,
    tableNames.patientTable,
    tableNames.roleTable,
    tableNames.spineTable,
  ].map((tableName) => knex.schema.dropTable(tableName)));
};
