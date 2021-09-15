module.exports =   function regCheck(regNo, regEnd) {
    return regNo.endsWith(regEnd);
    }
    console.log(regCheck("RG 45 HN GP", "GP"));
    console.log(regCheck("LKG 679 EC", "EC"));
    console.log(regCheck("GHT 456 MP", "MP"));
    console.log(regCheck("FGT 491 L", "L"));   
    
    console.log(regCheck("ND 123-456", "ND"));
    console.log(regCheck("CY 678-453", "CY"));
    console.log(regCheck("CA 1234-123", "CA"));
