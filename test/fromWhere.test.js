let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function' , function(){
    it('should return "registrationNumber" the town is from' , function(){
        
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!');
        
        
    });

});


    