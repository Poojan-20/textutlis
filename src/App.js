import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const bodyremoveclass =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }

  const togglemode = (cls) => {
    bodyremoveclass();
    document.body.classList.add('bg-'+cls)
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#2e353e";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Textform
              showAlert={showAlert}
              heading="Enter the text to analyze"
              mode={mode}
            />
          </Route>
        </Switch>
      </div>
        </Router>
    </>
  );
}

export default App;
