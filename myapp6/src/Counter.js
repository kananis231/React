import React, { useState, useEffect } from 'react';

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    setCurrentInput(currentInput + number);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousInput(currentInput);
    setCurrentInput("");
  };

  const calculate = () => {
    if (!operator || !previousInput || !currentInput) return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let calculation = 0;

    switch(operator) {
      case '+':
        calculation = prev + current;
        break;
      case '-':
        calculation = prev - current;
        break;
      case '*':
        calculation = prev * current;
        break;
      case '/':
        calculation = prev / current;
        break;
      default:
        return;
    }

    setResult(calculation);
    setPreviousInput("");
    setCurrentInput(String(calculation));
    setOperator(null);
  };

  const clearAll = () => {
    setCurrentInput("");
    setPreviousInput("");
    setOperator(null);
    setResult("");
  };

  useEffect(() => {
    if (result !== "") alert(`Result is: ${result}`);
  }, [result]);

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="display">
        {currentInput || "0"}
      </div>
      <div className="number-pad">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(number => (
          <button key={number} onClick={() => handleNumberClick(number)}>{number}</button>
        ))}
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearAll}>C</button>
      </div>
    </div>
  );
}

export default App;
