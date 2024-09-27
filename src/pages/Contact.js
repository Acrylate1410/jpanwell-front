import { Link } from "react-router-dom"
import { PiPhoneCallThin } from "react-icons/pi"
import { FaFacebookF } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoMessenger } from "react-icons/bi";
import { useRef } from "react";
export default function Contact() {
    const name = useRef(null)
    const phone = useRef(null)
    const email = useRef(null)
    const message = useRef(null)
    const send = () => {
        fetch("https://api.kenkojapan.vn/jpanwell/messages/save", {
            method: "POST",
            body: JSON.stringify({
              name: name.current.value,
              phone: phone.current.value,
              email: email.current.value,
              message: message.current.value,
            }),
            headers: {
              'Content-Type': 'application/json'
            },
        }).then(() => {
              name.current.value = ''
              phone.current.value = ''
              email.current.value = ''
              message.current.value = ''
        })
    }
    //mt-[120px] md:mt-36 
    return (
        <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Liên hệ</span></div>
            <div className="mb-12 md:flex justify-between md:mx-48 items-center text-justify mt-8">
                <div className="md:w-[46%] md:mb-16 mb-8 md:ml-16 mx-8 md:mr-0">
                    <p className="font-semibold text-lg">THÔNG TIN LIÊN HỆ</p>
                    <p>Khách hàng có nhu cầu liên lạc, trao đổi, đóng góp ý kiến, <br className="hidden"></br>vui lòng liên hệ theo:</p>
                    <p><span className="font-semibold">Điện thoại: </span>098 319 1166</p>
                    <p><span className="font-semibold">Email: </span>hiroki.jsc@gmail.com</p>
                    <div className="flex justify-start w-full">       
                        <Link to="tel:0983191166" className='h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-gray-500 hover:scale-125 transition hover:bg-yellow-950 hover:text-white hover:border-white'>
                            <FaPhoneVolume className="text-xl"/>
                        </Link> 
                        <Link to="https://www.facebook.com/jpanwellvn" className="mx-2 h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-gray-500 hover:scale-125 hover:bg-[#093489] hover:text-white hover:border-white transition ">
                            <FaFacebookF className="text-xl"/>
                        </Link>
                        <Link to="https://m.me/1436968196580581" className="h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-gray-500 hover:scale-125 hover:bg-[#093489] hover:text-white hover:border-white transition ">
                            <BiLogoMessenger className="text-2xl"/>
                        </Link>
                    </div>
                </div>
                <div className="md:w-[42%] bg-gray-100 px-4 py-12 md:mr-8">
                    <p className="uppercase font-semibold text-center text-lg">Gửi tin nhắn cho chúng tôi</p>
                    <div className="my-4"></div>
                    <input ref={name} className="border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Họ và tên"/>
                    <div className="my-4"></div>
                    <input ref={phone} className="border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Số điện thoại"/>
                    <div className="my-4"></div>
                    <input ref={email} className="border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Email"/>
                    <div className="my-4"></div>
                    <textarea ref={message} rows={4} className="resize-none border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Lời nhắn"/>
                    <div className="w-full justify-center flex items-center"><button onClick={() => send()} className="border border-gray-500 py-1 px-3 font-semibold mx-auto mt-4 uppercase bg-yellow-950 text-white hover:scale-105 transition text-sm">Gửi tin nhắn</button></div>
                </div>
            </div>
        </>
    )
}