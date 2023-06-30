import "./css/main.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import Todos from './components/Todos';
import DisplayTodos from "./components/DisplayTodos";


function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/SignupForm" component={SignupForm} />
        <Route path="/Todos" component={Todos} />
        <Route path="/DisplayTodos" component={DisplayTodos} />
      </Switch>
    </Router>
    </div>
  )
}

export default App;
