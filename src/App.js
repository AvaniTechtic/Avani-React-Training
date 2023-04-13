import './App.css';
import MyForm from './MyForm'; 
import CounterApp from './CounterApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyForm />
        <CounterApp name="CountApp"/>
      </header>
    </div>
  );
}

export default App;
