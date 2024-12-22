import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  };

  const scientificOperation = (operation) => {
    try {
      let result;
      const number = parseFloat(input);

      if (isNaN(number)) {
        setInput("Erro");
        return;
      }

      switch (operation) {
        case "sin":
          result = Math.sin(number);
          break;
        case "cos":
          result = Math.cos(number);
          break;
        case "tan":
          result = Math.tan(number);
          break;
        case "sqrt":
          result = number < 0 ? "Erro" : Math.sqrt(number);
          break;
        case "log":
          result = number <= 0 ? "Erro" : Math.log10(number);
          break;
        case "ln":
          result = number <= 0 ? "Erro" : Math.log(number);
          break;
        default:
          result = "Erro";
      }
      setInput(result.toString());
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput("(")}>(</button>
        <button onClick={() => handleInput(")")}>)</button>
        <button onClick={() => handleInput("/")}>÷</button>

        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("*")}>×</button>

        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("-")}>−</button>

        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("+")}>+</button>

        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={() => handleInput(".")}>.</button>
        <button onClick={calculateResult}>=</button>

        <button onClick={() => scientificOperation("sin")}>sin</button>
        <button onClick={() => scientificOperation("cos")}>cos</button>
        <button onClick={() => scientificOperation("tan")}>tan</button>
        <button onClick={() => scientificOperation("sqrt")}>√</button>
        <button onClick={() => scientificOperation("log")}>log</button>
        <button onClick={() => scientificOperation("ln")}>ln</button>
      </div>
    </div>
  );
};

export default App;
