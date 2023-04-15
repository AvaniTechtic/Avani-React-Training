import './App.css';
import MyForm from './Component/MyForm'; 
import CounterApp from './Component/CounterApp';

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
