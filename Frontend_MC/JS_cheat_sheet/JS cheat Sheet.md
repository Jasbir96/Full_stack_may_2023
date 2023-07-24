### 1. JavaScript Fundamentals

- **Writing JavaScript code in an HTML page**: We must enclose the JavaScript code within the script tag in order to include it on an HTML page just as the example shown below:
```html
<script type = "text/javascript"> //JavaScript coding can be done inside this tag </script>
```
With this information, the browser can correctly make out that the code is written in JavaScript and execute the code.
- **Inclusion of external JavaScript files in an HTML file**: An external JavaScript file can also be written separately and included within our HTML file. That way, different types of code can be kept isolated from one another, resulting in better-organised files. For instance, if our JavaScript code is written in the file script.js, we can include it in our HTML file in the following way:
```html
<script src="script.js"></script>
```

* **Usage of Comments in JavaScript coding:** Comments are extremely useful in programming because they can assist others to understand what's going on in your code or they can help you if you have forgotten something. Keep in mind that they must be correctly identified so that the browser does not attempt to execute them. There are two alternatives available in JavaScript in which we can add comments:
    - **Single-line comments:** If you want to include a single line comment, start it with "//".
    - **Multi-line comments**: If you want to write a comment that spans multiple lines, you can wrap it in /* and */ to prevent it from being executed.

### 2. Javascript Variables

Variables in JavaScript are simply names of storage locations. In other words, they can be considered as stand-in values that we can use to perform various operations in our JavaScript codes. JavaScript allows the usage of variables in the following three ways:

- **var**: The most commonly used variable in JavaScript is var. It can be redeclared and its value can be reassigned, but only inside the context of a function. When the JavaScript code is run, variables defined using var are moved to the top. An example of a variable declared using the "var" keyword in JavaScript is shown below:
```javascript
var x = 140; // variable x can be reassigned a new value and also redeclared
```

- **const**: const variables in JavaScript cannot be used before they appear in the code. They can neither be reassigned values, that is, their value remains fixed throughout the execution of the code, nor can they be redeclared. An example of a variable declared using the "const" keyword in JavaScript is shown below:
```javascript
const x = 5; // variable x cannot be reassigned a new value or redeclared
```

* **let**: The let variable, like const, cannot be redeclared. But they can be reassigned a value. An example of a variable declared using the "let" keyword in JavaScript is shown below:

```javascript
let x = 202; // variable x cannot be redeclared but can be reassigned a new value
```


### 3 Javascript Data Types

Different types of values and data can be stored in JavaScript variables. To assign values to JavaScript variables, you use the equals to "=" sign operator. The various data types in JavaScript are as follows:

- Numbers: These are just numerical values. They can be real numbers or integers. An example of the numbers data type is shown below: `var id = 100`
- Variables: The variable data type, as the name suggests, does not have a fixed value. An example of the variables data type is shown below: `var y`
- Text (strings): String data types of JavaScript are a combination of multiple characters. An example of the string data type is shown below: `var demoString = "Hello World"`
- Operations: Operations in JavaScript can also be assigned to JavaScript variables. An example of these is shown below: `var sum = 20 + 30 + 29`
- Boolean values: Boolean values can be true or false. An example of the boolean data type is shown below: `var booleanValue = true`
- Constant numbers: As the name suggests, these data types have a fixed value. An example of the constant data type is shown below: `const g = 9.8`
- Objects: JavaScript objects are containers for named values called properties. They possess their own data members and methods. An example of the objects data type is shown below:  
    `var name = {name:"Jon Snow", id:"AS123"}`
![datatypes](./Pasted%20image%2020230721192019.png)

### 4. JavaScript Operators

You can use variables to conduct a variety of tasks using JavaScript operators. The various types of operators in JavaScript are as follows:

