import { FcGoogle } from "react-icons/fc";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";

import profile from '../unnamed.jpeg';

export default function Header() {
  const buttonClasses = "p-4 border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500 transition duration-300";
  return (
    <div className="mt-4">
      <div className="flex justify-around items-center px-4">
        <FcGoogle className="mr-3 text-5xl hover:bg-gray-200 rounded-full p-2"/>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Telusuri Akun Google"
            className="px-4 py-2 rounded-lg pl-10 border focus:outline-none bg-gray-100 focus:bg-white focus:shadow w-full"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.293 13.707a1 1 0 1 1-1.414 1.414l-3.58-3.58a5 5 0 1 1 1.415-1.415l3.579 3.58zm-1.153-5.41a6 6 0 1 0-1.415 1.414l3.58 3.58a1 1 0 1 0 1.414-1.414l-3.579-3.58z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <AiOutlineQuestionCircle className="ml-3 text-5xl hover:bg-gray-200 rounded-full p-2" />
        <GiSettingsKnobs className="ml-3 text-5xl hover:bg-gray-200 rounded-full p-2" />
        <img src={profile} alt="profile" href="/" className="w-8 h-auto mx-6" />
      </div>
      <nav className="border-b border-gray-300">
        <ul className="flex flex-wrap sm:flex-wrap justify-between items-center px-6 py-2 text-gray-700">
          <li><button className={buttonClasses}>Beranda</button></li>
          <li><button className={buttonClasses}>Info pribadi</button></li>
          <li><button className={buttonClasses}>Data & privasi</button></li>
          <li><button className={buttonClasses}>Keamanan</button></li>
          <li><button className={buttonClasses}>Orang & berbagi</button></li>
          <li><button className={buttonClasses}>Pembayaran & langganan</button></li>
        </ul>
      </nav>
    </div>
  );
}
