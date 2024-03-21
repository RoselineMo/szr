import {BsPerson} from "react-icons/bs";
import {FaGear, FaPencil} from "react-icons/fa6";

export function Profile() {
  return (
    <div className="grid md:flex md:justify-between wrapper w-full h-screen md:h-full mt-40">
      <div className="main-profile">
        <div className="flex gap-6 mb:60">
          <div className="w-20h-14 border rounded-xl bg-gray-200">
            {<BsPerson size={100} />}
          </div>
          <div className="grid mb:10">
            <div className="flex gap-2 text-gray-600">
              <FaPencil className="mt-1" />
              <p className="text-sm">Edit</p>
            </div>
            <div className="user-details">
              <p className="text-4xl">Jane Doe</p>
              <p className="text-xl">jdoe@emailaddress.com</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 text-gray-600 md:mt-0 mt-20">
          <FaGear size={18} className="self-center" />
          <p>Settings</p>
        </div>
      </div>
      <div className="options">
        <ul className="grid gap-6 text-xl">
          <li>My URLS</li>
          <li>My QR Codes</li>
          <li>Analytics</li>
        </ul>
      </div>
    </div>
  );
}
