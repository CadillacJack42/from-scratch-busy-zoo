import './App.css';
import { useState } from 'react';
import Fight from './Fight/Fight';
import Open from './Open/Open';
import Parade from './Parade/Parade';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [parade, setParade] = useState(['lion', 'tiger', 'bear']);

  const handleUnicornSizeIncrement = () => {
    setUnicornSize(unicornSize + 1);
  };
  const handleLionSizeIncrement = () => {
    setLionSize(lionSize + 1);
  };
  const handleUnicornSizeDecrement = () => {
    setUnicornSize(unicornSize - 1);
  };
  const handleLionSizeDecrement = () => {
    setLionSize(lionSize - 1);
  };

  const handleOpenChange = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const handleParade = (animal) => {
    setParade([...parade, animal]);
  };

  return (
    <div className="App">
      <h1>Welcome To Cadillac Jacks Zoo</h1>
      <Fight 
        unicornSize={unicornSize}
        lionSize={lionSize}
        handleUnicornSizeIncrement={handleUnicornSizeIncrement}
        handleLionSizeIncrement={handleLionSizeIncrement}
        handleUnicornSizeDecrement={handleUnicornSizeDecrement}
        handleLionSizeDecrement={handleLionSizeDecrement} />
      <Open 
        isOpen={isOpen}
        handleOpenChange={handleOpenChange}
      />
      <Parade 
        parade={parade}
        handleParade={handleParade}
      />
    </div>
  );
}

export default App;
