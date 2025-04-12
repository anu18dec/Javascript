//----------------------------------------------------------------------------------------//
// Main debounce function
// The debounce function creates a debounced version of the provided function.
function debounce(func, delay) {
    let timer;
    return function (...args) {
        const context = this;

        clearTimeout(timer);

        timer = setTimeout(() => func.apply(context, args), delay);
    };
}

// Function that will be debounced
function test(par1, par2) {
    console.log(par1, par2);
}

// Creating a debounced version of the test function
const debouncedFunc = debounce(test, 5000);

let a = 10,
    b = 20;

// Mimiking a loop that calls the debounced function multiple times
// In a real-world scenario, this could be an event listener or similar
for (let i = 0; i < 5; i++) {
    debouncedFunc(a, b);
    a++;
    b++;
}

// output would be 14 24 after 5 seconds
//----------------------------------------------------------------------------------------//
