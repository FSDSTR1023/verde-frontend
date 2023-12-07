import { useState } from "react";
import "./App.css";
import SignInSide from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignInSide></SignInSide>
    </>
  );
}

export default App;
