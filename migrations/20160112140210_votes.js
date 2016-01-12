exports.up = function(knex, Promise) {
  	return knex.schema.createTable('votes', function(table) {
  		table.increments(); 
  		table.integer('place_id').unsigned().references('id')
  		.inTable('places').onDelete('cascade');
  		table.integer('user_id').unsigned().references('id')
  		.inTable('users').onDelete('cascade');
  		table.date('date').unsigned();
  	});
};

exports.down = function(knex, Promise) {
  	 return knex.schema.dropTable('votes');
};
