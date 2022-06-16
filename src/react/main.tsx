import React from "react";
import { createRoot } from "react-dom/client";
import { Typography } from "@material-ui/core";
import "./main.css";
import { BookList } from "./BookList";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  );
}

function App() {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList></BookList>
    </div>
  );
}
