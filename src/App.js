import"./App.css";
import About from "./Components/About";
import Aleart from "./Components/Aleart";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from "react";
function App() {
  const[mode, setMode]=useState('light');
  const[aleart, setAleart]=useState(null);
  const showAleart= (message,type) =>{
    setAleart({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAleart(null);
    }, 1500)

  }
  const removeBody=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode= (cls) =>{
    removeBody();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAleart("dark mod is enable","Success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAleart("light mod is enable","Success");
    }
  }
  return (
    <>
        <Navbar title="Bcompany" mode={mode} toggleMode={toggleMode}/>
        <Aleart aleart={aleart}/>
        <div className="container">
           <TextForm showAleart={showAleart} heading="write here" mode={mode}/>
        </div>
        <About/>
    </>
  );
}

export default App;
