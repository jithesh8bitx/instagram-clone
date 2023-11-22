import {
  HomeSolidIcon,
  HomeIcon,
  SearchIcon,
  SearchSolidIcon,
  ExploreIcon,
  ReelsIcon,
  MessengerIcon,
  NotificationsIcon,
  NewPostIcon,
  NotificationsSolidIcon,
  MessengerSolidIcon,
  ReelsSolidIcon,
  ExploreSolidIcon,
} from "../../assets/icons/InstaIcons";
import UserIcon from "../usericon/UserIcon";
import userImage from "../../assets/images/userimages/johndoe.jpg";

const SideBarData = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
    iconFilled: <HomeSolidIcon />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <SearchIcon />,
    iconFilled: <SearchSolidIcon />,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: <ExploreIcon />,
    iconFilled: <ExploreSolidIcon />,
  },
  {
    name: "Reels",
    path: "/reels",
    icon: <ReelsIcon />,
    iconFilled: <ReelsSolidIcon />,
  },
  {
    name: "Messages",
    path: "/direct",
    icon: <MessengerIcon />,
    iconFilled: <MessengerSolidIcon />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <NotificationsIcon />,
    iconFilled: <NotificationsSolidIcon />,
  },
  {
    name: "Create",
    path: "/create",
    icon: <NewPostIcon />,
    iconFilled: <NewPostIcon />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: (
      <div className="w-6">
        <UserIcon userImage={userImage} />
      </div>
    ),
    iconFilled: (
      <div className="w-6">
        <UserIcon userImage={userImage} />
      </div>
    ),
  },
];

export default SideBarData;
