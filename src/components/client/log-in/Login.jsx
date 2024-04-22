import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="p-10 flex flex-col items-center gap-3">
      <h1 className="font-serif text-2xl">Login page</h1>
      <form className="gap-4 flex flex-col">
        <div className="flex flex-col">
          <label className="pl-2 capitalize text-xs" htmlFor="email">
            email
          </label>
          <input
            type="text"
            className="shadow shadow-black rounded p-2"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2 capitalize text-xs" htmlFor="password">
            password
          </label>
          <input
            type="text"
            className="shadow shadow-black rounded p-2"
            name="password"
          />
        </div>
        <button className="bg-cyan-500 p-2 rounded shadow shadow-black text-white font-bold">
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
