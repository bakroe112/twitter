import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { menuItem } from "./MenuItem/MenuItems.js";
import { tweetIconItem1, tweetIconItem2 } from "./MenuItem/TweetIconItem.js";
import { CommentIconButton } from "../Icons/CommentIconButton.jsx";

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
  const handleDeleteTweet = () => {
    console.log("Delete Tweet");
    handleClose();
  };
  const [onHover, setOnHover] = useState(false);
  return (
    <div>
      {/* <div className='flex items-center font-semibold text-gray-700'>
        <RepeatIcon/>
        <p>Your Retweet</p>
    </div> */}
      {/* Chỗ chứa thẻ bài đăng Tweet */}
      <div className="flex space-x-3">
        <Avatar
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          alt="username"
          className="cursor-pointer"
          onClick={() => navigate(`/profile/${6}`)}
        />

        <div className="w-full">
          <div className="flex justify-between items-center h-[20px]">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold hover:underline">Shiori</span>
              <span className="text-gray-600">
                @Shiori2106 ˑ <span className="hover:underline">3m</span>
              </span>
            </div>
            <div>
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </IconButton>
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
                {menuItem(handleDeleteTweet).map((item, index) => (
                  <MenuItem key={index} onClick={item.onClick}>
                    {item.component}
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>

          <div>
            <div className="cursor-pointer">
              <p className="mb-2 p-0">Thank you for the Karma you gave.</p>
              <img
                className="w-[36rem] rounded-2xl "
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4f90ad109278717.5fd0485edbde1.png"
                alt=""
              />
            </div>
            <div className="flex flex-wrap justify-between items-center w-full">
              <div className="flex space-x-3 text-gray-600 items-center w-full">
                <div className="flex items-center cursor-pointer w-full">
                  <div className="flex flex-row justify-between items-center mt-1 w-full">
                    {tweetIconItem1.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center"
                        onMouseEnter={() => setOnHover(index)}
                        onMouseLeave={() => setOnHover(null)}
                      >
                        <CommentIconButton isOnHover={onHover === index} color={item.color}>
                          <item.component
                            isOnHover={onHover === index}
                            color="#1d9bf0"
                          />
                        </CommentIconButton>
                        <span
                          className="text-[16px]"
                          style={{
                            color: onHover === index && item.color,
                          }}
                        >
                          300
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center gap-1">
                      {tweetIconItem2.map((item, index) => (
                        <div
                          onMouseEnter={() => setOnHover(item.id)}
                          onMouseLeave={() => setOnHover(null)}
                        >
                          <CommentIconButton color="#1d9bf0">
                            <item.component
                              isOnHover={onHover === item.id}
                              color="#1d9bf0"
                            />
                          </CommentIconButton>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
