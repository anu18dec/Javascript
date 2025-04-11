// Polyfill for map

// Main polyfill method for map
// This method takes a function as an argument and applies it to each element of the array
function MapPolyfill(callbackfunc) {
    let newArray = [];
    let counter;
    for (counter = 0; counter < this.length; counter++) {
        newArray.push(callbackfunc(this[counter], counter, this));
    }
    return newArray;
}

// Attaching polyfill method with the prototype of Array
// This allows us to use the method on all array instances
Array.prototype.MapPolyfill = MapPolyfill;

// Example usage of the polyfill method
const arr = [1, 2, 3, 5];

// Using the polyfill method to double each element in the array
console.log(
    arr.MapPolyfill((value, index, array) => {
        return value * 2;
    })
);

//----------------------------------------------------------------------------------------//

// Main polyfill method for filter
function FilterPolyfill(callbackfunc) {
    let newArray = [];
    let counter;

    for (counter = 0; counter < this.length; counter++) {
        if (callbackfunc(this[counter], counter, this)) {
            newArray.push(this[counter]);
        }
    }

    return newArray;
}

// Attaching polyfill method with the prototype of Array
Array.prototype.FilterPolyfill = FilterPolyfill;

// Example usage of the filter polyfill method
console.log(
    arr.FilterPolyfill((value, index, array) => {
        return value % 2 === 0 ? true : false;
    })
);

//----------------------------------------------------------------------------------------//

// Main polyfill method for map
function ReducePolyfill(callbackfunc, accumulator) {
    let initialVal = this.length > 0 ? this[0] : 0;

    if (accumulator !== undefined) {
        initialVal = accumulator;
    }

    let counter;

    for (counter = 0; counter < this.length; counter++) {
        initialVal = callbackfunc(initialVal, this[counter], counter, this);
    }

    return initialVal;
}

// Attaching polyfill method with the prototype of Array
Array.prototype.ReducePolyfill = ReducePolyfill;

// Example usage of the reduce polyfill method
console.log(
    arr.ReducePolyfill((accumulator, value, index, array) => {
        return accumulator + value;
    }, 0)
);
