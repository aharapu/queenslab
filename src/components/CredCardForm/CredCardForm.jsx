import React, { useState } from "react";
import { months, years } from "./cred-card-form-constants";
import { removeNonDigitChars, renderOptions } from "./cred-card-form-utils";

export function CredCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvvCode, setCvvCode] = useState("");

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

  return (
    <form
      style={{
        width: 400,
        backgroundColor: "lightcyan",
        padding: 20,
      }}
    >
      <input
        id="card-number"
        placeholder="XXXX XXXX XXXX XXXX"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <input
        id="card-name"
        placeholder="John Doe"
        value={cardHolder}
        onChange={(e) => setCardHolder(e.target.value)}
      />
      <select
        name="card-expiration-month"
        id="card-expiration-month-select"
        value={expirationMonth}
        onChange={(e) => setExpirationMonth(e.target.value)}
      >
        {renderOptions(months)}
      </select>
      <select
        name="card-expiration-year"
        id="card-expiration-year-select"
        value={expirationYear}
        onChange={(e) => setExpirationYear(e.target.value)}
      >
        {renderOptions(years)}
      </select>
      <input
        id="cvv-code-input"
        placeholder="XXX"
        value={cvvCode}
        onChange={handleCvvCodeChange}
      />
      <button>submit</button>
    </form>
  );
}
