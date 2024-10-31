// create_collabook_tables.js
exports.up = function (knex) {
  return knex.schema
    .createTable('Users', (table) => {
      table.increments('user_id').primary();
      table.string('email').notNullable().unique();
      table.string('pseudo').notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('Stories', (table) => {
      table.increments('story_id').primary();
      table.string('title').notNullable();
      table.text('content').notNullable();
      table.integer('creator_id').unsigned().references('user_id').inTable('Users').onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('Collaborations', (table) => {
      table.increments('collaboration_id').primary();
      table.integer('user_id').unsigned().references('user_id').inTable('Users').onDelete('CASCADE');
      table.integer('story_id').unsigned().references('story_id').inTable('Stories').onDelete('CASCADE');
      table.string('role').defaultTo('co-author');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Collaborations')
    .dropTableIfExists('Stories')
    .dropTableIfExists('Users');
};