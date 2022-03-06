import { useState } from 'react';
import './App.css'
import { SizeSelector } from './components/SizeSelector';

function App() {
  const [currentSize, setCurrentSize] = useState<string>('none');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Selected Size: {currentSize}</h1>
        <SizeSelector
          selectedSize={currentSize}
          onSizeChange={setCurrentSize}
        />
      </header>
    </div>
  )
}

export default App
