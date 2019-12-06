import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {

const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);

// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.
// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

const ballCount = () => {
  if (balls <= 4){
    setBalls(0)
  } 
}

const strikeCount = () => {
  if (strikes <= 3){
    setStrikes(0)
  }
}

  const hits = () => {
    setBalls(0);
    setStrikes(0);
  }

  const fouls = () => {
    if (strikes === 0){
      setStrikes(1)
    } else if (strikes === 1){
      setStrikes(2)
    } else if (strikes === 2){
      setStrikes(2)
    } 
  }

  return (
    <div className="App">
      <h1>App Testing</h1>
      <Display strikes={strikes} balls={balls}/>
      <Dashboard strikeCount={strikeCount} ballCount={ballCount} fouls={fouls} hits={hits}/>
    </div>
  );
}

export default App;
