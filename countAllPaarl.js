module.exports = function countAllPaarl(fromTown){
    var list = fromTown.split(",");
    let count = 0;
      var fromTown = [];
      for(var i=0; i< list.length; i++){
      
        if (list[i].includes("CJ") == true){
       count++;
          fromTown.push(list[i].trim());
      }
      }
      return count; 
    }