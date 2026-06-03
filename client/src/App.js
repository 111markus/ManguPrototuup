import React, { useState } from "react";
import Header from "./components/Header";
import NameInput from "./components/NameInput";
import StartButton from "./components/StartButton";
import DevGallery from "./components/DevGallery";

export default function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <Header />
      <NameInput value={name} onChange={setName} />
      <StartButton onStart={() => {}} disabled={!name.trim()} />
      <DevGallery />
    </div>
  );
}
