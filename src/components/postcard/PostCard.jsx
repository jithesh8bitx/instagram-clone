import {
  CommentIcon,
  MoreOptionsIcon,
  NotificationsIcon,
  SaveIcon,
  ShareIcon,
} from "../../assets/icons/InstaIcons";
import UserIcon from "../usericon/UserIcon";

function PostCard({ name, image, location, post, likes, caption, comments }) {
  return (
    <article className="w-full max-w-[470px] mx-auto mb-5 border-neutral-800 xs:border-b-[1px]">
      <div className="flex items-center justify-between px-1 pb-3">
        <div className="flex">
          <div className="w-8 mr-3">
            <UserIcon userImage={image} />
          </div>
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs">{location}</p>
          </div>
        </div>
        <div>
          <MoreOptionsIcon />
        </div>
      </div>
      <div className="xs:border-[1px] border-neutral-800 xs:rounded overflow-hidden">
        <img
          className="w-full max-h-[585px] object-contain"
          src={post}
          alt="post"
        />
      </div>
      <div className="px-1 xs:px-0">
        <div className="my-1 flex justify-between">
          <div className="flex ml-[-8px]">
            <div className="p-2 hover:text-neutral-400">
              <NotificationsIcon />
            </div>
            <div className="p-2 hover:text-neutral-400">
              <CommentIcon />
            </div>
            <div className="p-2 hover:text-neutral-400">
              <ShareIcon />
            </div>
          </div>
          <div className="mr-[-8px]">
            <div className="p-2 hover:text-neutral-400">
              <SaveIcon />
            </div>
          </div>
        </div>
        <div className="font-semibold">{likes} likes</div>
        <div className="mt-1 text-sm">
          <p>
            <span className="font-semibold">{name}</span> {caption}
          </p>
          <span className="text-neutral-400">more</span>
        </div>
        <div className="mt-1 text-sm text-neutral-400">
          View all {comments} comments
        </div>
        <div className="mt-1 text-sm pb-3 hidden xs:block">
          <input
            className="bg-transparent border-0 outline-none placeholder:text-neutral-400"
            placeholder="Add a comment.."
            type="text"
          />
        </div>
      </div>
    </article>
  );
}

export default PostCard;
