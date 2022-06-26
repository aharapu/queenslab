import { Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export function DuplicatesAlgo() {
  const [string, setString] = useState("");

  const result = runTextAlgoOn(string);
  return (
    <Paper
      elevation={5}
      style={{
        width: 400,
        backgroundColor: "lightcyan",
        padding: 20,
      }}
    >
      <Typography>Text Algo</Typography>
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
        If the string parsed is very long and the computation might take a long
        time and we might need to avoid blocking the thread. This could be done
        using web workers and essentially use the computers's multithreading
        capabilities.
        <br />
        Another way would be to use a generator function that would pause
        operation after each "n" characters and then resume, similar to how a
        stream buffer would work.
        <br />
        Multithreading could also be used by splitting the string into
        substrings, however there is the possibility of splitting on a character
        set that needs to be deduplicated.
      </Typography>
    </Paper>
  );
}

function runTextAlgoOn(string = "") {
  let arr = string.split("");
  if (arr.length === 0) return "";

  let possibleDuplicate;
  let duplicateCount = 0;

  const newStr = arr.reduce((str, char) => {
    if (char === possibleDuplicate) {
      duplicateCount++;
      if (duplicateCount > 3) return str;
    } else {
      possibleDuplicate = char;
      duplicateCount = 1;
    }

    return str + char;
  }, "");

  return newStr;
}