- **Fundamental Operators**: These operators are used to perform basic operations like addition, multiplication, etc. in JavaScript. A list of all the Fundamental operators in JavaScript is as follows:
    - **+**: The Addition Operator is used to add two numbers
    - **-**: The Subtraction Operator is used to subtract two numbers
    - *****: The MultiplicationOperator is used to multiply two numbers
    - **/**: The Division Operator is used to divide two numbers
    - **(...)**: In general, operations within brackets are executed earlier than that outside. This grouping operator surrounds an expression or sub-expression with a pair of parentheses to override the conventional operator precedence, allowing operators with lower precedence to be evaluated before operators with higher precedence. It does exactly what it says: it groups the contents of the parentheses.
    - **%**: The Modulus operator is used to get the remainder when an integer number is divided by another integer number.
    - **++**: The Increment operator is used to increase the value of numbers by one.
    - **--**: The Decrement operator is used to decrease the value of numbers by one.
- **Comparison Operators:**  A list of all the Comparison operators in JavaScript is as follows:
    - **==**: The equality operator (==) returns a Boolean value when its two operands are equal. It tries to convert and compare operands of different kinds, unlike the rigorous equivalent operator.
    - **===**: The equivalent operator (===) returns a Boolean value when its two operands are equal and they have the same type. It tries to convert and compare operands of the same kinds, unlike the equality operator.
    - **!=**: The inequality operator (!=) returns a Boolean value if the two operands are not equal. It tries to convert and compare operands of different kinds, unlike the rigorous inequivalent operator.
    - **!==**: The inequivalent operator (!=) returns a Boolean value if the two operands are not equal or they are not of the same type. It tries to convert and compare operands of the same kinds, unlike the inequality operator.
    - **?**: The conditional (ternary) operator is the only one in JavaScript that takes three operands: a condition followed by a question mark (? ), an expression to execute if the condition is true followed by a colon (:), and lastly an expression to execute if the condition is false. As an alternative to an if...else statement, this operator is commonly used.>: The Greater than operator returns true if the operand to its left is greater in value than the operand to its right.
    - **<**: The Lesser than operator returns true if the operand to its left is lesser in value than the operand to its right.
    - **>=**: The Greater than equals to operator returns true if the operand to its left is greater in value or equal in value than the operand to its right.
    - **<=**: The Lesser than equals to operator returns true if the operand to its left is lesser in value or equal in value than the operand to its right.
- **Logical Operators**:  A list of all the Logical operators in JavaScript is as follows:
    - **&&**: If and only if all of the operands are true, the logical AND operator (logical conjunction) for a set of Boolean operands is true. It will be false if it is not. When evaluating from left to right, the operator returns the value of the first falsy operand encountered, or the value of the last operand if all operands are truth.
    - **||**: If and only if one or more of its operands are true, the logical OR operator (logical disjunction) is true for a set of operands. It's most often used with logical (Boolean) values. It returns a Boolean value when this is the case. The || operator, on the other hand, returns the value of one of the provided operands, hence using it with non-Boolean values will result in an error.
    - **!**: The logical NOT operator (logical complement, negation) converts truth to falsity. It's most commonly used with logical (Boolean) values. It returns false if its sole operand can be transformed to true when used with non-Boolean values; otherwise, it returns true.
### 5. JavaScript If-Else Statements
The if-else statements are simple to comprehend. You can use them to set conditions for when your code runs. If specific requirements are met, something is done; if they are not met, another action is taken. The switch statement is a concept that is comparable to if-else. The switch however allows you to choose which of several code blocks to run. The syntax of if-else statements in JavaScript is given below:

```javascript
if (check condition) { // block of code to be executed if the given condition is satisfied
} 
else { // block of code to be executed if the given condition is not satisfied 
}
```


### 6. Loops in JavaScript

Most programming languages include loops. They let you run code blocks as many times as you like with different values. Loops can be created in a variety of ways in JavaScript:

- **the for loop**: The most frequent method of creating a loop in JavaScript. Its syntax is shown below:

```javascript
for (initialization of the loop variable; condition checking for the loop; updation after the loop) {
   // code to be executed in loop
}
```

- **the while loop**: Establishes the conditions under which a loop will run. Its syntax is shown below:

```javascript
// Initialization of the loop variable is done before the while loop begins
while(condition checking for the loop){
// 1. code to be executed in loop
// 2. updation of the loop variable
}
```


### 7.  Javascript Arrays
Arrays are the next item on our JavaScript cheat sheet. Arrays are used in a variety of programming languages. They are a method of categorising variables and attributes. Arrays can be defined as a collection of objects of the same type. In JavaScript, here's how one can make an array of cars:

```javascript
var cars = ["Mercedes", "Tesla","Volvo"];
```

Now that we understand how to make arrays, we can perform a bunch of operations on them. Let us take a look at some JavaScript methods which can be used to perform various types of operations on arrays:

- **pop():** This method is used for removing the last element of an array.
- **push():** This method is used for adding a new element at the very end of an array.
- **concat():** This method is used for joining various arrays into a single array.
- **reverse():** This method is used for reversing the order of the elements in an array.
- **shift():** This method is used for removing the first element of an array.
- **slice():** This method is used for pulling a copy of a part of an array into a new array.
- **splice()**: This method is used for adding elements in a particular way and position.
- **toString():** This method is used for converting the array elements into strings.
- **unshift():** This method is used for adding new elements at the beginning of the array.
- **valueOf():** This method is used for returning the primitive value of the given object.
- **indexOf():** This method is used for returning the first index at which a given element is found in an array.
- **lastIndexOf():** This method is used for returning the final index at which a given element appears in an array.
- **join():** This method is used for combining elements of an array into one single string and then returning it.
- **sort():** This method is used for sorting the array elements based on some condition.

### 8. JavaScript Functions

JavaScript Functions can be defined as chunks of code written in JavaScript to perform a single task. A function in JavaScript looks like this:

```javascript
function nameOfTheFunction(parameterOne, parameterTwo, parameterThree, parameterFour,....,parameterN) {
   // Job or Task of the function 
}
```

The code above consists of the "function" keyword and a name, as you can see. The parameters of the function are enclosed in brackets, while the function's task code and output is enclosed in curly brackets. You can make your own, but there are a few default functions to make your life easier.

- **Global Functions:** Every browser that can run JavaScript has a set of global functions built-in. Some of them are as follows:
    - **parseFloat():** This function is used for parsing the argument passed to it and returning a floating-point number.
    - **parseInt():** This function is used for parsing the argument passed to it and returning an integral number.
    - **isNaN():** This function is used for determining if a given value is Not a Number or not.
    - **Number():** This function is used for returning a number converted from what is passed as an argument to it.
    - **eval():** This function is used for evaluating JavaScript programs presented as strings.

### 9. Scope and Scope Chain in JavaScript

**1. Scope:** The accessibility or visibility of variables in JavaScript is referred to as scope. That is, which sections of the program can access a given variable and where the variable can be seen. There are usually three types of scopes:

- **Global Scope:** The global scope includes any variable that is not contained within a function or block (a pair of curly braces). Global scope variables can be accessed from anywhere in the program. An example showing the global scope of a variable is given below:

```javascript
var hello = 'Hello!';
function sayHello() {
 console.log(hello);
}
// 'Hello!' gets logged
sayHello();
```

- **Local or Function Scope:** Variables declared inside a function are local variables. They can only be accessed from within that function; they are not accessible from outside code. An example showing local scope of a variable is given below:

```javascript
function sayHello() {
 var hello = 'Hello!';
 console.log(hello);
}
// 'Hello!' gets logged
sayHello();
```

console.log(hello); // Uncaught ReferenceError: hello is not defined

- **Block Scope**: Unlike var variables, let and const variables can be scoped to the nearest pair of curly brackets in ES6. They can't be reached from outside that pair of curly braces, which means they can't be accessed from the outside. An example showing the block scope of a variable is given below:

```javascript
{
 let hello = 'Hello!';
 var language = 'Hindi';
 console.log(hello); // 'Hello!' gets logged
}
console.log(language); // 'Hindi!' gets logged
console.log(hello); // Uncaught ReferenceError: hello is not defined
```

**2. Scope Chain:** When a variable is used in JavaScript, the JavaScript engine searches the current scope for the variable's value. If it can't find the variable in the inner scope, it will look into the outer scope until it finds it or reaches the global scope.

If it still can't identify the variable, it will either return an error or implicitly declare the variable in the global scope (if not in strict mode). Let us take into consideration the following example:

```javascript
let a = 'a';
function foo() {
 let b = 'b';
 console.log(b); // 'b' gets logged
 console.log(a); // 'a' gets logged
 randomNumber = 33;
 console.log(randomNumber);  // 33 gets logged
}
foo();
```

When the function foo() is called, the JavaScript engine searches for the 'b' variable in the current scope and finds it. Then it looks for the 'a' variable in the current scope, which it can't find, so it moves on to the outer scope, where it finds it (i.e global scope).

After that, we assign 33 to the 'randomNumber' variable, causing the JavaScript engine to search for it first in the current scope, then in the outer scope.

If the script isn't in strict mode, the engine will either create a new variable called randomNumber and assign 33 to it, or it will return an error (if not in strict mode).

As a result, the engine will traverse the scope chain till the time when a variable is found.

### 9. JavaScript Hoisting

Prior to executing the code, the interpreter appears to relocate the declarations of functions, variables, and classes to the top of their scope using a process known as Hoisting in JavaScript. Functions can be securely utilised in code before they have been declared thanks to hoisting. Variable and class declarations are likewise hoisted, allowing them to be referenced prior to declaration. It should be noted that doing so can result in unforeseen mistakes and is not recommended. There are usually two types of Hoisting:

- **Function Hoisting**: Hoisting has the advantage of allowing you to use a function before declaring it in your code as shown in the code snippet given below. Without function hoisting, we would have to first write down the function display and only then can we call it.

```javascript
display("Lion");
function display(inputString) {
 console.log(inputString); // 'Lion' gets logged 
}
```

- **Variable Hoisting:** You can use a variable in code before it is defined and/or initialised because hoisting works with variables as well. JavaScript, however, only hoists declarations, not initializations! Even if the variable was initially initialised then defined, or declared and initialised on the same line, initialization does not occur until the associated line of code is run. The variable has its default initialization till that point in the execution is reached (undefined for a variable declared using var, otherwise uninitialized). An example of variable hoisting is shown below:

```javascript
console.log(x) // 'undefined' is logged from hoisted var declaration (instead of 7)
var x // Declaration of variable x
x = 7; // Initialization of variable x to a value 7
console.log(x); // 7 is logged post the line with initialization's execution.
```

### 10. JavaScript Strings

Strings are nothing but a combination of characters that can be used to perform a variety of tasks. JavaScript provides so many methods for Strings alone that it makes sense to cover Strings as a standalone topic in this cheat sheet. Let us now look at the various escape sequences in JavaScript and the methods which JavaScript provides for strings:

* **String methods:** As mentioned earlier, JavaScript provides a lot of methods to manipulate its Strings. Let us take a look at some of them:
    - **toLowerCase()** — This method is used for converting strings to lower case
    - **toUpperCase()** — This method is used for converting strings to upper case
    - **charAt()** — This method is used for returning the character at a particular index of a string
    - **charCodeAt()** — This method is used for returning to us the Unicode of the character at a  given index
    - **fromCharCode()** — This method is used for returning a string made from a particular sequence of UTF-16 code units
    - **concat()** — This method is used for concatenating or joining multiple strings into a single string
    - **match()** — This method is used for retrieving the matches of a string against a pattern string which is provided
    - **replace()** — This method is used for finding and replacing a given text in the string
    - **indexOf()** — This method is used for providing the index of the first appearance of a given text inside the string
    - **lastIndexOf()** — This method is similar to the indexOf() methods and only differs in the fact that it searches for the last occurrence of the character and searches backwards
    - **search()** — This method is used for executing a search for a matching text and returning the index of the searched string
    - **substr()** —  This method is pretty much the same as the slice() method but the extraction of a substring in it depends on a given number of characters
    - **slice()** — This method is used for extracting an area of the string and returning it
    - **split()** — This method is used for splitting a string object into an array of strings at a particular index
    - **substring()** — Even this method is almost the same as the slice() method but it does not allow negative positions
    - **valueOf()** — This method is used for returning the primitive value (one without any properties or methods) of a string object
    - 
- **Escape Sequences or Escape Characters:** An escape character is a character in computers and telecommunications that causes the following characters in a character sequence to take on a different meaning. Metacharacters include escape characters, which are a subset of metacharacters. In general, whether something is an escape character or not is determined by the context. For instance, Strings in JavaScript are delimited by single or double-quotes. You must use special characters in a string if you want to utilise quote marks. A few of the escape characters allowed by JavaScript are as follows:
    - **\'** — Single quotes
    - **\"** — Double quotes
    - **\t** — Horizontal tab
    - **\v** — Vertical tab
    - **\\** — Backslash
    - **\b** — Backspace
    - **\f** — Form feed
    - **\n** — Newline
    - **\r** — Carriage return
- **String methods:** As mentioned earlier, JavaScript provides a lot of methods to manipulate its Strings. Let us take a look at some of them:
    - **toLowerCase()** — This method is used for converting strings to lower case
    - **toUpperCase()** — This method is used for converting strings to upper case
    - **charAt()** — This method is used for returning the character at a particular index of a string
    - **charCodeAt()** — This method is used for returning to us the Unicode of the character at a  given index
    - **fromCharCode()** — This method is used for returning a string made from a particular sequence of UTF-16 code units
    - **concat()** — This method is used for concatenating or joining multiple strings into a single string
    - **match()** — This method is used for retrieving the matches of a string against a pattern string which is provided
    - **replace()** — This method is used for finding and replacing a given text in the string
    - **indexOf()** — This method is used for providing the index of the first appearance of a given text inside the string
    - **lastIndexOf()** — This method is similar to the indexOf() methods and only differs in the fact that it searches for the last occurrence of the character and searches backwards
    - **search()** — This method is used for executing a search for a matching text and returning the index of the searched string
    - **substr()** —  This method is pretty much the same as the slice() method but the extraction of a substring in it depends on a given number of characters
    - **slice()** — This method is used for extracting an area of the string and returning it
    - **split()** — This method is used for splitting a string object into an array of strings at a particular index
    - **substring()** — Even this method is almost the same as the slice() method but it does not allow negative positions
    - **valueOf()** — This method is used for returning the primitive value (one without any properties or methods) of a string object

### 11 JavaScript Data Transformation - Imp HOFs of JS

Data Transformation in JavaScript can be done with the usage of higher-order functions. Higher-order functions are those functions in JavaScript which can accept one or more functions as inputs and return a function as the result. All higher-order functions that take a function as input are map(), filter(), and reduce(). Let us now take a look at how these functions can be used. One thing to note over here is that because all of these functions are part of the JavaScript Array prototype, they can be used directly on an array.

* **map() method**: The map method applies a function to each array element. The callback function receives each element of the array and returns a new array of the same length. This method can be used to conduct the same operation/transformation on each element of an array and return a new array with the modified values of the same length. An example of the usage of the map() method is given below:

```javascript
var arr = [10,20,30];
var triple  = arr.map(x => x * 3);
triple; // [30,60,90]
```

* **filter() method:**  Using the filter() method, items that do not meet a criterion are removed from the array. The callback function receives every element of the array. If the callback returns true on each iteration, the element will be added to the new array; otherwise, it will not be added. An example of the usage of the filter() method is given below:

```javascript
var arr = [13,40,47];
var odd = arr.filter(x => x % 2);
odd; // [13,47]
```

* **reduce() method:** The reduce() method can combine the items of an array into a single value. When using reduce, we must declare the accumulator's beginning value (final result). Each iteration, we do some operation inside the callback, which is then added to the accumulator. An example of the usage of the reduce() method is given below:

```javascript
var arr = [10,20,30];
var counter = 0;
let answer = arr.reduce((accumulator, value) => value + accumulator, counter);
console.log(answer) // answer = 10 + 20 + 30 = 60
```

### 12 Numbers and Mathematics in JavaScript

JavaScript provides various properties and methods to deal with Numbers and Maths. Let us have a quick look at those:

- **Numbers Properties:**
    - **MAX VALUE** — The maximum numeric value that JavaScript can represent.
    - **NaN** — The "Not-a-Number" value is NaN.
    - **MIN VALUE** — The smallest positive numeric value that JavaScript can represent.
- **Numbers Methods:**
    - **toString()** — Returns a string representation of an integer.
    - **toFixed()** — Returns a number's string with a specified number of decimals.
    - **toPrecision()** — Converts a number to a string of a specified length.
    - **valueOf()** — Returns a number in its original form.
    - **toExponential()** — Returns a rounded number written in exponential notation as a string.

- **Maths Methods:**
    - **floor(x)** — x's value rounded to the nearest integer.
    - **abs(x)** — Returns the value of x in its absolute (positive) form.
    - **pow(x,y)** — x to the power of y
    - **random()** — Returns a number between 0 and 1 at random.
    - **round(x)** — Rounds the value of x to the nearest integer.
    - **sqrt(x)** — x's square root
    - **ceil(x)** — x's value rounded to the next integer
    - **max(x,y,z,...,n)** — Returns the highest-valued number.
    - **min(x,y,z,...,n)** — The number with the lowest value is the same as the number with the highest value.

### 13 JavaScript Memory Allocation and Event Loop
In JavaScript, memory allocation is done in the following regions:
- **Heap memory:** Data is stored in random order and memory is allocated accordingly.
	![heap digram](Pasted%20image%2020230724144318.png)
- **Stack memory/call stack:** Memory that is allocated in stacks. The majority of the time, it's employed for functions.
![Stack Memory](./Pasted%20image%2020230724144422.png)
	
	The call stack is a function that maintains track of all other functions that are running at the same time. An example to illustrate it is as follows:

	```javascript
	function second(){ 
		console.log("Second")
	 } 
	 
	function First() { 
		second()
	} 
	 function foo()
	  { 
	  first() 
	 } 
	  foo()
  ```
	
The order in which functions are executed, that is. when they are popped out of the stack once their purpose is completed, is as follows:
  1. console.log
  2. second
  3. first
  4. foo

* **Event loop** An event loop is something that pulls various things like methods, etc. out of the queue and places it onto the function execution stack whenever the function stack becomes empty. The event loop is the trick to making JavaScript appear multithreaded even if it is only single-threaded. The following illusion clearly explains how the event loop works
![event loop-1](./Pasted%20image%2020230724144754.png)
		
The callback function in the event queue has not yet started and is waiting for its time to be added to the stack when SetTimeOut() is called and the Web API waits. The function is loaded onto the stack when the function stack becomes empty, as seen below:
![event loop-1](./Pasted%20image%2020230724144849.png)

### 14 Asynchronous JavaScript

A number of Web API features now use asynchronous code for running, especially those that access or fetch a resource from external devices, for instance, retrieving files from the network, accessing some database and returning data to it, accessing a video stream from a webcam, or broadcasting the display to a VR headset. There are the ways in which asynchronous coding can be done in JavaScript:

- **Async Callbacks:** When invoking a function, async callbacks are functions that are passed as arguments and begin executing code in the background. When the background code is finished, it runs the callback function to notify you that the work is complete or that anything interesting has occurred. Callbacks are a little out of date these days, but they're still utilised in a lot of older but still popular APIs.  The first parameter of the setTimeout method is an example of an async callback

``` javascript
console.log("Before");
setTimout(()=>{ 
  console.log("Between")}
  ,1000);
console.log("After");
```

 When we give a callback function as an input to another function, we are merely passing the function's reference; the callback function isn't immediately performed. It is asynchronously "called back" (thus the name) somewhere within the containing function's body. When the time comes, the contained function is in charge of calling the callback function.

* **Promises**: 
	- **The `Promise` Object**: A `Promise` is an object that can be used to get the outcome of an asynchronous operation when that result is not instantly available.Since JavaScript code runs in a non-blocking manner, promises become essential when we have to wait for some asynchronous operation without holding back the execution of the rest of the code.

	* **States of a JavaScript Promise** A JavaScript `Promise` object can be in one of three states: `pending`, `resolved`, or `rejected`. While the value is not yet available, the `Promise` stays in the `pending` state. Afterwards, it transitions to one of the two states: `resolved` or `rejected`. A `resolved` promise stands for a successful completion. Due to errors, the promise may go in the `rejected` state.
  * **Executor function of JavaScript Promise object** A JavaScript promise’s executor function takes two functions as its arguments. The first parameter represents the function that should be called to resolve the promise and the other one is used when the promise should be rejected. A `Promise` object may use any one or both of them inside its executor function. In the given example, the promise is always resolved unconditionally by the `resolve` function. The `reject` function could be used for a rejection.

```javascript
const executorFn = (resolve, reject) => {
resolve('Resolved!');
};
const promise = new Promise(executorFn);
```

* **`.then()` method of a JavaScript Promise object** The `.then()` method of a JavaScript `Promise` object can be used to get the eventual result (or error) of the asynchronous operation.`.then()` accepts two function arguments. The first handler supplied to it will be called if the promise is resolved. The second one will be called if the promise is rejected.

```javascript
	const promise = new Promise((resolve, reject) => {    
			  setTimeout(() => {
			    resolve('Result');
			  }, 200);
	});

	promise.then((res) => {
	  console.log(res);
	}, (err) => {
	  alert(err);
	});
```
* **`.catch()` method for handling rejection** : The function passed as the second argument to a `.then()` method of a promise object is used when the promise is rejected. An alternative to this approach is to use the JavaScript `.catch()` method of the promise object. The information for the rejection is available to the handler supplied in the `.catch()` method.
```javascript
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(Error('Promise Rejected Unconditionally.'));
					}, 1000);
				});
			promise.then((res) => {
				console.log(value);
				});
			promise.catch((err) => {
				alert(err);
			});
```

* **JavaScript Promise.all()** The JavaScript `Promise.all()` method can be used to execute multiple promises in parallel. The function accepts an array of promises as an argument. If all of the promises in the argument are resolved, the promise returned from `Promise.all()` will resolve to an array containing the resolved values of all the promises in the order of the initial array. Any rejection from the list of promises will cause the greater promise to be rejected.In the code block, `3` and `2` will be printed respectively even though `promise1` will be resolved after `promise2`. 

```javascript
		const promise1 = new Promise((resolve, reject) => {
			 setTimeout(() => {
					    resolve(3);
					  }, 300);
		});
 
		const promise2 = new Promise((resolve, reject) => {
		  setTimeout(() => {
		    resolve(2);
		  }, 200);
		});

		Promise.all([promise1, promise2])
			.then((res) => {
					console.log(res[0]);
					console.log(res[1]);
				});			
```
* **Avoiding nested `Promise` and `.then()`** In JavaScript, when performing multiple asynchronous operations in a sequence, promises should be composed by chaining multiple `.then()` methods. This is better practice than nesting. Chaining helps streamline the development process because it makes the code more readable and easier to debug.

```javascript
		const promise = new Promise((resolve, reject) => {  
						  setTimeout(() => {
						    resolve('*');
						  }, 1000);
						});

		const twoStars = (star) => {  
		  return (star + star);
		};
		
		const oneDot = (star) => {  
		  return (star + '.');
		};
		
		const print = (val) => {
		  console.log(val);
		};

// Chaining them all together
	promise.then(twoStars).then(oneDot).then(print);
```

*  **Async Await**  An asynchronous JavaScript function can be created with the `async` keyword before the `function` name, or before `()` when using the arrow function syntax. An `async` function returns a promise. The JavaScript `async...await` syntax allows multiple promises to be initiated and then resolved for values when required during execution of the program. As an alternate to chaining `.then()` functions, it offers better maintainability of the code and a close resemblance synchronous code.
```javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

const msg = async function() { //Async Function Expression
  const msg = await helloWorld();
  console.log('Message:', msg);
}
const msg1 = async () => { //Async Arrow Function
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds

msg1(); // Message: Hello World! <-- after 2 seconds
```

### 15 JavaScript Error Handling

Various types of errors occur when we are coding in JavaScript. There are a few options for dealing with them:

- **try** — We can define a code block for testing errors using the try block.
- **catch** — We can set up a block of code to execute in the event of an error using the catch statement. 
- **throw** — Instead of the typical JavaScript errors, we can also create custom error messages using the throw statement.
- **finally** — JavaScript also allows us to run our code regardless of the outcome of try and catch.

JavaScript possesses its own inbuilt error object which has the following properties:

- **name** — It is used for setting or returning an error name.
- **message** — It is used for setting or returning the error message as a string.

There are six types of ways in which the error property can return its name. They are as follows:

- **SyntaxError** —  It indicates that a syntax error was occurring.
- **ReferenceError** —  It indicates that an illegal reference was occurring.
- **TypeError** —  It indicates that a type error was occurring.
- **RangeError** — It indicates that some number is “out of range”.
- **EvalError** — It indicates that an error has occurred within the eval() method.
- **URIError** —  It indicates that an encodeURI() error was occurring.

