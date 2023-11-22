import { useEffect, useRef, useState } from "react";
import { ArrowUpIcon } from "../../assets/icons/InstaIcons";
import UserStoryIcon from "../userstoryicon/UserStoryIcon";
import StroriesData from "./StoriesData";

function Stories() {
  const storiesRef = useRef();
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(false);

  const scrollHrizontal = (direction) => {
    if (direction == "left") {
      storiesRef.current.scrollLeft -= storiesRef.current.clientWidth / 3;
    } else {
      storiesRef.current.scrollLeft += storiesRef.current.clientWidth / 3;
    }
  };

  const setButtonVisibility = () => {
    storiesRef.current.scrollLeft > 10
      ? setLeftButton(true)
      : setLeftButton(false);
    Math.floor(storiesRef.current.scrollLeft) >=
    storiesRef.current.scrollWidth - 636
      ? setRightButton(false)
      : setRightButton(true);
  };

  useEffect(() => {
    if (storiesRef.current.scrollWidth > storiesRef.current.clientWidth) {
      setRightButton(true);
    }
  }, []);

  return (
    <div className="relative">
      <div
        className="flex py-2 overflow-y-auto no-scrollbar scroll-smooth"
        ref={storiesRef}
        onScroll={setButtonVisibility}
      >
        {StroriesData.map((item, index) => (
          <UserStoryIcon
            key={index}
            image={item.image}
            username={item.username}
          />
        ))}
      </div>
      <div className="w-full h-20 absolute top-0 flex items-center justify-between px-3 pointer-events-none">
        <button
          className={
            (leftButton ? "" : "invisible ") +
            "p-1 rotate-[-90deg] bg-neutral-200 text-black rounded-full pointer-events-auto"
          }
          style={{ mixBlendMode: "lighten" }}
          onClick={() => scrollHrizontal("left")}
        >
          <ArrowUpIcon />
        </button>

        <button
          className={
            (rightButton ? "" : "invisible ") +
            "p-1 rotate-90 bg-neutral-200 text-black rounded-full pointer-events-auto"
          }
          style={{ mixBlendMode: "lighten" }}
          onClick={scrollHrizontal}
        >
          <ArrowUpIcon />
        </button>
      </div>
    </div>
  );
}

export default Stories;
