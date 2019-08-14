exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    //primary key, called id, int autoincrements
    tbl.increments();

    tbl
      .string("vin", 128)
      .unique()
      .notNullable();
    tbl.string("make", 128);
  });
};

exports.down = function(knex) {};
