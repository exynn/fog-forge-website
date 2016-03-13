describe("test Load functionality.", function(){
   it("Should load data from database and return JSON of collection.",function(){
      var testdbLoad = new Load('Test');
      expect(testdbLoad.All()).toBe(''); 
   }); 
});