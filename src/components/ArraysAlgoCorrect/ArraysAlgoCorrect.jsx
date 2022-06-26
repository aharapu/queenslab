import { Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export function ArraysAlgoCorrect() {
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
      <Typography>Arrays Algo</Typography>
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
        All the computation issues discussed for string parsing apply to this
        array parsing as well. Especially since the big O is n squared.
        <br />
        To be honest, I don't fully understand the request. I wrote an algorithm
        that matches what is in the two examples' results, but does not leverage
        any sum of digits. Would need more clarification.
      </Typography>
    </Paper>
  );
}

function runArraysAlgoOn(string = "") {
  let arr = string.split(",");
  const numbers = arr.map((n) => parseInt(n, 10));

  let largest = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i === j) continue;

      const value = numbers[i] + numbers[j];
      // const digits = String(value)
      //   .split("")
      //   .map((d) => parseInt(d, 10));
      // const sumOfDigits = digits.reduce((acc, d) => acc + d, 0);

      // console.log("value: ", value, ", digit sum:", sumOfDigits);
      // if (sumOfDigits % 2 !== 0 && value > largest) largest = value;

      if (value % 2 !== 0 && value > largest) largest = value;
    }
  }

  return largest;
}
