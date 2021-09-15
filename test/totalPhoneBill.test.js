let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function' , function(){

    it('should return "R10.20" for the 3 calls and smses made.', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
        
        
    it('should return "R4.05" for a call and 2 smses made,', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
       
        
    });
    it('should return "R3.40" for a call and a sms made.', function(){
    assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});

  