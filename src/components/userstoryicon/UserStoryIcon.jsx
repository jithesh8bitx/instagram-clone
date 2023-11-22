import UserIcon from "../usericon/UserIcon";
import "./userstoryicon.css";

function UserStoryIcon({ image, username }) {
  return (
    <div className="w-20 cursor-pointer">
      <div className="ig-gradient rounded-full border-2 border-transparent mx-2">
        <div className="border-2 border-black rounded-full">
          <UserIcon userImage={image} />
        </div>
      </div>
      <p className="text-xs text-center pt-1 px-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {username}
      </p>
    </div>
  );
}

export default UserStoryIcon;
