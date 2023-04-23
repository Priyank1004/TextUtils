import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light') // Whether dark mode is enabled or Not.
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     <Navbar title="TextUtils" home="Home" about="About Us" mode={Mode} toggleMode = {toggleMode}/>
     <div className="container my-3">
        <TextForm heading="Enter The text to Analze below" mode={Mode} />
     </div> 
    </>
  );
}

export default App;
