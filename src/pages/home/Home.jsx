import FeedSideBar from "../../components/feedsidebar/FeedSideBar";
import Footer from "../../components/footer/Footer";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-[635px]">
          <div className="mt-4 mb-6">
            <Stories />
          </div>
          <div>
            <Posts />
          </div>
        </div>
        <div className="w-96 pl-14 hidden lg:block">
          <FeedSideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
