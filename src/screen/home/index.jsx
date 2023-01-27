import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Box,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";

export default function Home({ name, setName, level, setLevel }) {
  let navigate = useNavigate();

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography>Enter Your Name</Typography>
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Typography>Select Your Level</Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant={level === "easy" ? "contained" : "outlined"}
              color={"success"}
              onClick={() => {
                setLevel("easy");
              }}
            >
              Easy
            </Button>
            <Button
              variant={level === "medium" ? "contained" : "outlined"}
              color={"warning"}
              onClick={() => {
                setLevel("medium");
              }}
            >
              Medium
            </Button>
            <Button
              variant={level === "hard" ? "contained" : "outlined"}
              color={"error"}
              onClick={() => {
                setLevel("hard");
              }}
            >
              Hard
            </Button>
          </Stack>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate("/quiz");
            }}
            disabled={!name}
          >
            Start
          </Button>
        </Box>
      </Container>
    </>
  );
}
