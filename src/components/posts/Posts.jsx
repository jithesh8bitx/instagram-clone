import PostCard from "../postcard/PostCard";
import PostsData from "./PostsData";

function Posts() {
  return PostsData.map((item, index) => (
    <PostCard
      key={index}
      name={item.username}
      image={item.image}
      location={item.location}
      post={item.post}
      likes={item.likes}
      caption={item.caption}
      comments={item.comments}
    />
  ));
}

export default Posts;
