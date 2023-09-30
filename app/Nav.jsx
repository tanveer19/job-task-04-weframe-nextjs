import { GiHamburgerMenu, FaMagnifyingGlass } from "react-icons/gi";
import "./style.css";

const Nav = () => {
  return (
    <div className="flex gap-10">
      <h3 className="text-xl">Weframetech</h3>
      <span className="rotated">
        <GiHamburgerMenu size={25}></GiHamburgerMenu>
      </span>
      <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
        <input
          type="text"
          class="bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Search Here"
        />
      </div>
      <p className="underline">OTHER MENUS</p>
      <p>Badges</p>
      <span>ENGLISH</span>
      <div>
        <p>Instructor Day</p>
        <span>Super Admin</span>
      </div>
    </div>
  );
};

export default Nav;
