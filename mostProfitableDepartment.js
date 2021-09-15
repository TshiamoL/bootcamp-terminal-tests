module.exports = function mostProfitableDepartment(salesDataa){
  
    const departListing = {};
    for (var i=0; i<salesDataa.length; i++){
      const prod = salesDataa[i];
     departListing[prod.department] = 0;
    }
    
    for (var i=0 ; i<salesDataa.length; i++){
      const prod = salesDataa[i];
      var depart = departListing[prod.department];
      depart += prod.sales;
      departListing[prod.department] = depart
      
  }
    
  var currentSales = 0;
    var currentDepart = ""; 
    for (const departSales in departListing){
      const currentDepartSales = departListing[departSales];
      if (currentDepartSales > currentSales){ 
          currentSales = currentDepartSales; 
          currentDepart = departSales;
     }
    }
      return currentDepart;
    }
    module.exports =  function mostProfitableDay(saleDatab){
        const profit = {};
        for (var i= 0; i<saleDatab.length; i++){
          const prod1 = saleDatab[i];
          profit[prod1.day] = 0;
        }
        for (var i=0; i<saleDatab.length; i++) {
          const prod1 = saleDatab[i];
          
          var currentDay = profit[prod1.day];
          currentDay += prod1.sales;
          profit[prod1.day] = currentDay;
        }
        var currentSales = 0;
        var currentDay = '';
        for(const daySales in profit){
          const currentDaySales = profit[daySales];
          if(currentDaySales> currentSales){
            currentSales = currentDaySales;
            currentDay = daySales;
     }
    }
      return currentDay;
   }
        
        
