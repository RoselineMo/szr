import {FaArrowDown, FaChevronRight} from "react-icons/fa6";
import img from "../../assets/images/szr-cutting-link.jpeg";
import {BsStars} from "react-icons/bs";

export function Hero() {
  return (
    <div className="hero h-full mt-40 md:flex grid-cols-1 gap-16">
      <div className="hero-header mt-12">
        <h1 className="text-5xl tracking-tight font-medi mb-4">
          The Free Link Shortener
        </h1>
        <p className="text-2xl font-light tracking-tight mb-10">
          Shorten, Customize and Track URL Clicks - 100% Free
        </p>

        <div className="shorten mb-6">
          <p className="text-gray-400 mb-5 flex gap-1">
            Try it now{" "}
            <FaArrowDown className="self-center mt-2 animate-bounce" />
          </p>
          <div className="paste-url flex justify-start gap-0 mb-4 w-96 relative">
            <input
              type="url"
              placeholder="Paste a long url here"
              className="w-96 h-12 pl-3 border border-gray-300 rounded-lg caret-green-800 focus:outline-green-800"
            />
            <button className="absolute shorten w-32 h-12 text-sm text-white uppercase font-medi hover:bg-green-950  active:shadow-lg active:bg-green-900 bg-green-900 flex pl-4 pr-2 pt-4 gap-1">
              Shorten it <FaChevronRight className="self-center mb-3" />
            </button>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-gray-400 text-sm mb-5 flex gap-1">
            <BsStars className="self-center" /> Optional | Customize your link
            text{" "}
          </p>
          <div className="flex justify-start gap-0 mb-4 w-96 relative">
            <select
              className="domain w-40 h-12 pl-3 pb-1 border border-gray-300 lowercase font-light focus:outline-gray-600 text-gray-400"
              defaultValue={"roselinemo.com"}
            >
              <option value="roselinemo.com/">roselinemo.com/</option>
              <option value="Add your domain/">Add your domain/</option>
            </select>

            <input
              type="text"
              placeholder="Type your custom link text"
              className="custom-text absolute w-56 h-12 text-gray-200 pl-3 pb-1 border  border-gray-300 caret-green-800 focus:outline-green-800 "
            />
          </div>
        </div>

        <div className="bonus text-gray-600  leading-loose mb-4">
          <span className="font-medi uppercase border-b-2 border-b-black">
            Bonus{" "}
          </span>
        </div>

        <ul className="grid gap-4">
          <li>Generate QR Code </li>
          <li>Use Your Custom Domain</li>
          <li>Track Your Link's Performance</li>
        </ul>
      </div>
      <div className="hero-image hidden lg:block rotate-6 shadow-lg mt-16">
        <img src={img} alt="hero image" />
      </div>
    </div>
  );
}
