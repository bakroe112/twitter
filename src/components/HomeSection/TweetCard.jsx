import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { alpha, Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { menuIteam } from "./MenuItem/MenuItems.js";
import {tweetIconItem} from "./MenuItem/TweetIconItem.js"

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
  const [onHover, setOnHover] = useState(null);
  return (
    <div className="">
      {/* <div className='flex items-center font-semibold text-gray-700'>
        <RepeatIcon/>
        <p>Your Retweet</p>
    </div> */}

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
                {menuIteam.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={index === 0 ? handleDeleteTweet : handleClose}
                  >
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
                    {tweetIconItem.map((item, index) => {
                      const isOnHover = onHover === index;
                     if(index <= 3){
                      return (
                        <div
                          className="flex items-center"
                          key={index}
                          onMouseEnter={() => setOnHover(index)}
                          onMouseLeave={() => setOnHover(null)}
                        >
                          <IconButton
                            sx={{
                              backgroundColor:
                                isOnHover && alpha(item.color, 0.1),
                              mx: "-6px",
                              "&:hover": {
                                backgroundColor: alpha(item.color, 0.1),
                                color: item.color,
                              },
                            }}
                          >
                            {item.path !== "" ? (
                              <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                                width="20px"
                                height="20px"
                              >
                                <g>
                                  <path
                                    fill={isOnHover && item.color}
                                    d={item.path}
                                  ></path>
                                </g>
                              </svg>
                            ) : (
                              <div
                                className="flex"
                                style={{
                                  color: isOnHover && item.color,
                                }}
                              >
                                {item.icon}
                              </div>
                            )}
                          </IconButton >
                          <span
                            className="text-[16px]"
                            style={{
                              color: isOnHover && item.color,
                            }}
                          >
                            {item.value}
                          </span>
                        </div>
                      );
                     }
                     if(index === 4){
                       return (
                         <div key={index}  onMouseEnter={() => setOnHover(index)}
                         onMouseLeave={() => setOnHover(null)}>
                           <IconButton
                             sx={{
                               backgroundColor:
                                 onHover === "4" && alpha(item.color, 0.1),
                               "&:hover": {
                                 backgroundColor: alpha(item.color, 0.1),
                                 color: item.color,
                               },
                             }}
                             onMouseEnter={() => setOnHover("4")}
                             onMouseLeave={() => setOnHover(null)}
                           >
                             <svg
                               viewBox="0 0 24 24"
                               aria-hidden="true"
                               class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                               width="20px"
                               height="20px"
                             >
                               <g>
                                 <path
                                   fill={onHover === "4" && item.color}
                                   d={item.path}
                                 ></path>
                               </g>
                             </svg>
                            
                           </IconButton>

                           <IconButton
                             sx={{
                               backgroundColor:
                                 onHover === "5" && alpha(item.color, 0.1),
                               mx: "-6px",
                               "&:hover": {
                                 backgroundColor: alpha(item.color, 0.1),
                                 color: item.color,
                               },
                             }}
                             onMouseEnter={() => setOnHover("5")}
                             onMouseLeave={() => setOnHover(null)}
                           >
                             <svg
                               viewBox="0 0 24 24"
                               aria-hidden="true"
                               class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                               width="20px"
                               height="20px"
                             >
                               <g>
                                 <path
                                   fill={onHover === "5" && item.color}
                                   d={tweetIconItem[5].path}
                                 ></path>
                               </g>
                             </svg>
                           </IconButton>
                         </div>
                       );
                     }
                    }
                    )}
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
