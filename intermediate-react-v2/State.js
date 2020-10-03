import React, { useState } from "react";

export default function State() {
  const [isGreen, setIsGrenn] = useState(true);
  return (
    <h1
      onClick={() => setIsGrenn((state) => !state)}
      style={{ color: isGreen ? "green" : "crimson" }}
    >
      useState example
    </h1>
  );
}
