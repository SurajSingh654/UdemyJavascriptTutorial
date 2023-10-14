"use strict";

// ----------- Why to use use strict? -------------

/* 
 1. The "use strict" directive is used to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.
 Strict mode makes it easier to write "secure" JavaScript by eliminating some JavaScript silent errors and potential security holes.
 Here is an example of how to use "use strict":

*/

function doSomething() {
    // some code here
}

/* In this example, the "use strict" directive is placed at the beginning of the script. This means that the entire script will be executed in strict mode.
It's important to note that "use strict" is not a statement, but a literal expression. This means that it doesn't do anything on its own, but it has a significant effect on the code around it.
 In addition to being placed at the beginning of a script, "use strict" can also be used inside individual functions to enable strict mode for that function only:
*/
function doSomething() {
    "use strict";
    // some code here
}

// In this case, strict mode is enabled only for the code inside the doSomething function

// ----------- Strict mode and functions -------------

let name = "Suraj Singh"

/* if(true){
    names = "Suraj"
    console.log(names)  // without use script , it will give error i.e, ReferenceError
}
*/

// const private = 334;    this line gives error in strict mode --> SyntaxError: Unexpected strict mode reserved word

console.log("No Error!")