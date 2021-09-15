let assert = require("assert");
let greet = require("../greet");

describe('The greet function' , function(){
    it('should return "Hello Sanele" when I greet Sanele' , function(){
        
        assert.equal(greet('Sanele'), 'Hello, Sanele');
        
    });

});

    