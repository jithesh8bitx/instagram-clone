import { NavLink } from "react-router-dom";
import {
  InstagramSmallIcon,
  InstagramIcon,
  MoreIcon,
  MoreSolidIcon,
} from "../../assets/icons/InstaIcons";
import { useEffect, useState } from "react";
import SideBarData from "./SideBarData";
import SideBarDataSm from "./sideBarDatasm";

function SideBar() {
  const [logo, setLogo] = useState(<InstagramIcon />);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sideBarItems, setSideBarItems] = useState(SideBarData);

  const whichLogo = () => {
    if (window.innerWidth < 1280) {
      setLogo(<InstagramSmallIcon />);
    } else {
      setLogo(<InstagramIcon />);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    whichLogo();
    windowWidth < 670
      ? setSideBarItems(SideBarDataSm)
      : setSideBarItems(SideBarData);
  }, [windowWidth]);

  return (
    <nav className="w-full sm:w-fit h-fit sm:h-full xl:w-60 flex flex-row sm:flex-col justify-evenly px-3 sm:p-3  border-solid border-t-[1px] sm:border-r-[1px] border-neutral-800 overflow-y-auto no-scrollbar">
      {windowWidth > 670 && (
        <div className="w-5 px-3 py-6">
          <NavLink to="/">{logo}</NavLink>
        </div>
      )}
      <ul className="flex-1 sm:flex-none flex sm:flex-col justify-evenly sm:justify-start">
        {sideBarItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>
              {({ isActive }) => (
                <div className="flex p-3 my-1 rounded-lg transition duration-300 ease-in-out sm:hover:bg-neutral-900 active:text-neutral-500 active:bg-inherit">
                  <div>{isActive ? item.iconFilled : item.icon}</div>
                  <p
                    className={
                      (isActive ? "font-bold" : "") + " pl-4 hidden xl:block"
                    }
                  >
                    {item.name}
                  </p>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      {windowWidth > 670 && (
        <div className="mt-auto">
          <NavLink to="/more">
            {({ isActive }) => (
              <div className="flex p-3 my-2 rounded-lg transition duration-300 ease-in-out hover:bg-neutral-900 active:text-neutral-500 active:bg-inherit">
                <div>{isActive ? <MoreSolidIcon /> : <MoreIcon />}</div>
                <p
                  className={
                    (isActive ? "font-bold" : "") + " pl-4 hidden xl:block"
                  }
                >
                  More
                </p>
              </div>
            )}
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default SideBar;
