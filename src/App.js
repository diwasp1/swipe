import "./App.css";
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import Login from "./Components/login/LoginForm";
import database from "./firebase"

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    authListener();
  });

  const authListener = () => {
    database.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        setUser(user)
      }
      else{
        setUser(null)
      }
    })
  }


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
            {user ? <Home /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
