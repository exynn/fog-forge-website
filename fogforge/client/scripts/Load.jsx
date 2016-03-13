Load = function(){
    this.All = function(collection){
        return collection.find().fetch();
    };
};