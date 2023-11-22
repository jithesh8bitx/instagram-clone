import UserIcon from "../usericon/UserIcon";
import userImage from "../../assets/images/userimages/johndoe.jpg";
import FeedSideBarData from "./FeedSideBarData";

function FeedSideBar() {
  return (
    <div className="mt-9 px-4 pb-6">
      <div className="flex items-center mb-6">
        <div className="w-11">
          <UserIcon userImage={userImage} />
        </div>
        <div className="ps-4 text-sm">
          <p className="font-semibold">john_doe_</p>
          <p className="text-neutral-400">John Doe</p>
        </div>
        <p className="text-xs font-semibold text-blue-500 ms-auto">Switch</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-neutral-400 text-sm">
          Suggested for you
        </p>
        <span className="text-xs font-semibold">See All</span>
      </div>
      <div className="py-5">
        {FeedSideBarData.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="w-11">
              <UserIcon userImage={item.image} />
            </div>
            <div className="ps-4 text-sm">
              <p className="font-semibold">{item.username}</p>
              <p className="text-neutral-400 text-xs">Follows you</p>
            </div>
            <p className="text-xs font-semibold text-blue-500 ms-auto">
              Follow
            </p>
          </div>
        ))}
      </div>
      <footer className="text-neutral-500 text-xs">
        <div className="mb-6 leading-normal">
          <p>
            About . Help . API . Privacy . Terms . Locations . Language . Meta
            Verified
          </p>
        </div>
        <div>
          <p className="capitalize">&copy; 2030 INSTAGRAM FROM META</p>
        </div>
      </footer>
    </div>
  );
}

export default FeedSideBar;
