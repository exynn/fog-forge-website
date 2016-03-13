Load = function(collectionName){
    this.collection = new Mongo.Collection(collectionName);
    this.All = function(){
        return this.collection.find().fetch();
    };
};