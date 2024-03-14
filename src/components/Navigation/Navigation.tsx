import {GrClose} from "react-icons/gr";
import {FaMoon} from "react-icons/fa6";
import {useState} from "react";
import {Link} from "react-router-dom";
import {TfiHelpAlt} from "react-icons/tfi";
import {IoPersonOutline} from "react-icons/io5";
import {FiMenu} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const navigate = useNavigate();

  return (
    <div className={`full-bleed navbar bg-white shadow-lg z-10 fixed`}>
      <nav className="items-center h-20 lg:h-24 w-screen wrapper " id="top">
        <ul className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <li>
              <Link
                to={`/`}
                className="text-5xl flex lg:pb-4 pb-1 text-red-600"
              >
                szr
              </Link>
            </li>

            <li className="lg:flex hidden gap-2 analytics hover:text-green-800">
              <Link to={`analytics`} className="uppercase text-sm">
                Analytics
              </Link>
            </li>
            <li className="lg:flex hidden gap-2 qr-code hover:text-green-800">
              <Link to={`qr-code`} className="uppercase text-sm">
                QR Code
              </Link>
            </li>
          </div>
          <div className="lg:flex hidden gap-4 icons">
            <li className="self-center faqs">
              <Link to={`faqs`}>
                <TfiHelpAlt size={19} className="hover:text-green-800" />
              </Link>
            </li>

            <li className="profile self-center ">
              <Link to={`profile`}>
                <IoPersonOutline size={19} className="hover:text-green-800" />
              </Link>
            </li>

            <li className="login self-center text-sm font-medi text-green-950 hover:text-green-800">
              <Link to={`login`}>Login</Link>
            </li>

            <li className="profile self-center">
              <button
                className="w-32 h-10 bg-green-900 text-white text-sm font-medi border-green-900 rounded-xl hover:bg-green-950 hover:text-white hover:border-green-950 hover:border-2"
                onClick={() => navigate("/sign-up")}
              >
                Sign up
              </button>
            </li>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden visible z-20 cursor-pointer "
          >
            <FiMenu size={50} className="pt-2" />
          </div>
        </ul>
      </nav>

      {open && (
        <div className="mobile-menu-overlay fixed lg:hidden bg-white z-20 top-0 right-0 bottom-0 left-0 w-screen leading-10 wrapper">
          <GrClose
            onClick={toggleMenu}
            size={40}
            className="z-20 cursor-pointer ml-auto mt-6"
          />
          <ul className="py-1 mb-20  justify-center">
            <li className="shorten-link">
              <Link
                to={`shorten-link`}
                onClick={toggleMenu}
                className="uppercase"
              >
                Shorten Link
              </Link>
            </li>
            <li className="analytics">
              <Link to={`analytics`} onClick={toggleMenu} className="uppercase">
                Analytics
              </Link>
            </li>
            <li className="qr-code">
              <Link to={`qr-code`} onClick={toggleMenu} className="uppercase">
                QR Code
              </Link>
            </li>
            <li className="custom-domain">
              <Link
                to={`custom-domain`}
                onClick={toggleMenu}
                className="uppercase"
              >
                Custom Domain
              </Link>
            </li>
          </ul>

          <div>
            <ul className="flex gap-2 mb-3">
              <li className="self-center faqs">
                <Link to={`faqs`} onClick={toggleMenu}>
                  <TfiHelpAlt size={18} />
                </Link>
              </li>

              <li className="profile">
                <Link to={`profile`} onClick={toggleMenu}>
                  <IoPersonOutline size={18} />
                </Link>
              </li>

              <li className="dark-mode">
                <Link to={`dark-mode`} onClick={toggleMenu}>
                  <FaMoon size={18} />
                </Link>
              </li>
            </ul>
            <Link
              to={`/`}
              onClick={toggleMenu}
              className="text-3xl flex text-red-600"
            >
              szr
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
