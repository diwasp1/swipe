import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />
            <Chat />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
