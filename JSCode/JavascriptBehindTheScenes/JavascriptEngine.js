// JavaScript Engine
// It is a program that executes JavaScript code.
// It converts JavaScript code into something the computer processor can understand.

// Understanding the JavaScript engine, call stack, and heap is crucial for comprehending how JavaScript code is executed and how memory is allocated during runtime.

// ### JavaScript Engine:
// The JavaScript engine is a program or an interpreter that executes JavaScript code. It consists of two main components:

// 1. Memory Heap: The memory heap is where memory allocation occurs during the runtime of your code. It's a large region of memory where all the objects and variables are stored.

// 2. Call Stack: The call stack is a data structure that records the execution of functions. When a function is invoked, a stack frame is created and pushed onto the call stack. When a function finishes its execution, the stack frame is popped off the call stack.

// ### Call Stack:
// The call stack is a mechanism for the JavaScript engine to keep track of multiple function calls in the program. It works in a Last-In, First-Out (LIFO) manner. When a function is called, a new stack frame is pushed onto the call stack, and when a function returns, its stack frame is popped off the call stack. This process continues as the program executes function calls.

// Example:

// ```javascript
// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function calculate(a, b) {
//   const sum = add(a, b);
//   const result = multiply(sum, 2);
//   return result;
// }

// const finalResult = calculate(3, 4);
// console.log(finalResult);
// ```

// ### Heap:
// The heap is a large region of memory where objects and variables are stored during the execution of a program. When you declare variables or create objects, they are allocated memory space in the heap. The heap is where dynamic memory allocation happens, and it's managed by the JavaScript engine.

// Example:

// ```javascript
// let obj1 = { name: 'John', age: 30 };
// let obj2 = { name: 'Jane', age: 25 };
// let obj3 = obj1;
// ```

// In this example, objects `obj1` and `obj2` are created in the heap, and the reference to `obj1` is assigned to `obj3`.

// Understanding the JavaScript engine, call stack, and heap is crucial for writing efficient and optimized JavaScript code, as it helps you comprehend how memory is managed and how functions are executed within the program.