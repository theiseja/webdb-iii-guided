
exports.up = function(knex, Promise) {
   // define our users table
 return knex.schema.createTable('users', usersTBL => {
    usersTBL.increments(); // auto increments id
    usersTBL.string('name', 128)
    .notNullable()
});
};

exports.down = function(knex, Promise) {
  // undo our up logic
  // remove our roles table
  return knex.schema.dropTableIfExists('users'); 
};
