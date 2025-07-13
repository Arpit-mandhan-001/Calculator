import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Display } from "./components/Display";
import { ButtonContainer } from "./components/ButtonContainer";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal('');
    } else if (buttonName === "=") {
        let result = eval(calVal);
        setCalVal(result);
    } else {
        let newDisplayValue = calVal + buttonName;
        setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <Header />
      <div className="container">
        <Display displayValue={calVal}/>
        <ButtonContainer onButtonClick= {onButtonClick} />
      </div>
    </center>
  );
}

export default App;
