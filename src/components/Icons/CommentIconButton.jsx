import { alpha, IconButton } from "@mui/material";
import { useState } from "react";

export const CommentIconButton = ({ children, isOnHover ,color }) => {

  return (
   
      <IconButton
        sx={{
          backgroundColor: isOnHover && alpha(color, 0.1),
          mx: "-6px",
          "&:hover": {
            backgroundColor: alpha(color, 0.1),
            color: color,
          },
        }}
      >
        {children}
      </IconButton>
  );
};
