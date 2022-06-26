import { Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export function ArraysAlgo() {
  const [string, setString] = useState("");

  const result = runArraysAlgoOn(string);
  return (
    <Paper
      elevation={5}
      style={{
        width: 400,
        backgroundColor: "lightcyan",
        padding: 20,
      }}
    >
      <Typography>"Wrong" Arrays Algo</Typography>
      <TextField
        label="input"
        value={string}
        onChange={(e) => setString(e.target.value)}
        multiline
        fullWidth
        margin="normal"
      />
      <TextField
        disabled
        label="result"
        multiline
        fullWidth
        value={result}
        margin="normal"
      />
      <Typography fontSize={12}>
        I initially misunderstood the requirement, but decided to leave this in
        as well.
      </Typography>
    </Paper>
  );
}

function runArraysAlgoOn(string = "") {
  let arr = string.split(",");
  const numbers = arr.map((n) => parseInt(n, 10));

  let largest = 0;
  let secondLargest = 0;

  numbers.forEach((num) => {
    const digits = String(num)
      .split("")
      .map((d) => parseInt(d, 10));
    const sumOfDigits = digits.reduce((acc, d) => acc + d, 0);
    if (sumOfDigits % 2 === 0) return;

    if (num > largest) {
      secondLargest = largest;
      largest = num;
      return;
    }

    if (num > secondLargest) {
      secondLargest = num;
    }
  });

  return largest + secondLargest;
}
