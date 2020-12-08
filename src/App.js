import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
             <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
