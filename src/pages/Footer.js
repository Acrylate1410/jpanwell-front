import { BiPhone } from "react-icons/bi";
import { PiPhoneCallThin } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className='md:flex pt-6 pb-6 md:pb-12 md:text-start w-full px-6 md:px-12 text-yellow-950'>
            <div className="w-full md:ml-8 ">
                <div className='flex w-36 h-16 cursor-pointer'>
                    <img alt="JpanWell" src="JpanwellVSKCĐ.png" className='object-contain mx-auto'></img>
                </div>
                <div className="mt-4 md:mt-8 leading-7 md:flex md:justify-between">
                    <div>
                        <p className="text-sm">Nhập khẩu, phân phối và chịu trách nhiệm về sản phẩm: </p>
                        <p className="font-semibold">Công ty Cổ phần Hiroki</p>
                        <p className="text-sm">Địa chỉ: Số 58 Kim Mã, P. Kim Mã, Q. Ba Đình, TP. Hà Nội</p>
                        <p className="font-semibold mt-4">HỖ TRỢ KHÁCH HÀNG</p>
                        <p className="text-sm mt-1">• Chính sách đổi trả</p>
                        <p className="text-sm mt-1">• FAQ</p>
                    </div>
                    <div className="flex items-center mr-12">
                        <button className="px-4 py-1 md:py-2 flex items-center my-2  rounded-full border border-gray-500 hover:scale-110 transition">
                            <PiPhoneCallThin className="text-2xl"/>
                            <Link to="tel:0983191166" className='my-2 md:my-0 ml-1 text-sm'>Hotline tư vấn: <span className="font-semibold">098 319 1166</span></Link>
                        </button>
                        <div className="mx-2"></div>
                        <Link to="https://www.facebook.com/jpanwellvn" className="p-3 md:p-2.5 flex items-center my-2  rounded-full border border-gray-500 hover:scale-125 hover:bg-[#093489] hover:text-white hover:border-white transition ">
                            <FaFacebookF className="text-xl"/>
                        </Link> 
                    </div>
                </div>
            </div>
          </footer>
    )
}