import {
  HomeSolidIcon,
  HomeIcon,
  ExploreIcon,
  ReelsIcon,
  NewPostIcon,
  ReelsSolidIcon,
  ExploreSolidIcon,
} from "../../assets/icons/InstaIcons";
import UserIcon from "../usericon/UserIcon";
import userImage from "../../assets/images/userimages/johndoe.jpg";

const SideBarDataSm = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
    iconFilled: <HomeSolidIcon />,
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

export default SideBarDataSm;
