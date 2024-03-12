import {FaGoogle} from "react-icons/fa6";
import {FiEye} from "react-icons/fi";
import {Link} from "react-router-dom";

export function Login() {
  return (
    <div className="wrapper md:mt-36 mt-32  w-full grid-cols-3 place-items-center">
      <div className="form">
        <h1 className="text-4xl font-medi leading-loose mb-4 text-center">
          Welcome back
        </h1>
        <form action="submit grid">
          <input
            type="email"
            placeholder="Email address"
            className="w-80 h-12 pl-6 border border-gray-300 rounded-lg mb-4 caret-green-800 focus:outline-green-800"
          />
          <div className="password flex justify-between mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-80 h-12 pl-6 border border-gray-300 rounded-lg caret-green-800 focus:outline-green-800"
            />
            <FiEye className="absolute eye mt-5 text-gray-400 active:text-gray-600" />
          </div>
          <p className="text-sm text-green-900 tracking-tight mb-6">
            Forgot password?
          </p>
          <button className="w-80 h-14 text-sm uppercase text-white font-medi bg-green-900 border rounded-xl hover:bg-green-950 hover:text-white hover:border-green-950 hover:border-2 mb-4">
            Continue
          </button>
          <p className="tracking-tight text-sm text-center mb-6">
            Don't have an account?{" "}
            <Link to={`/sign-up`} className="text-green-900">
              Sign up
            </Link>
          </p>
          <div className="or flex justify-between mb-4">
            <hr className="w-32 text-gray-900 self-center" />
            <span className="font-thin text-sm">OR</span>
            <hr className="w-32 text-gray-900 self-center" />
          </div>

          <button className="w-80 h-12 border border-gray-300 rounded-lg bg-white text-thin flex gap-2 self-center justify-center items-center md:mb-10 mb-12 text-gray-700">
            <FaGoogle size={20} className="mr-1 " />
            Continue with Google
          </button>

          <div className="bottom place-content-center flex gap-2 text-sm text-green-900 tracking-tight">
            <Link to={`/`}>Terms of use</Link>
            <span className="text-black">|</span>
            <Link to={`/`}>Privacy Policy</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
