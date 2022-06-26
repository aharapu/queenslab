export function removeNonDigitChars(str = "") {
  return str.replace(/\D/g, "");
}

export function renderOptions(options = []) {
  return (
    <>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </>
  );
}
