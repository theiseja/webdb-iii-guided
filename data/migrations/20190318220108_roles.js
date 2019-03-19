
exports.up = function(knex, Promise) {
  // define our roles table
 return knex.schema.createTable('roles', rolesTBL => {
      rolesTBL.increments(); // auto increments id
      rolesTBL.string('name', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  // undo our up logic
  // remove our roles table
  return knex.schema.dropTableIfExists('roles'); 
};
