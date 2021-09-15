let assert = require("assert");
let isWeekday = require("../isWeekday.js");

describe('The isWeekday function' , function(){
    it('should return "weekDay" that starts with M' , function(){
        
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
        
    });

});
