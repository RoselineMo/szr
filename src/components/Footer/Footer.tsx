import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function Footer({date}: {date: Date}) {
  const [fullYear, setFullYear] = useState(0);

  useEffect(() => {
    if (date) {
      const newFullYear = new Date(date).getFullYear();
      setFullYear(newFullYear);
    }
  }, [date]);

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
            <Link to={`/`} className="text-2xl flex">
              szr
            </Link>
            {fullYear && (
              <span className="text-sm pt-2 self-center font-light">
                &copy; {fullYear} | All rights reserved.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
