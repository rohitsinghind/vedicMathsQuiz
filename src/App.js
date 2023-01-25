import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const operations = ["Add", "Subtract", "Multiply", "Divide"];
  const [option, setOption] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [ans, setAns] = useState(0);

  const generateNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateQuestion = (operation) => {
    const a = generateNum(10, 99);
    const b = generateNum(10, 99);
    setNum1(a);
    setNum2(b);
    setOptions(getAnswer(operation, a, b));
  };

  const getAnswer = (operation, a, b) => {
    if (operation === "Add") {
      setAns(a + b);
      return a + b;
    } else if (operation === "Subtract") {
      setAns(a - b);
      return a - b;
    } else if (operation === "Multiply") {
      setAns(a * b);
      return a * b;
    } else if (operation === "Divide") {
      setAns(a / b);
      return a / b;
    } else {
      return -1;
    }
  };

  const setOptions = (answer) => {
    setOption([]);
    let temp = [
      generateNum(answer - 10, answer + 10),
      generateNum(answer - 10, answer + 10),
      generateNum(answer - 10, answer + 10),
      generateNum(answer - 10, answer + 10),
    ];
    temp[generateNum(0, 3)] = answer;
    setOption(temp);
  };

  useEffect(() => {
    generateQuestion(operations[0]);
  }, []);

  console.log("num1 ", num1, " num2 ", num2);
  console.log("ans ", ans);
  console.log("options ", option);

  return <>
    
  </>;
}

export default App;
