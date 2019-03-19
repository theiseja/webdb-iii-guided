
exports.up = function(knex, Promise) {
  // define our roles table
 return knex.schema.createTable('roles', table => {
      table.increments(); // auto increments id
      table.string('name', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  // undo our up logic
  // remove our roles table
  return knex.schema.dropTableIfExists('roles'); 
};
