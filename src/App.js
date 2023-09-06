import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
// import About from "./component/About";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light"); // wheater dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Drak mode has been enable", "success");
      document.title = " TextUtils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = " TextUtils-LightMode";
    }
  };
  return (
    <>
      {/* <Navbar title="Pradumna" about="About Us"/> */}
      {/* <Navbar /> */}
      
        <Navbar title="Pradumna-TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about">
              
            </Route>
            <Route path="/">
              
            </Route>
          </Switch> */}
      
      {/* </Router> */}
      <TextForm
                showAlert={showAlert}
                heading="Enter the text for analyze"
                mode={mode}
              />
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
