import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light') // Whether dark mode is enabled or Not.
  const [alert , setAlert] = useState(null)
  const showAlert = (message , type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled  ","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled ","success")
    }
  }
  return (
    <>
     <Navbar title="TextUtils" home="Home" about="About Us" mode={Mode} toggleMode = {toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Enter The text to Analze below" mode={Mode} />
     </div> 
    </>
  );
}

export default App;
