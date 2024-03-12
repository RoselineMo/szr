import {TfiStatsUp} from "react-icons/tfi";
import {Link} from "react-router-dom";

export function Footer({visitsCount, date}) {
  return (
    <div className="shadow-lg full-bleed mt-16 md:mt-20 lg:mt-36 pb-1 footer-bg">
      <div className="footer h-3/4 pt-10 pb-4 text-white wrapper">
        <div className="pb-14 text-sm grid gap-2">
          <li>
            <a href="" className=" flex gap-1 cursor-pointer ">
              Help
            </a>
          </li>
          <li>
            <a href="" className=" flex gap-1 cursor-pointer">
              Contact
            </a>
          </li>
          <li>
            <a href="" className=" flex gap-1 cursor-pointer">
              Feedback
            </a>
          </li>
          <li>
            <a href="" className=" flex gap-1 cursor-pointer">
              Terms of use
            </a>
          </li>
          <li>
            <a href="" className=" flex gap-1 cursor-pointer">
              Privacy policy
            </a>
          </li>
        </div>

        <div className="last grid md:flex md:justify-between relative">
          <div className="pt-3 md:pt-0 flex gap-2 md:order-1 order-2">
            <Link to={`/`} className="text-2xl">
              szr
            </Link>
            <span className="text-sm pt-2 self-center font-light">
              &copy; {date} | All rights reserved.
            </span>
          </div>

          <span className="visits flex gap-1 text-sm md:order-2 order-1">
            <TfiStatsUp strokeWidth={1} className="self-end mb-1" />
            <a href="" className="font-light md:pt-0 self-end">
              {visitsCount} Visits. Thank you.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
