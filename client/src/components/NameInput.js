import React from "react";

export default function NameInput({ value, onChange }) {
  return (
    <div>
      <input
        aria-label="name-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
