import React, { useState } from "react";

export function CredCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvvCode, setCvvCode] = useState("");

  function handleCardNumberChange({ target: { value } }) {
    const digits = value.replaceAll(/\D/g, "");
    let spacedDigits = digits.replace(/.{4}/g, "$& ");
    if (spacedDigits.length > 19) {
      spacedDigits = spacedDigits.slice(0, 19);
    }
    setCardNumber(spacedDigits);
  }

  function handleCvvCodeChange({ target: { value } }) {
    let digits = value.replace(/\D/g, "");
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
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select
        name="card-expiration-year"
        id="card-expiration-year-select"
        value={expirationYear}
        onChange={(e) => setExpirationYear(e.target.value)}
      >
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
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
