import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { months, years } from "./cred-card-form-constants";
import { removeNonDigitChars, renderOptions } from "./cred-card-form-utils";

export function CredCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [errors, setErrors] = useState({ cvv: false });

  function handleCardNumberChange({ target: { value } }) {
    const digits = removeNonDigitChars(value);
    let spacedDigits = digits.replace(/.{4}/g, "$& ");
    if (spacedDigits.length > 19) {
      spacedDigits = spacedDigits.slice(0, 19);
    }
    setCardNumber(spacedDigits);
  }

  function handleCvvCodeChange({ target: { value } }) {
    let digits = removeNonDigitChars(value);
    if (digits.length > 3) {
      digits = digits.slice(0, 3);
    }
    setCvvCode(digits);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let isErrorFound = false;
    if (cvvCode.length < 3) {
      setErrors((errors) => ({ ...errors, cvv: true }));
      isErrorFound = true;
    }
    if (isErrorFound) return;

    const cardData = {
      number: parseInt(removeNonDigitChars(cardNumber), 10),
      holder: cardHolder,
      month: parseInt(expirationMonth, 10),
      year: parseInt(expirationYear, 10),
      cvv: cvvCode,
    };
    console.log("submitting: ", cardData);
  }

  const hasErrors = Object.values(errors).some((v) => v === true);

  return (
    <form onSubmit={handleSubmit}>
      <Paper
        elevation={5}
        style={{
          width: 400,
          backgroundColor: "lightcyan",
          padding: 20,
        }}
      >
        <Grid container columns={20} spacing={2}>
          <Grid item xs={20}>
            <TextField
              required
              label="Card Number"
              id="card-number-input"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={handleCardNumberChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={20}>
            <TextField
              required
              label="Card Holder"
              id="card-holder-input"
              placeholder="John Doe"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="card-expiration-month-label">Month</InputLabel>
              <Select
                required
                labelId="card-expiration-month-label"
                id="card-expiration-month-simple-select"
                value={expirationMonth}
                label="Month"
                onChange={(e) => setExpirationMonth(e.target.value)}
              >
                {renderOptions(months)}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="card-expiration-year-label">Year</InputLabel>
              <Select
                required
                labelId="card-expiration-year-label"
                id="card-expiration-year-simple-select"
                value={expirationYear}
                label="Year"
                onChange={(e) => setExpirationYear(e.target.value)}
              >
                {renderOptions(years)}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <TextField
              required
              id="cvv-code-input"
              label="CVV"
              placeholder="XXX"
              value={cvvCode}
              onChange={handleCvvCodeChange}
              onFocus={() => setErrors((errors) => ({ ...errors, cvv: false }))}
              error={errors.cvv}
              helperText={errors.cvv && "Enter CVV code"}
            />
          </Grid>

          <Grid item xs={20}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={hasErrors}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
