exports.up = function(knex, Promise) {
  	return knex.schema.table('places', function(table) {
  		table.dropColumn('latitude');
  		table.dropColumn('longitude');
  	});
};

exports.down = function(knex, Promise) {
  	 return knex.schema.table('places', function(table) { 
  	 	table.string('latitude');
  		table.string('longitude');
  	 });
};