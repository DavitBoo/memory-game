import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div className="App container">
        <Header 
          currentScore={currentScore}
          bestScore={bestScore}
        />  
        <Main /> 
        <Footer />
    </div>
  );
}

export default App;
