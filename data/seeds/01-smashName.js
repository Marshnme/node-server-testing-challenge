
exports.seed = function(knex) {
      return knex('table_name').insert([
        {id: 1, name: 'Young Link'},
        {id: 2, name: 'Toon Link'},
        {id: 3, name: 'Adult Link'}
      ]);
};
