module.exports = function countAllFromTown(regNum, allTowns){
        var allRegNum = regNum.split(",");
        let counter = 0;
        var fromTown = [];
        for (var i = 0; i < allRegNum.length; i++){ 
          var howManyFromTown = allRegNum[i].trim();
           if(howManyFromTown.includes(allTowns)) {
           counter++;
              }
              }
              
      console.log(howManyFromTown);
        return counter
      }  
        
