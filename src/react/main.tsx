import React from "react";
import { createRoot } from "react-dom/client";

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
      <h1 data-test="heading">Hello World</h1>
    </div>
  );
}
