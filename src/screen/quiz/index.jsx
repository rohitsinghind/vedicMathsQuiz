import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import {
  Box,
  Typography,
  Button,
  Container,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

export default function Quiz({ name, level, score, setScore }) {
  let navigate = useNavigate();
  const [selectedAns, setSelectedAns] = useState("");
  const [index, setIndex] = useState(0);
  const operations = ["Add", "Subtract", "Multiply", "Divide"];
  const [option, setOption] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [ans, setAns] = useState(0);

  const generateNum = (min, max, used) => {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    if (!used.includes(num)) {
      return num;
    } else {
      return generateNum(min, max, used);
    }
  };

  const generateQuestion = (operation) => {
    const a =
      level === "easy"
        ? generateNum(10, 99, [])
        : level === "medium"
        ? generateNum(100, 999, [])
        : generateNum(1000, 9999, []);
    const b =
      level === "easy"
        ? generateNum(10, 99, [a])
        : level === "medium"
        ? generateNum(100, 999, [a])
        : generateNum(1000, 9999, [a]);
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
    let a = generateNum(answer - 10, answer + 10, [answer]);
    let b = generateNum(answer - 10, answer + 10, [answer, a]);
    let c = generateNum(answer - 10, answer + 10, [answer, a, b]);
    let d = generateNum(answer - 10, answer + 10, [answer, a, b, c]);
    let temp = [a, b, c, d];
    temp[generateNum(0, 3, [])] = answer;
    setOption(temp);
  };

  useEffect(() => {
    setSelectedAns("");
    generateQuestion(operations[index]);
  }, [index]);

  console.log("num1 ", num1, " num2 ", num2);
  console.log("ans ", ans);
  console.log("options ", option);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography sx={{ position: "absolute", top: "20px", left: "20px" }}>
          Hi {name},
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            width: "300px",
            gap: "20px",
          }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Q.{index + 1}) {operations[index]} {num1} with {num2}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={selectedAns}
              onChange={(e) => {
                setSelectedAns(e.target.value);
              }}
            >
              <FormControlLabel
                value={option[0]}
                control={<Radio />}
                label={option[0]}
              />
              <FormControlLabel
                value={option[1]}
                control={<Radio />}
                label={option[1]}
              />
              <FormControlLabel
                value={option[2]}
                control={<Radio />}
                label={option[2]}
              />
              <FormControlLabel
                value={option[3]}
                control={<Radio />}
                label={option[3]}
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setScore(parseInt(selectedAns) === ans ? score + 1 : score);
              index < operations.length - 1
                ? setIndex(index + 1)
                : navigate("/result");
            }}
            disabled={!selectedAns}
          >
            {index < operations.length - 1 ? "next" : "submit"}
          </Button>
        </Box>
      </Container>
    </>
  );
}
