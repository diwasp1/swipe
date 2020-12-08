import React from "react";
import "../Css/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import logo from "../Images/swipe.jpg";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <Link to="/profile">
          <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <div className="header_logo">
          <img src={logo} className="img-fluid" al />
        </div>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
