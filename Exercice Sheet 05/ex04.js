// Write the isEmpty(obj) function that returns true if the object has no properties, false otherwise. It should work like this:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

const isEmpty = (obj) => Object.keys(obj).length === 0;

const schedule = {};
alert(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
alert(isEmpty(schedule)); // false