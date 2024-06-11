import React, { useState } from "eact";
import Button from "./Button";
import Display from "./Display";
import HistoryTable from "./HistoryTable";

const Calculator = () => {
  const [mode, setMode] = useState("simple");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleModeChange = () => {
    setMode(mode === "simple" ? "intermediate" : "simple");
  };

  const handleNumberClick = (num) => {
    if (operator) {
      setNum2(num2 + num);
    } else {
      setNum1(num1 + num);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  const handleEqualsClick = () => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = "";
    }
    setResult(result);
    setHistory([...history, `${num1} ${operator} ${num2} = ${result}`]);
    setNum1("");
    setNum2("");
    setOperator("");
  };

  const handleClearClick = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  const getButtons = () => {
    if (mode === "simple") {
      return [
        { label: "1", onClick: () => handleNumberClick("1") },
        { label: "2", onClick: () => handleNumberClick("2") },
        { label: "3", onClick: () => handleNumberClick("3") },
        { label: "+", onClick: () => handleOperatorClick("+") },
        { label: "4", onClick: () => handleNumberClick("4") },
        { label: "5", onClick: () => handleNumberClick("5") },
        { label: "6", onClick: () => handleNumberClick("6") },
        { label: "-", onClick: () => handleOperatorClick("-") },
        { label: "7", onClick: () => handleNumberClick("7") },
        { label: "8", onClick: () => handleNumberClick("8") },
        { label: "9", onClick: () => handleNumberClick("9") },
        { label: "=", onClick: handleEqualsClick },
        { label: "C", onClick: handleClearClick },
      ];
    } else {
      return [
        { label: "1", onClick: () => handleNumberClick("1") },
        { label: "2", onClick: () => handleNumberClick("2") },
        { label: "3", onClick: () => handleNumberClick("3") },
        { label: "+", onClick: () => handleOperatorClick("+") },
        { label: "4", onClick: () => handleNumberClick("4") },
        { label: "5", onClick: () => handleNumberClick("5") },
        { label: "6", onClick: () => handleNumberClick("6") },
        { label: "-", onClick: () => handleOperatorClick("-") },
        { label: "7", onClick: () => handleNumberClick("7") },
        { label: "8", onClick: () => handleNumberClick("8") },
        { label: "9", onClick: () => handleNumberClick("9") },
        { label: "*", onClick: () => handleOperatorClick("*") },
        { label: "/", onClick: () => handleOperatorClick("/") },
        { label: "=", onClick: handleEqualsClick },
        { label: "C", onClick: handleClearClick },
      ];
    }
  };

  return (
    <div className="calculator">
      <div className="mode-toggle">
        <button onClick={handleModeChange}>
          {mode === "simple" ? "Switch to Intermediate" : "Switch to Simple"}
        </button>
      </div>
      <Display value={result} />
      <div className="button-grid">
        {getButtons().map((button, index) => (
          <Button key={index} label={button.label} onClick={button.onClick} />
        ))}
      </div>
      <HistoryTable history={history.slice(-6)} />
    </div>
  );
};

export default Calculator;
