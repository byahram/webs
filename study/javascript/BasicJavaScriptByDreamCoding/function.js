// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
  }
  printHello();                   // Hello
  
  function log(message) {
    console.log(message);
  }
  log('Hello@');                   // Hello@
  log(1234);                    // 1234
  
  // 2. Parameters
  // primitive parameters: passed by value
  // object parameters: passed by reference
  function changeName(obj) {
    obj.name = 'coder';
  }
  const ellie = { name: 'ellie' };
  changeName(ellie);
  console.log(ellie);                   // {name: 'coder'}
  
  // 3. Default parameters (added in ES6)
  function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');                   // Hi! by unknown
  
  // 4. Rest parameters (added in ES6) - array
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);                 // dream   // coding   // ellie
    }
  
    for (const arg of args) {
      console.log(arg);                 // dream   // coding   // ellie
    }
  
    args.forEach((arg) => console.log(arg));                    // dream   // coding   //ellie
  }
  printAll('dream', 'coding', 'ellie');
  
  // 5. Local scope
  let globalMessage = 'global'; // global variable
  function printMessage() {
    let message = 'hello';
    console.log(message);                   // hello : local variable
    console.log(globalMessage);                 // global
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
  printMessage();
  
  // 6. Return a value
  function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);                 // sum: 3
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // good
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
  }
  
  // First-class function
  // functions are treated like any other variable
  // can be assigned as a value to variable
  // can be passed as an argument to other functions.
  // can be returned by another function
  
  // 1. Function expression
  // a function declaration can be called earlier than it is defined. (hoisted)
  // a function expression is created when the execution reaches it.
  const print = function () {
    // anonymous function
    console.log('print');
  };
  print();                   // print
  const printAgain = print;
  printAgain();                 // print
  const sumAgain = sum;
  console.log(sumAgain(1, 3));                  // 4
  
  // 2. Callback function using function expression
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  // recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);                   // no
  randomQuiz('love you', printYes, printNo);                    // yes
  
  // Arrow function
  // always anonymous
//   const simplePrint = function () {
//     console.log('simplePrint!');
//   };
  const simplePrint = () => console.log('simplePrint!');
  const add = (a, b) => a + b;
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  };
  
  // IIFE: Immediately Invoked Function Expression : 선엄함과 동시에 호출
  (function hello() {
    console.log('IIFE');
  })();                 // IIFE
  
  // Fun quiz time❤️
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
  
  function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unknown command');
    }
  }
  console.log(calculate('add', 2, 3));                  // 5
