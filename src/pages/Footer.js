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
                <div className="leading-7 md:flex md:justify-between">
                    <div className="mt-4 md:mt-8">
                        <p className="text-sm">Nhập khẩu, phân phối và chịu trách nhiệm về sản phẩm: </p>
                        <p className="font-semibold">Công ty Cổ phần Hiroki</p>
                        <p className="text-sm">• Địa chỉ: Số 58 Kim Mã, P. Kim Mã, Q. Ba Đình, TP. Hà Nội</p>
                        <p className="text-sm">• Số ĐKKD: 0106712582 cấp ngày 12 tháng 12 năm 2014 <br className="hidden md:block"></br>tại Sở Kế Hoạch Và Đầu Tư Thành Phố Hà Nội</p>
                        <p className="text-sm">• Email: hiroki.jsc@gmail.com</p>
                        <p className="font-semibold mt-4 hidden">HỖ TRỢ KHÁCH HÀNG</p>
                        <div className="hidden flex-col">
                            <Link to="/chinh-sach-doi-tra" reloadDocument className="text-sm mt-1 w-fit">• Chính sách đổi trả</Link>
                            <Link to="/chinh-sach-giao-hang" reloadDocument className="text-sm mt-1 w-fit">• Chính sách giao hàng</Link>
                            <Link to="/chinh-sach-thanh-toan" reloadDocument className="text-sm mt-1 w-fit">• Chính sách thanh toán</Link>
                            <Link to="/chinh-sach-bao-mat" reloadDocument className="text-sm mt-1 w-fit">• Chính sách bảo mật</Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:mr-12 md:mt-0 mt-8">
                        <div className="md:flex">                   
                            <div class="fb-page" 
                                data-href="https://www.facebook.com/jpanwell"
                                data-width="300" 
                                data-hide-cover="false"
                                data-show-facepile="false"></div>
                            <div className="mx-0 md:mx-2 my-2 md:my-0"></div>
                            <div class="fb-page" 
                                data-href="https://www.facebook.com/jpanwellvn"
                                data-width="300" 
                                data-hide-cover="false"
                                data-show-facepile="false"></div>
                        </div>

                        <button className="hidden md:flex mt-4 px-4 py-1 md:py-2  items-center my-2  rounded-full border border-gray-500 hover:scale-110 transition">
                            <PiPhoneCallThin className="text-2xl"/>
                            <Link to="tel:0983191166" className='my-2 md:my-0 ml-1 text-sm'>Hotline tư vấn: <span className="font-semibold">098 319 1166</span></Link>
                        </button>
                        <div className="mx-2"></div>
                        <Link to="https://www.facebook.com/jpanwellvn" className="hidden p-3 md:p-2.5 flex items-center my-2  rounded-full border border-gray-500 hover:scale-125 hover:bg-[#093489] hover:text-white hover:border-white transition ">
                            <FaFacebookF className="text-xl"/>
                        </Link> 
                    </div>
                </div>
            </div>
            
          </footer>
    )
}