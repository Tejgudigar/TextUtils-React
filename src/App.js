// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react'
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState('black')

  const changeColor =(color) => {
    if(color === 'red'){
      setColor('red')
      document.body.style.backgroundColor = 'red';
    }
    else if(color === 'green'){
      setColor('green')
      document.body.style.backgroundColor = 'green';
    }
    else if(color === 'blue'){
      setColor('blue')
      document.body.style.backgroundColor = 'blue';
    }
    else if(color === 'orange'){
      setColor('orange')
      document.body.style.backgroundColor = 'orange';
    }
  }

  const showAlert = (message,type) => {
    setAlert({
      msg : message, 
      type :type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode =() => {
    if(mode ==='light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success")
      // document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      // document.title = 'TextUtils - Light Mode'
    }
  }

    return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} color={color} changeColor={changeColor} />
      <Alert alert={alert}></Alert>
      <div className="container  my-3">
        {/* <TextForm showAlert={showAlert} heading='Enter the text below' mode={mode} color={color} changeColor={changeColor} /> */}
         <Routes>
          <Route path="/about" element={<About mode={mode}  color={color} changeColor={changeColor} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces' mode={mode} color={color} changeColor={changeColor} />} />
        </Routes>
      </div>
      
       {/* <Navbar/> */}
    </Router>
    </>
  );
}

export default App;
