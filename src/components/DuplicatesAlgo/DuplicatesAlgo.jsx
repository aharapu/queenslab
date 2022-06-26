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
      <TextField disabled label="result" multiline fullWidth value={result} />
    </Paper>
  );
}

function runTextAlgoOn(string = "") {
  return string;
}
