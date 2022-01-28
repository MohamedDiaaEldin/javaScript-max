const defaultResult = 0;
let currentResult = defaultResult;
let logEntries =  [] ;


function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeLog( prevResult , number ,currentResult, operation){
  // create object
  const logEntry = {
    operation : operation, 
    prevResult : prevResult ,
    number : number, 
    result : currentResult
  };

  // access object data
  // logEntries.push(logEntry.operation)
  logEntries.push(logEntry)
  console.log(logEntries);
}


function calculateResult (calculateType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // validate input 
  // check for zero
  if ( !enteredNumber ){
    return ;
  }
  let operator ;
  if (calculateType === 'ADD'){
    currentResult += enteredNumber;
    operator = '+' ;    
  }
  else if (calculateType === 'SUBTRACT'){
    currentResult -=  enteredNumber;
    operator  = '-' ;
  }
  else if(calculateType === 'MULTIPLY'){
    currentResult *= enteredNumber ;
    operator  = '*' ;
  } 
  else{
    currentResult /= enteredNumber;
    operator  = '/' ;
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeLog(initialResult, enteredNumber, currentResult, "ADD") ;
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVID");
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);