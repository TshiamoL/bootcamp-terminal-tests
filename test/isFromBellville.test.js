let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function' , function(){
    it('should return true if a car reg is from Bellville' , function(){
        
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);

        
    });

});
