exports.up = function(knex, Promise) {
  	return knex.schema.table('categories', function(table) {
  		table.boolean('featured');
  		
  	});
};

exports.down = function(knex, Promise) {
  	 return knex.schema.table('categories', function(table) { 
  	 	table.dropColumn('featured');
  	 });
};
