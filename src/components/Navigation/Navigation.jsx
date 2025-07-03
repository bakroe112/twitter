import React from 'react'
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { Email } from '@mui/icons-material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const Navigation = () => {
  const [anchorEl, setAnchorEl] =React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log("Close")
  };
    const navigate = useNavigate()
  return (
    <div className="h-screen sticky top-0">
      <div className="py-5">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="30"
          width="30"
          class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </div>

      <div className="space-y-6">
        {navigationMenu.map((item, index) => (
          <div
            className="cursor-pointer flex space-x-3 items-center"
            onClick={() =>
              item.title === "Profile"
                ? navigate(`/profile/${5}`)
                : navigate(item.path)
            }
            key={index}
          >
            {item.icon}
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="py-10">
        <Button
          variant="contained"
          sx={{
            width: "100%",
            borderRadius: "29px",
            py: "12px",
            bgcolor: "white",
            color: "black",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "15px",
          }}
        >
          Post
        </Button>
      </div>

      <div
        className="flex items-center justify-between hover:bg-slate-50 cursor-pointer rounded-[29px] w-full px-6"
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <div className="flex flex-row items-center space-x-3 w-full">
          <Avatar
            alt="username"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          />
          <div className="flex flex-col w-full ">
            <span className="p-0 m-0">Shiori</span>
            <span className="opacity-70">@Shiori2106</span>
          </div>
          <div>
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: "-12px",
              borderRadius: "15px",
              width: "18%",
              height: "13%",
              flexDirection:"column",
              justifyContent:"center",
              display: "flex",
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(45deg) ",
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
        <MenuItem onClick={handleClose}>Log out @Shiori2106</MenuItem>
      </Menu>
    </div>
  );
}   

export default Navigation