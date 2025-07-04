import RepostIcon from "../../Icons/RepostIcon.jsx";
import FavoriteIcon from "../../Icons/FavoriteIcon.jsx";
import ViewIcon from "../../Icons/ViewIcon.jsx";
import BookmarkIcon from "../../Icons/BookmartIcon.jsx";
import ShareIcon from "../../Icons/ShareIcon.jsx";
import CommentIcon from "../../Icons/CommentIcon.jsx";

const colorDefault = "#1d9bf0";

export const tweetIconItem1 = [
  { component: CommentIcon , value:"300", color:colorDefault},
  { component: RepostIcon , value:"231", color: "#1CC75D"},
  { component: FavoriteIcon , value:"23", color: "#e91e63"},
  { component: ViewIcon , value:"6543", color:colorDefault},
];

export const tweetIconItem2 = [
  { id:"4",component: BookmarkIcon},
  { id:"5",component: ShareIcon},
];
