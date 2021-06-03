import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage
    }).then(() => {
      console.log("Sucess");
    })
  }

  return (
    <div className="App">
      <div className="inputContainer">
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}} />
        <label htmlFor="">Age:</label>
        <input type="text" onChange={(event) => {setAge(event.target.value)}} />
        <label htmlFor="">Country:</label>
        <input type="text" onChange={(event) => {setCountry(event.target.value)}} />
        <label htmlFor="">Position:</label>
        <input type="text" onChange={(event) => {setPosition(event.target.value)}} />
        <label htmlFor="">Wage (year):</label>
        <input type="text" onChange={(event) => {setWage(event.target.value)}} />
        <button onClick={addEmployee}>Add employee!</button>
      </div>
    </div>
  );
}

export default App;
