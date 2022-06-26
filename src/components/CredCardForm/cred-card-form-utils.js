import { MenuItem } from "@mui/material";

export function removeNonDigitChars(str = "") {
  return str.replace(/\D/g, "");
}

export function renderOptions(options = []) {
  return options.map((o) => (
    <MenuItem key={o} value={o}>
      {o}
    </MenuItem>
  ));
}
