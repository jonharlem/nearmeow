exports.up = function(knex, Promise) {
  	return knex.schema.createTable('places', function(table) {
  		table.increments(); 
  		table.string('name');
  		table.string('google_place_id');
  		table.decimal('latitude');
  		table.decimal('longitude');
  	});
};

exports.down = function(knex, Promise) {
  	 return knex.schema.dropTable('places');
};
