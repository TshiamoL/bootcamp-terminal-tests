module.exports = function isWeekday(weekDay) {
    return weekDay.startsWith('Mon');
     
    }
    console.log(isWeekday("Monday"));
    console.log(isWeekday("Saturday"));

