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
		<div className="bg-black z-50 flex justify-between sticky top-0 p-4 items-center">
			<h1 className="text-2xl uppercase font-extrabold text-white cursor-pointer hover:scale-105 duration-300">
				logo
			</h1>
			<div className="flex gap-4">
				<ul className="flex justify-center items-center gap-4">
					{navItems.map((elem, i) => {
						return (
							<li
								key={i}
								onClick={() => navigate(elem.link)}
								className="uppercase text-white font-bold cursor-pointer hover:scale-105 duration-300"
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
							loading ? "hidden" : "w-10 h-10 bg-white rounded-full cursor-pointer"
						} `}
					></div>
				) : (
					<button
						onClick={() => login()}
						className={`${
							loading
								? "hidden"
								: "bg-white rounded px-6 py-2 uppercase font-bold hover:bg-black border hover:border-white hover:text-white duration-300"
						} `}
					>
						login
					</button>
				)}
				{loading && <div className="w-10 h-10 animate-spin bg-white"></div>}
			</div>
		</div>
	);
}

export default Navabar;
