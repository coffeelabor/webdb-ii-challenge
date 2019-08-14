exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        // { id: 1, colName: "rowValue1" },
        // { id: 2, colName: "rowValue2" },
        // { id: 3, colName: "rowValue3" }
        { vin: "1GTG5BE37F1061816", make: "Saab" }
        // { "vin": "1GTG5BE37F1061816", "make": "Saab", "model": "9-7X", "transmission-type": null, "mileage": 17389.66, "title-status": "clean" }
      ]);
    });
};
