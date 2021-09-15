module.exports = function mostProfitableDepartment(salesData1) {
  const departmentList = {};
  for (var i=0; i<salesData1.length;i++) {
    const product = salesData1[i];
    departmentList[product.department] = 0;
  }
  for (var i=0; i<salesData1.length;i++) {
    const product = salesData1[i];
    var dep = departmentList[product.department];
    dep += product.sales;
    departmentList[product.department] = dep
  }
  var currSales = 0;
  var currDep = ' ';
  for (const depSales in departmentList) {
    const currDepSales = departmentList[depSales];
    if (currDepSales > currSales) {
      currSales = currDepSales;
      currDep = depSales;
    }
  }
  return currDep;
}