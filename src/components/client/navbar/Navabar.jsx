import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const navItems = [
  { item: "home", link: "/" },
  { item: "about", link: "/about" },
  { item: "contact", link: "/contact" },
  { item: "support", link: "/support" },
  { item: "products", link: "/products" },
];

function Navabar() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const userDetail = { username: "niyas", avatar: "" };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function login() {
    setLoading(true);
    setTimeout(() => {
      setUserDetails(userDetail);
      setLoading(false);
    }, 5000);
  }
  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-white
          bg-black
        "
      >
        <div>
          <a href="#"></a>
        </div>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-white
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {navItems.map((elem, i) => {
              return (
                <li
                  key={i}
                  onClick={() => navigate(elem.link)}
                  className="md:p-4 py-2 block hover:text-purple-400 cursor-pointer"
                  href="#"
                >
                  {elem.item}
                </li>
              );
            })}
          </ul>
          {userDetails ? (
            <div
              onClick={() => setUserDetails(null)}
              className={`${
                loading
                  ? "hidden"
                  : "w-10 h-10 bg-white rounded-full cursor-pointer"
              } `}
            ></div>
          ) : (
            <button
              onClick={() => login()}
              className={`${
                loading
                  ? "hidden"
                  : "bg-white rounded px-6 py-2 uppercase font-bold hover:bg-black text-black border hover:border-white hover:text-white duration-300"
              } `}
            >
              login
            </button>
          )}
          {loading && <div className="w-10 h-10 animate-spin bg-white"></div>}
        </div>
      </nav>
    </header>
  );
}

export default Navabar;
