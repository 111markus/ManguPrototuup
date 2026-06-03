import React from "react";

export default function StartButton({ onStart, disabled }) {
  return (
    <button onClick={onStart} disabled={disabled} aria-label="start-button">
      Alusta
    </button>
  );
}
