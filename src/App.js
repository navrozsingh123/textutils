import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './TextForm';
import Alert from './components/Alert';
// Imprting from react router
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // wheteher dark mode is enabled or not;
  const [alert, setAlert] = useState(null);
  const [mode2, setMode2] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  // Button 1:
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.getElementById('switchCheckDefault2').style.color = 'white';
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextUtils -DarkMode';
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('switchCheckDefault2').style.color = 'black';
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtils -Home';
    }
  }
  // Button 2:
  const toggleMode2 = () => {
    if (mode2 === 'light') {
      setMode2('dark');
      document.body.style.backgroundColor = '#99b5ff';
      document.getElementById('switchCheckDefault').style.color = 'white';
      showAlert("Blue mode is enabled", "success");
      document.title = 'TextUtils -BlueMode';
    }
    else {
      setMode2('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('switchCheckDefault').style.color = 'black';
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtils -Home';
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/>  */}
      {/* Default textutils are passed here */}

      {/* mode2={mode2} toggleMode2={toggleMode2} */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} mode2={mode2} toggleMode2={toggleMode2} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the Text to analyze below:" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
