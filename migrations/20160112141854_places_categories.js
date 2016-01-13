exports.up = function(knex, Promise) {
  	return knex.schema.createTable('places_categories', function(table) {
  		table.increments(); 
  		table.integer('place_id').unsigned().references('id')
  		.inTable('places').onDelete('cascade');
  		table.integer('category_id').unsigned().references('id')
  		.inTable('categories').onDelete('cascade');
  	});
};

exports.down = function(knex, Promise) {
  	 return knex.schema.dropTable('places_categories');
};


