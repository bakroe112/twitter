import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import EmailIcon from "@mui/icons-material/Email";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";


export const navigationMenu = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    path: "/explore",
  },
  {
    title: "Notifications",
    icon: <CircleNotificationsIcon />,
    path: "/notification",
  },
  {
    title: "Messages",
    icon: <EmailIcon />,
    path: "/message",
  },
  {
    title: "Lists",
    icon: <ListAltIcon />,
    path: "/list",
  },
  {
    title: "Communities",
    icon: <GroupIcon />,
    path: "/communitie",
  },
  {
    title: "Verified",
    icon: <VerifiedIcon />,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile",
  },
  {
    title: "More",
    icon: <PendingIcon />,
    path: "/more",
  },
];