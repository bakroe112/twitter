
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import BlockIcon from "@mui/icons-material/Block";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CodeIcon from "@mui/icons-material/Code";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import CampaignIcon from "@mui/icons-material/Campaign";

export const menuIteam = [
  {
    title: "Not interested in this post",
    component: <SentimentVeryDissatisfiedIcon />,
  },
  {
    title: "Follow @Shiori2106",
    component: <PersonAddAltIcon />,
  },
  {
    title: "Add/remove from Lists",
    component: <PlaylistAddOutlinedIcon />,
  },
  {
    title: "Mute",
    component: <VolumeOffIcon />,
  },
  {
    title: "Block @Shiori2106",
    component: <BlockIcon />,
  },
  {
    title: "View post engagements",
    component: <EqualizerIcon />,
  },
  {
    title: "Embed post",
    component: <CodeIcon />,
  },
  {
    title: "Report post",
    component: <OutlinedFlagIcon />,
  },
  {
    title: "Request Community Note",
    component: <CampaignIcon />,
  },
];
