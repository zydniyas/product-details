import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";
import { useSelector } from "react-redux";

const navItems = [
	{ item: "home", link: "/" },
	{ item: "about", link: "/about" },
	{ item: "contact", link: "/contact" },
	{ item: "support", link: "/support" },
	{ item: "products", link: "/products" },
];

function Navabar() {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();
	const user = useSelector(state => state.user.user);
	console.log(user);
	return (
		<header>
			<nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-white bg-black">
				<div>
					<a href="#"></a>
				</div>
				<div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
					<ul className="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
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
					{user ? (
						<div className="group relative">
							<img
								src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
								className="w-10 h-10 bg-white rounded-full cursor-pointer"
							/>
							<button
								onClick={() => setUser(null)}
								className="group-hover:block hidden absolute top-full right-0 bg-black p-2 rounded"
							>
								logout
							</button>
						</div>
					) : (
						<button
							onClick={() => navigate("/log-in")}
							className="bg-white rounded px-6 py-2 uppercase font-bold hover:bg-black text-black border hover:border-white hover:text-white duration-300"
						>
							login
						</button>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Navabar;
