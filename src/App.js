import './App.css';
// import MyForm from './Component/MyForm'; 
// import CounterApp from './Component/CounterApp';
import ToDoList from './Component/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyForm /> */}
        {/* <CounterApp name="CountApp"/> */}
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
