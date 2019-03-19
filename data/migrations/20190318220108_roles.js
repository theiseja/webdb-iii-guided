
exports.up = function(knex, Promise) {
  // define our roles table
 return knex.schema.createTable('roles', tbl => {
      tbl.increments(); // auto increments id
      tbl.string('name', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  // undo our up logic
  // remove our roles table
  return knex.schema.dropTableIfExists('roles'); 
};
