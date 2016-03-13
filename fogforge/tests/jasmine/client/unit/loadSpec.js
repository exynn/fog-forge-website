describe("test Load functionality.", function(){
    var testCollection;
    
    beforeEach(function(){
        testCollection = new Mongo.Collection('Test');
        testCollection.insert({value: "testVal"});
    });   
    
    it("Should load data from database and return JSON of collection.",function(){
        var testdbLoad = new Load();
        var collection = testdbLoad.All(testCollection);
        expect(collection[0].value).toBe('testVal'); 
    });
});