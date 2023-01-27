import React from "react";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Box,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";

export default function Result({ name, level, score }) {
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
            minWidth: "200px",
            gap: "20px",
          }}
        >
          <Typography>{name} your score is</Typography>
          <Typography>{score}/4</Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate(-1);
            }}
          >
            play again
          </Button>
        </Box>
      </Container>
    </>
  );
}
