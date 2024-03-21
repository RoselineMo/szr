import {FaGoogle} from "react-icons/fa6";
import {FiEye} from "react-icons/fi";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useAuthentication} from "../hooks/useAuthentication";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, , handleSignUp, , handleSignOut] = useAuthentication(app);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await handleSignUp(email, password);
  };
  return (
    <div className="wrapper md:mt-36 mt-32  w-full grid-cols-3 place-items-center">
      <div className="form">
        <h1 className="text-4xl font-medi leading-loose mb-4 text-center">
          Welcome to{" "}
          <span className="text-4xl opacity-80 text-green-950">szr</span>
        </h1>
        <form action="submit" className="grid">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-80 h-12 pl-6 border border-gray-300 rounded-lg mb-4 caret-green-800 focus:outline-green-800"
          />
          <div className="password flex justify-between mb-6 relative">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-80 h-12 pl-6 border border-gray-300 rounded-lg caret-green-800 focus:outline-green-800"
            />
            <FiEye className="absolute eye mt-5 text-gray-400 active:text-gray-600" />
          </div>

          <button
            onClick={handleSubmit}
            className="w-80 h-14 text-sm uppercase text-white font-medi bg-green-900 border rounded-xl hover:bg-green-950 hover:text-white hover:border-green-950 hover:border-2 mb-6"
          >
            Continue
          </button>
          <p className="tracking-tight text-sm text-center mb-6">
            Already have an account?{" "}
            <Link to={`/login`} className="text-green-900">
              Login
            </Link>
          </p>
          <div className="or flex justify-between mb-6">
            <hr className="w-32 text-gray-900 self-center" />
            <span className="font-thin text-sm">OR</span>
            <hr className="w-32 text-gray-900 self-center" />
          </div>

          <button className="w-80 h-12 border border-gray-300 rounded-lg bg-white text-thin flex gap-2 self-center justify-center items-center md:mb-14 mb-16 text-gray-700">
            <FaGoogle size={20} className="mr-1 " />
            Continue with Google
          </button>

          <div className="bottom place-content-center flex gap-2 text-sm text-green-900 tracking-tight">
            <Link to={`/`}>Terms of use</Link>
            <span className="text-black">|</span>
            <Link to={`/`}>Privacy Policy</Link>
          </div>
        </form>
        {auth.currentUser && (
          <button onClick={() => handleSignOut}>SignOut</button>
        )}
      </div>
    </div>
  );
}
