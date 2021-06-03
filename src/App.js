import './App.css';

function App() {
  return (
    <div className="App">
      <div className="inputContainer">
        <label htmlFor="">Name:</label>
        <input type="text" />
        <label htmlFor="">Age:</label>
        <input type="text" />
        <label htmlFor="">Country:</label>
        <input type="text" />
        <label htmlFor="">Position:</label>
        <input type="text" />
        <label htmlFor="">Wage (year):</label>
        <input type="text" />
        <button>Add employee!</button>
      </div>
    </div>
  );
}

export default App;
