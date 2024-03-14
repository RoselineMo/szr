import img from "../../assets/images/szr-cutting-link.jpeg";
import {ShortenUrl} from "../ShortenUrl/ShortenUrl.tsx";

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

        <ShortenUrl />

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
