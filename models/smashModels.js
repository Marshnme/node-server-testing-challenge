const db = require('../data/dbConfig');

module.exports = {
    getAll,
    update,
    insert,
    remove
};

function getAll(){
    return db('smash');
};

function update(id,change){
return db('smash').where({id:id}).update(change)
};

function insert(body){
    return db('smash').insert(body, 'id').then(([id]) =>{
        return db('smash').where({id}).first()
    });
};

function remove(id){
    return db('smash').where({id:id}).del()
};