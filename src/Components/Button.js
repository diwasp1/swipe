import React from "react";
import "../Css/Button.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function Button() {
  return (
    <div className="button_container">
      <IconButton className="replay_btn">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="close_btn">
        <CloseIcon fontSize="large" />
      </IconButton>
      {/* <IconButton className="star_btn">
        <StarRateIcon fontSize="large" />
      </IconButton> */}
      <IconButton className="fav_btn">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      {/* <IconButton className="flash_btn">
        <FlashOnIcon fontSize="large" />
      </IconButton> */}
    </div>
  );
}

export default Button;
