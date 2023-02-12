//1
var arrays = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var newArray = {};

for (var i = 0; i < arrays.length; i++) {
    var array = arrays[i];
    newArray[array] = (newArray[array] || 0) + 1;
}
var sortedArray = Object.entries(newArray).sort((a, b) => b[1] - a[1]);
var result = Object.fromEntries(sortedArray);
console.log(result);

//2
var array2 = ['name', 'John', 'lastname', 'Black', 'age', '23'];
var object = {};
for (var i = 0; i < array2.length; i += 2) {
    object[array2[i]] = array2[i + 1];
}
console.log(object);