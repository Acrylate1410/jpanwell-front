import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export function NotFound() {
  return (
    <div className="not-found">
      <img src="404.png" alt="404" className="h-64 mx-auto mt-12"></img>
      <h1 className=" font-bold text-4xl text-center mx-2 mt-4 mb-8 text-yellow-950">Không tìm thấy trang bạn yêu cầu</h1>
      <Link to="/" className="link-home">
          <button className='mx-auto bg-yellow-950 text-white w-40 h-12 rounded-full flex items-center justify-center border border-yellow-950 hover:bg-white hover:text-[#093489] transition '>
              Quay về trang chủ   
          </button>
      </Link>
      <div className="w-full mt-8"><Footer/></div>
    </div>
  )
};
