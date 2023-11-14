/* 

Scenario: You're developing a complex application that involves a variety of data 
manipulation tasks. One of the tasks is to create a function that takes an array 
of values and a callback function. The function should iterate through the array 
and apply the callback function to each element. The result of the callback function 
should replace the original element in the array. However, you want to ensure that 
the data types of the elements and the return values of the callback function are aligned.

Problem: Write a TypeScript function called transformArray that uses advanced generics 
to take an array of values and a callback function. The callback function should have a 
type parameter that matches the input array's type, and it should return a value of the 
same type. The transformArray function should iterate through the input array, apply the 
callback function to each element, and replace the original element with the result. Test 
the function with various data types and callback functions.

*/

function transformArray<T>(inputArray: T[], callback: (element: T) => T): T[] {
    return inputArray.map(callback);
}



// Example usage
const numberArray = [10, 2, 33, 4, 50];
const doubledArray = transformArray(numberArray, (num) => num * 2);
console.log(doubledArray); // Output: [20, 4, 66, 8, 100]

const stringArray = ['apple', 'banana', 'cherry', 'saschA'];
const uppercasedArray = transformArray(stringArray, (str) => str.toUpperCase());
console.log(uppercasedArray); // Output: ['APPLE', 'BANANA', 'CHERRY', 'SASCHA']