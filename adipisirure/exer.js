const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

myMap.delete("key2");

console.log(myMap.has("key2")); // Output: false
