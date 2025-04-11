// Polyfill for map

// Main polyfill method for map
// This method takes a function as an argument and applies it to each element of the array
function MapPolyfill(func) {
    let newArray = [];
    let counter;
    for (counter = 0; counter < this.length; counter++) {
        newArray.push(func(this[counter], counter, this));
    }
    return newArray;
}

// Attaching polyfill method with the prototype of Array
// This allows us to use the method on all array instances
Array.prototype.MapPolyfill = MapPolyfill;

// Example usage of the polyfill method
const arr = [1, 2, 3, 4];

// Using the polyfill method to double each element in the array
// The function takes three arguments: value, index, and the original array
console.log(
    arr.MapPolyfill((value, index, array) => {
        return value * 2;
    })
);
