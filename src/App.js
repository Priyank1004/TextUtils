import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar title="TextUtils" home="Home" about="About Us"/>
     <div className="container my-3">
        <TextForm heading="Enter The text to Analze below"/>
     </div> 
      
    </>
  );
}

export default App;
