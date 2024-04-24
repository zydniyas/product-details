import axios from "axios";
import { useFormik } from "formik";
import { fromJSON } from "postcss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import UserContext from "../../../contexts/UserContext";

function Signup() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      mobile: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      username: yup.string().min(3).required(),
      email: yup
        .string()
        .required()
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Not a valid email address"
        ),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        ),
      mobile: yup
        .string()
        .required()
        .matches(/^([+]\d{2})?\d{10}$/, "input a valid phone number"),
      confirmPassword: yup
        .string()
        .required("please confirm your password")
        .oneOf([yup.ref("password")], "password must be same "),
    }),

    onSubmit: async (values) => {
      try {
        const { data } = await axios.post("http://localhost:3000/signup", {
          username: values.username,
          password: values.password,
          email: values.email,
        });
        if (data.success) {
          toast.success(`welcome  ${data.user.username}`, {
            position: "top-right",
          });
          setUser(data.user);
          navigate("/");
        } else {
          toast.error(data.err_msg, { position: "top-right" });
        }
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div className="p-10 flex flex-col items-center gap-3">
      <h1 className="font-serif text-2xl">Sign up page</h1>
      <form onSubmit={formik.handleSubmit} className="gap-4 flex flex-col">
        <div className="flex flex-col">
          <label className="pl-2 capitalize text-xs" htmlFor="username">
            username
          </label>
          <input
            type="text"
            className="shadow shadow-black rounded p-2"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <p className="text-red-600 text-sm">{formik.errors.username}</p>
        </div>
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
          <label className="pl-2 capitalize text-xs" htmlFor="mobile">
            mobile
          </label>
          <input
            type="text"
            className="shadow shadow-black rounded p-2"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
          />
          <p className="text-red-600 text-sm">{formik.errors.mobile}</p>
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
        <div className="flex flex-col">
          <label className="pl-2 capitalize text-xs" htmlFor="confirmPassword">
            confirm password
          </label>
          <input
            type="text"
            className="shadow shadow-black rounded p-2"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          <p className="text-red-600 text-sm">
            {formik.errors.confirmPassword}
          </p>
        </div>
        <button
          type="submit"
          className="bg-cyan-500 p-2 rounded shadow shadow-black text-white font-bold"
        >
          Sign up
        </button>
        <hr className="border-black border w-full" />
        <div className="flex justify-between text-sm">
          <p className="text-red-600 text-sm">Don't have an account?</p>
          <span
            onClick={() => navigate("/log-in")}
            className="text-blue-500 underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
