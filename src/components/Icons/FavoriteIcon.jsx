import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const FavoriteIcon = ({ isOnHover }) => {
  return (
    <FavoriteBorderOutlinedIcon
      sx={{
        color: isOnHover ? "#e91e63" : "",
      }}
    />
  );
};

export default FavoriteIcon;
