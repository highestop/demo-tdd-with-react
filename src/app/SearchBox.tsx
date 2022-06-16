import { TextField } from "@material-ui/core";
import React from "react";

export function SearchBox({
  initValue,
  onChange,
}: {
  initValue?: string;
  onChange: (term: string) => any;
}) {
  return (
    <TextField
      label="Search"
      value={initValue}
      data-test="search"
      onChange={(e) => onChange(e.target.value)}
      margin="normal"
      variant="outlined"
    />
  );
}
