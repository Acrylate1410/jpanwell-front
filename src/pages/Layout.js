import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import Footer from "./Footer";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl";
import { Nav } from "./Nav";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { PiCertificateFill, PiPhoneCallThin } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import Snowfall from 'react-snowfall'
import Hamburger from "hamburger-react";
import { IoMenuOutline,IoClose} from "react-icons/io5";
const Layout = () => {
    const [pos, setPos] = useState("right-[-61px]")
    const HamburgerComponent = () => {
      const [isOpen, setOpen] = useState(false)
      return (
        <>       
          <div className="z-0 relative md:hidden text-4xl" onClick={() => setOpen(true)}><IoMenuOutline/></div>
          {isOpen && 
            <div className="md:hidden">
              <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-10" onClick={() => setOpen(false)}></div>
              <div className={'fixed top-0 bottom-0 left-[33%] right-0 bg-white z-[100] '}>
                <div className="text-4xl ml-auto flex justify-end mt-6 mr-6" onClick={() => setOpen(false)}><IoClose/></div>
                <div className='mt-20'>
                    {[{text: "Trang chủ", link: "/"}, 
                      {text: "Về JpanWell", link: "/ve-chung-toi"},
                      {text: "Sản phẩm", link: "/danh-muc-san-pham"},
                      {text: "Tin tức", link: "/tin-tuc"},
                      {text: "Liên hệ", link: "/lien-he"}].map(i => 
                        <Link reloadDocument to={i.link} key={i.text}>
                            <div className='cursor-pointer text-yellow-950 border-b border-gray-300 pl-6 py-3 text-[#093489] font-medium ' onClick={() => {setOpen(false)}}>{i.text}</div>
                        </Link>
                    )}
                </div>
              </div>
            </div>
          }
        </>
      )
    }
    const onScroll = () => {
      setPos("right-[24px]")
    };
    
    useEffect(() => {
      window.history.scrollRestoration = 'manual'
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <div className="App w-full overflow-hidden relative">
            {/*<Snowfall/>*/}
            <header className={'header pt-4 pb-1 md:pb-0 md:pt-4 bg-white top-0 right-0 left-0 z-30'}>
              <div className='flex items-center justify-between'>
                <Link reloadDocument to="/" className='flex h-12 md:h-16 cursor-pointer ml-4 md:ml-12'>
                  <img alt="JpanWell" src="JpanwellVSKCĐ.png" className='object-contain'></img>
                </Link>
                <div className='flex w-[45%] justify-end mr-4 md:mr-12'>
                  <HSearchBar/>
                  <div className={'flex items-center justify-center ml-4 text-yellow-950'}>
                    <PiShoppingCartSimpleThin  className='text-3xl md:text-2xl w-[48px] md:w-auto'/>
                    <HamburgerComponent/>
                  </div>
                </div>
              </div>
              <VSearchBar/>
              <Nav/>
            </header>
            <button className={pos + ' fixed bottom-[20px] text-[44px] z-[100] transition-[right] text-gray-500 border border-gray-500 rounded-full p-2 hover:text-white bg-white hover:bg-[#d9cbb0] hover:border-[#d9cbb0]'}  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><SlArrowUp className="text-xl"/></button>
            <Link to="tel:0983191166" className={pos + ' fixed bottom-[65px] text-[44px] z-[100] transition-[right] text-gray-500 border border-gray-500 rounded-full p-2 hover:text-white bg-white hover:bg-[#d9cbb0] hover:border-[#d9cbb0] md:hidden'}><FiPhone className="text-xl"/></Link>
            <Outlet />
            <section className='flex justify-center items-start bg-[#d9cbb0]'>
                <div className='flex flex-col items-center py-2 text-yellow-900 w-1/4 text-center'>
                  <div className="h-10"><BsBoxSeamFill className='text-4xl'/></div>
                  <p className="text-xs md:text-sm mt-2">Hàng chính hãng 100%</p>
                </div>
                <div className='flex flex-col items-center py-2 text-yellow-900 w-1/4 text-center mx-8'>
                  <div className="h-10"><FaShippingFast className='text-4xl'/></div>
                  <p className="text-xs md:text-sm mt-2">Miễn phí giao hàng <br className="md:hidden"></br>toàn quốc</p>
                </div>
                <div className='flex flex-col items-center py-2 text-yellow-900 w-1/4 text-center'>
                  <div className="h-10"><PiCertificateFill className='text-4xl'/></div>
                  <p className="text-xs md:text-sm mt-2">Đảm bảo nguồn gốc, chất lượng sản phẩm <br className="hidden md:block"></br> và nguyên liệu đầu vào</p>
                </div>
            </section>
            <Footer/>
            <ChatBot/>
        </div>
)};

function HSearchBar() {
  const [products, setProducts] = useState([])
  const outerRef = useRef()
  const query = useRef("")
  let borderColor = "border-gray-500"
  const navigate = useNavigate();
  const showSuggestion = (e) => {
    query.current = e
    fetch("https://api.kenkojapan.vn/jpanwell/products/get_products").then(res => res.json()).then(data => {
        setProducts(data || [])
    }).catch(error => {})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    query.current !== "" ? window.location.href = "/tim-kiem?query=" + query.current.toString().toLowerCase().replaceAll(" ", "-") : navigate("#")
    query.current = ""
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (outerRef.current && !outerRef.current.contains(e.target)) {
        query.current = ""
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <form className='w-1/2 relative hidden md:block' ref={outerRef} onSubmit={handleSubmit}>
      <Link to={query.current !== "" ? "/tim-kiem?query=" + query.current.toString().toLowerCase().replaceAll(" ", "-") : "#"} className='absolute right-3 top-0 bottom-0 flex items-center' ><CiSearch/></Link>
      <input className={'border py-1 px-3 w-full placeholder:text-sm outline-0 ' + borderColor} placeholder='Nhập từ khóa tìm kiếm' onInput={(e) => showSuggestion(e.target.value)} onFocus={(e) => showSuggestion(e.target.value)}></input>
      <div className={query.current === "" ? "hidden" : "absolute left-0 right-0 bg-white top-9 border border-gray-300 z-[10000]"}>
          {products.filter(el => {
              if (query.current === '') {
                  return false
              }
              return el.name.toLowerCase().startsWith(query.current.toString().toLowerCase())}).map(i => 
                <Link reloadDocument to={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")} className="flex items-center h-16 border-b border-b-gray-300 pl-2 py-1" onClick={() => query.current = ""}>
                  <div className="h-full aspect-square flex justify-center items-center"><img src={"/thumbnails/" + i.thumbnail} className="h-4/5 mx-auto"></img></div>
                  <div className="font-semibold text-yellow-950">{i.name}</div>
                </Link>
              )
          }
      </div>
    </form>
  )
}
function VSearchBar() {
  const outerRef = useRef()
  const [products, setProducts] = useState([])
  const query = useRef("")
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (outerRef.current && !outerRef.current.contains(e.target)) {
        query.current = ""
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const showSuggestion = (e) => {
    query.current = e
    fetch("https://api.kenkojapan.vn/jpanwell/products/get_products").then(res => res.json()).then(data => {
        setProducts(data || [])
    }).catch(error => {})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    query.current !== "" ? window.location.href = "/tim-kiem?query=" + query.current.toString().toLowerCase().replaceAll(" ", "-") : navigate("#")
    query.current = ""
  }
  return (
      <form className='w-full relative md:hidden mt-4' ref={outerRef} onSubmit={handleSubmit}>
          <Link to={query.current !== "" ? "/tim-kiem?query=" + query.current.toString().toLowerCase().replaceAll(" ", "-") : "#"} className='absolute right-3 top-0 bottom-0 flex items-center'><CiSearch/></Link>
          <input className='border border-gray-300 bg-transparent py-1 px-3 w-full placeholder:text-sm outline-0' placeholder='Nhập từ khóa tìm kiếm' onFocus={(e) => showSuggestion(e.target.value)} onInput={(e) => showSuggestion(e.target.value)}></input>
          <div className={query.current === "" ? "hidden" : "absolute left-0 right-0 bg-white top-9 border-l border-r border-t border-gray-300 z-[10000]"}>
              {products.filter(el => {
                  if (query.current === '') {
                      return false
                  }
                  return el.name.toLowerCase().startsWith(query.current.toString().toLowerCase())}).map(i => 
                    <Link reloadDocument to={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")} className="flex items-center h-16 border-b border-b-gray-300 pl-2 py-1" onClick={() => {query.current = ""}}>
                      <div className="h-full aspect-square flex justify-center items-center"><img src={"/thumbnails/" + i.thumbnail} className="h-4/5 mx-auto"></img></div>
                      <div className="font-semibold text-yellow-950">{i.name}</div>
                    </Link>
                  )
              }
          </div>
      </form>
  )
}
const ChatBot = () => {
    const MessengerRef = useRef();
    useEffect(() => {
        MessengerRef.current.setAttribute('page_id', '122098227242006889');
        MessengerRef.current.setAttribute('attribution', 'biz_inbox');
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: 'v18.0',
            });
        };
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);
    return (
        <>
            <div id="fb-root"></div>
            <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div>
        </>
    );
}; 

export default Layout;