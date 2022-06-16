import React, { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

export function renderWithRouter(children: ReactElement) {
  return <MemoryRouter>{children}</MemoryRouter>;
}
