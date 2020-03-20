
exports.up = function(knex) {
    return knex.schema
        .createTable("recipies", tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
        })
        .createTable("steps", tbl => {
            tbl.increments();
            tbl.string("steps", 255).notNullable();
            tbl.string("details", 255).notNullable();
            tbl.integer("recipieId").unsigned().references("id").inTable('recipies').onUpdate("CASCADE").onDelete("CASCADE")
        })
        .createTable("ingredients", tbl => {
            tbl.increments();
            tbl.string("name", 255).notNullable()
        })
        .createTable('ingredients_recipies', tbl => {
            tbl.primary(['recipie_id', 'ingredient_id'])
        
            tbl.integer('recipie_id')
              .unsigned()
              .notNullable()
              .references('recipie_id')
              .inTable('recipie')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE');
              
            tbl.integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('ingredient_id')
              .inTable('ingredients')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE');
        
              tbl.string('qty')
              .notNullable();
          })  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients_recipies')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipies')  
};
