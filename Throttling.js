//----------------------------------------------------------------------------------------//
// Main throttle function
// The Throttle function creates a throttled version of the provided function.

function Throttle(func, delay) {
    let isThrottling = false;
    return function (...args) {
        const context = this;
        if (!isThrottling) {
            func.apply(context, args);
            isThrottling = true;

            setTimeout(() => {
                isThrottling = false;
            }, delay);
        }
    };
}

// Function that will be throttled
function Test(par1, par2) {
    console.log(par1, par2);
}

// Creating a throttled version of the test function
const throttledFunc = Throttle(Test, 2000);

// Mimiking a loop that calls the throttled function multiple times
// In a real-world scenario, this could be an event listener or similar
async function TestThrottling(params) {
    let a = 10,
        b = 20;
    for (let i = 0; i < 10; i++) {
        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(""), 1000);
        });
        throttledFunc(a, b);
        a++;
        b++;
    }
}

TestThrottling();

// Output would be 10 20, 12 22, 14 24, ... every 2 seconds
//----------------------------------------------------------------------------------------//
