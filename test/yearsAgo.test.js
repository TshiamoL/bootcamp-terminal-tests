let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function' , function(){
    it('should return "year" when I multiply getFullYear' , function(){
        
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});