import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FocusableInput from "./components/FocusableInput.jsx";
import UncontrolledInput from "./components/UncontrolledInput.jsx";
import InteractiveElement from "./components/InteractiveElement.jsx";

function App() {
  return (
    <>
      <FocusableInput />
      <UncontrolledInput />
      <InteractiveElement />
    </>
  );
}

export default App;
