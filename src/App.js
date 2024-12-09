import React, { useState } from "react";
import './App.css';


const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  const handleClear = () => {
    setInputValue("");
    setResult("");
  };

  const handleEquals = () => {
    try {
      if (inputValue.trim() === "") {
        setResult("Error");
      } else {
        const evalResult = eval(inputValue); // Evaluate the expression
        setResult(evalResult);
      }
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={inputValue}
        readOnly
        placeholder="Enter numbers"
      />
      <div className="buttons">
        {[7, 8, 9, "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn.toString())}>
            {btn}
          </button>
        ))}
        {[4, 5, 6, "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn.toString())}>
            {btn}
          </button>
        ))}
        {[1, 2, 3, "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn.toString())}>
            {btn}
          </button>
        ))}
        {[0, ".", "+", "="].map((btn) => (
          <button
            key={btn}
            onClick={btn === "=" ? handleEquals : () => handleClick(btn.toString())}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;
