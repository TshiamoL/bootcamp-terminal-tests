let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The CountRegNumber function' , function(){
    it('should return "RegCount" split times length' , function(){
        
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
        
    });

});