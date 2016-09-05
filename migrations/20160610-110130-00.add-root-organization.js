/* eslint-disable no-undef */

exports.name         = 'add-root-organization';
exports.description  = 'Adds the first organization to the system';

exports.isReversible = true;
exports.isIgnored    = false;


exports.up = function(db, done) {
  db.collection('organizations').insertOne({
    _id       : new ObjectId('57ad47e540ae419411780bbf'),
    name      : 'Keepers',
    createdAt : new Date(),
    updatedAt : new Date(),
    __v       : 0
  }, (err) => done(err));
};

exports.down = function(db, done) {
  db.collection('organizations').removeOne({
    _id: new ObjectId('57ad47e540ae419411780bbf')
  }, (err) => done(err));
};
