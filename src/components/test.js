var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var d = new Date();
var n = d.getMonth();
console.log(months[n]);


var stateObj = {date: `${months[n]}`};

console.log(stateObj.date);