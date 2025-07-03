import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {menuIteam} from "./MenuItem/MenuItems.js";

const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <div className="">
      {/* <div className='flex items-center font-semibold text-gray-700'>
        <RepeatIcon/>
        <p>Your Retweet</p>
    </div> */}

      <div className="flex space-x-5">
        <Avatar
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          alt="username"
          className="cursor-pointer"
          onClick={() => navigate(`/profile/${6}`)}
        />

        <div className="flex justify-between items-center">
          <div className="flex cursor-pointer items-center space-x-2">
            <span className="font-semibold hover:underline">Shiori</span>
            <span className="text-gray-600">@Shiori2106 . 3m</span>
          </div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                sx: {
                  borderRadius: "15px",
                  "& .MuiMenuItem-root": {
                    display: "flex",
                    gap: "8px",
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  },
                },
              },
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {menuIteam.map((item, index) => (
              <MenuItem onClick={handleClose}>
                {item.component}
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
