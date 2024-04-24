import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import UserContext from "../../../contexts/UserContext";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/userSlice";

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { setUser } = useContext(UserContext);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: yup.object({
			email: yup
				.string()
				.required()
				.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Not a valid email address"),
			password: yup
				.string()
				.required()
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					"minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
				),
		}),
		onSubmit: async values => {
			try {
				const { data } = await axios.post("http://localhost:3000/login", values);
				if (data.success) {
					setUser(data.user);
					dispatch(login(data.user));
					toast.success(`welcome back ${data.user.username}`, {
						position: "top-right",
					});
					navigate("/");
				} else {
					toast.error(data.err_msg, { position: "top-right" });
				}
			} catch (error) {
				console.error(error);
				toast.error(error.message, { position: "top-right" });
			}
		},
	});
	return (
		<div className="p-10 flex flex-col items-center gap-3">
			<h1 className="font-serif text-2xl">Login page</h1>
			<form onSubmit={formik.handleSubmit} className="gap-4 flex flex-col">
				<div className="flex flex-col">
					<label className="pl-2 capitalize text-xs" htmlFor="email">
						email
					</label>
					<input
						type="text"
						className="shadow shadow-black rounded p-2"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					<p className="text-red-600 text-sm">{formik.errors.email}</p>
				</div>
				<div className="flex flex-col">
					<label className="pl-2 capitalize text-xs" htmlFor="password">
						password
					</label>
					<input
						type="text"
						className="shadow shadow-black rounded p-2"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
					<p className="text-red-600 text-sm">{formik.errors.password}</p>
				</div>
				<button
					type="submit"
					className="bg-cyan-500 p-2 rounded shadow shadow-black text-white font-bold"
				>
					Login
				</button>
				<hr className="border-black border w-full" />
				<div className="flex justify-between text-sm">
					<p>Don't have an account?</p>
					<span
						onClick={() => navigate("/sign-up")}
						className="text-blue-500 underline cursor-pointer"
					>
						signup
					</span>
				</div>
			</form>
		</div>
	);
}

export default Login;
