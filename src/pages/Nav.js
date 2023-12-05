import { useState } from "react"
import { Link } from "react-router-dom"
export function Nav() {
    const [isHover, setHover] = useState("hidden")
    let textColor = "text-yellow-950"
    /*
    if (window.location.pathname === "/") {
      textColor = "text-white"
    }
    */
    return (
        <nav className={'hidden md:flex justify-center mt-4 shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)] border-y border-y-white w-[95%] mx-auto ' + textColor}>
        {[{text: "Trang chủ", link: "/"}, 
          {text: "Về JpanWell", link: "/ve-chung-toi"},
          {text: "Sản phẩm", link: "/danh-muc-san-pham"},
          {text: "Tin tức", link: "/tin-tuc"},
          {text: "Liên hệ", link: "/lien-he"}].map(i => 
          <div key={i.text} className='relative text-center'  onMouseEnter={() => {i.text === "Sản phẩm" && setHover("")}} onMouseLeave={() => {i.text === "Sản phẩm" && setHover("hidden")}}>
            <Link reloadDocument to={i.link}><div className='cursor-pointer font-semibold hover:scale-105 transition mx-4 py-2'>{i.text}</div></Link>
            {i.text === "Sản phẩm" && <div className={'z-[1000] absolute border border-gray-200 text-sm w-64 left-0 top-[41.5px] bg-white flex flex-col justify-center items-center pb-2 shadow-[0_30px_30px_-15px_rgba(0,0,0,0.3)] text-yellow-950 ' + isHover}>
                <Link reloadDocument to="/danh-muc-san-pham?type=suc-khoe" className='py-2 cursor-pointer border-b border-black w-[90%] text-start hover:scale-105 hover:font-medium'>Sức khỏe</Link>
                <Link reloadDocument to="/danh-muc-san-pham?type=lam-dep" className='py-2 cursor-pointer border-b border-black w-[90%] text-start hover:scale-105 hover:font-medium'>Làm đẹp</Link>
              </div>}
          </div>
        )}
      </nav>
    )
  }