const CollectionModel = require('./lib/collection-model');
const ExtendedCollectionModel = require('./lib/extended-collection-model');
const ScopeClientMixin = require('./lib/mongodb-scope-client-mixin');

module.export = CollectionModel;
module.export.ExtendedCollectionModel = ExtendedCollectionModel;
module.export.ScopeClientMixin = ScopeClientMixin;
