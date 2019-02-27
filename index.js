var CollectionModel = require('./lib/collection-model');
var ExtendedCollectionModel = require('./lib/extended-collection-model');
var ExtendedCollectionModelCollection = require('./lib/extended-collection-model').Collection;
var ScopeClientMixin = require('./lib/mongodb-scope-client-mixin');

module.export = CollectionModel;
module.export.ExtendedCollectionModel = ExtendedCollectionModel;
module.export.ScopeClientMixin = ScopeClientMixin;
module.export.Collection = ExtendedCollectionModelCollection;
