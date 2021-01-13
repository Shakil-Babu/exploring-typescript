// TypeScript - Tuples

// TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.

// Consider the following example of number, string and tuple type variables.
// Example: Tuple vs Other Data Types

var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable
let employe:[number, string] = [3,'shakil'] ;

// In the above example, we have defined a variable empId as number type and empName as string type with values.
// Here, we declared and assigned two variables to id and name of an employee. The same thing can be achieved by using a single tuple type variable.
// employee is the tuple type variable with two values of number and string type.
// Thus, removing the need to declare two different variables.

// A tuple type variable can include multiple data types as shown below.
// Example: Tuple

var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];
let li :[number, string, boolean] = [34,'Shakil', false];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

// You can declare an array of tuple also.
// Example: Tuple Array

var employeee:[number, string][];
employeee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

// another
let em:[number, boolean][] ;
em = [[2,true],[3,false],[34,true]];

// TypeScript generates an array in JavaScript for the tuple variable. For example, var employee: [number, string] = [1, 'Steve'] will be compiled as var employee = [1, "Steve"] in JavaScript.
// Accessing Tuple Elements

// We can access tuple elements using index, the same way as an array. An index starts from zero.
// Example: Accessing Tuple

var employee: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"

// Add Elements into Tuple

// You can add new elements to a tuple using the push() method.
// Example: push()

var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

// This is allowed because we are adding number and string values to the tuple and they are valid for the employee tuple.

// Now, let's try to add a boolean value to the tuple.

employee.push(true) ;

// The above example will throw the following error:

// test.ts(4,15): error TS2345:
// Argument of type 'true' is not assignable to parameter of type 'number | string'.

// We get an error saying that adding a boolean value to a tuple of type 'number | string' is not permitted. Hence, a tuple declared as 'number | string' can store only number and string values.

// The tuple is like an array. So, we can use array methods on tuple such as pop(), concat() etc.