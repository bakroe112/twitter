import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import BlockIcon from "@mui/icons-material/Block";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CodeIcon from "@mui/icons-material/Code";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import CampaignIcon from "@mui/icons-material/Campaign";

export const menuItem = (onClick) => {
  return [
    {
      title: "Not interested in this post",
      component: <SentimentVeryDissatisfiedIcon />,
      onClick: async () => {
        console.log("Click on other event 1");
        onClick();
      },
    },
    {
      title: "Follow @Shiori2106",
      component: <PersonAddAltIcon />,
      onClick: async () => {
        console.log("Click on other event 2");
        onClick();
      },
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
};
