import React from "react";
import { GoQuestion } from "react-icons/go";

import profile from "../unnamed.jpeg";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-2 w-full">
      <img src={profile} alt="profile" href="/" className="w-22 h-auto py-6" />
      <h1 className="text-2xl pb-3">Selamat datang, Affan Maulana</h1>
      <p className="text-gray-700">
        Kelola info, privasi dan keamanan Anda agar Google berfungsi dengan
        lebih baik untuk Anda. {" "}
        <a href="/" className="flex items-center text-blue-400">
          Pelajari lebih lanjut {" "}<svg
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#60A5FA"
              stroke-width="1.5"
            />
            <path
              d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
              stroke="#60A5FA"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <circle cx="12" cy="16" r="1" fill="#1C274C" />
          </svg>
        </a>
      </p>
    </div>
  );
};

export default Content;
