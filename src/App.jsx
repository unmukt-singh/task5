import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState(0);
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };
  const calculateAge = (date) => {
    const today = new Date().getTime();
    const birthDate = new Date(date).getTime();
    const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365));
    setAge(age);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Calculator</h1>
        <h3>Enter your date of birth</h3>
        <div className="Age-Container">
          <input type="date" onChange={handleChange} ref={dateInputRef} />
          <button onClick={() => calculateAge(date)}>Calculate Age</button>
          {age === 0 ? (
            <h3>Enter Date to calculate your age</h3>
          ) : (
            <h3>You are {age} years old</h3>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
