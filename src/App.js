import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screen/home";
import Quiz from "./screen/quiz";
import Result from "./screen/result";

function App() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("easy");
  const [score, setScore] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                level={level}
                setLevel={setLevel}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                level={level}
                score={score}
                setScore={setScore}
              />
            }
          />
          <Route
            path="/result"
            element={<Result name={name} level={level} score={score} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
