import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SideBar from "./components/sidebar/SideBar";
import NotAvailable from "./pages/na/NotAvailable";
import {
  InstagramIcon,
  MessengerIcon,
  NotificationsIcon,
} from "./assets/icons/InstaIcons";

function App() {
  return (
    <div className="h-full flex flex-col-reverse sm:flex-row">
      <SideBar />
      <main className="overflow-x-hidden flex-1">
        <div className="flex sm:hidden p-3 px-4 border-b-[1px] border-neutral-800 items-center justify-between">
          <div className="p-2">
            <InstagramIcon />
          </div>
          <div className="flex items-center">
            <div className="p-2 px-3">
              <NotificationsIcon />
            </div>
            <div className="p-2 px-3">
              <MessengerIcon />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<NotAvailable />} />
          <Route path="/explore" element={<NotAvailable />} />
          <Route path="/reels" element={<NotAvailable />} />
          <Route path="/direct" element={<NotAvailable />} />
          <Route path="/notifications" element={<NotAvailable />} />
          <Route path="/create" element={<NotAvailable />} />
          <Route path="/profile" element={<NotAvailable />} />
          <Route path="/more" element={<NotAvailable />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
