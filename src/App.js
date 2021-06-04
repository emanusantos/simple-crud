import { useState } from 'react';
import Axios from 'axios';
import { GlobalStyles, Container, Info, Input, Button, Line, Card, CardContainer, Title, Text } from './Components.js';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage
    }).then(() => {
      setEmployeeList([...employeeList, 
        {
        name: name, 
        age: age, 
        country: country, 
        position: position, 
        wage: wage
      },
      ]);
    })
  }

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    })
  }

  return (
    <Container>
      <GlobalStyles />
      <Info>
        <Input type="text" placeholder="Name" onChange={(event) => {setName(event.target.value)}} />
        <Input type="number" placeholder="Age" onChange={(event) => {setAge(event.target.value)}} />
        <Input type="text" placeholder="Country" onChange={(event) => {setCountry(event.target.value)}} />
        <Input type="text" placeholder="Your position" onChange={(event) => {setPosition(event.target.value)}} />
        <Input type="text" placeholder="Your wage" onChange={(event) => {setWage(event.target.value)}} />
        <Button onClick={addEmployee}>Add employee!</Button>
      </Info>
      <Line />
      <Button onClick={getEmployees}>Show employees</Button>

    <CardContainer>
      {employeeList.map((val, key) => {
        return (
        <Card>
          <Title>{val.name}</Title>
          <Text>Age: {val.age}</Text>
          <Text>Country: {val.country}</Text>
          <Text>Position: {val.position}</Text>
          <Text>Wage: {val.wage}</Text>
        </Card>)
      })}
    </CardContainer>
    </Container>
  );
}

export default App;
