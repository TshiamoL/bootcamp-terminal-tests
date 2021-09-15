module.exports = function totalPhoneBill(callsMadeAndSmsSentString) {
    const phoneCallsAndSms = callsMadeAndSmsSentString.split(",");
      let totalPhoneBill = 0; 
      for (var i = 0; i < phoneCallsAndSms.length; i++) {
    const currentCallsAndSms = phoneCallsAndSms[i].trim();
        if(currentCallsAndSms.includes("call")) {
        totalPhoneBill += 2.75;
    
    }
      else if (currentCallsAndSms.includes("sms")) {
        totalPhoneBill += 0.65;
      }
      }
      return "R" + totalPhoneBill.toFixed(2);
     
    }