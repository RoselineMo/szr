import {FaStar} from "react-icons/fa6";
import img from "../../assets/images/szr-cutting-link.jpeg";
import {ShortenUrl} from "../ShortenUrl/ShortenUrl.tsx";

export function Hero() {
  return (
    <div className="hero h-full mt-40 md:flex grid-cols-1 gap-16">
      <div className="hero-header mt-12" id="shorten">
        <h1 className="md:text-5xl text-3xl tracking-tight font-medi mb-4">
          Shorten that link<span className="text-green-800 text-6xl">.</span>
        </h1>
        <p className="md:text-2xl text-xl font-light tracking-tight mb-10">
          Shorten, Customize and Track URL Clicks <br />
          100% Free
        </p>

        <ShortenUrl />

        <ul className="grid gap-6 w-52">
          <li className="goodies flex gap-2 cursor-pointer">
            <FaStar className="self-center text-green-800" /> Generate QR Code
          </li>
          <li className="goodies flex gap-2 cursor-pointer">
            <FaStar className="self-center text-green-800" /> Track URL
            Performance
          </li>
        </ul>
      </div>
      <div className="hero-image hidden lg:block rotate-6 shadow-lg mt-16 p-2">
        <img src={img} alt="hero image" />
      </div>
    </div>
  );
}
