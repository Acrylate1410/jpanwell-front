import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { Nav } from "./Nav";
import Hamburger from 'hamburger-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { useState, useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Link, useSearchParams } from "react-router-dom";
export function ProductDetails() {
  const [params] = useSearchParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    fetch("https://jpanwell-api.onrender.com/products/get_one_product/" + params.get("id")).then(res => res.json()).then(data => {
      setProduct(data[0] || {})
    }).catch(error => {})
  }, []);

  const send = (link) => {
    /*
    fetch("https://graph.facebook.com/v18.0/me/messages?access_token=EAAKjR99Lb3MBOwLdH9kU22wU1fZBbjoo1ZBrE6fn57i68ZBBHRVuWrPuYS5aLtT07I3N9tvvGD3OW7FxzIKQATwMjtxU9KgnFOoK5hfZBnK9Ym64L8vFRoQFcHqAsHOY54FmUI6LjxxA4PZBVqZABOQJwZBnr9Gkea33hg6ZC1NWSWsitomGCJDrkldH6CEw6FXfW73bAua0eusXczoma4iIbw0ZD", {
      method: "POST",
      body: JSON.stringify({
        recipient: {
          id: "135134239690741"
        },
        message :{
          text: link
        },
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    */
}

    return (
      <>
          <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span><Link to="/danh-muc-san-pham">Danh mục sản phẩm</Link></span><span className='mx-1'>|</span><span className="font-semibold">{product.name}</span></div>
          <div className="flex flex-col md:flex-row md:mt-8 justify-center">
            <div className="md:w-1/3 order-3 md:order-1">
              <SwiperComponent  slide1={product.slide1} slide2={product.slide2}/>
            </div>
            <div className="mx-8 order-2"></div>
            <div className=" md:w-1/3 mt-4 md:mt-8  md:order-3 order-1">
              <p className="text-sm md:mb-2 text-center md:text-start">Thực phẩm bảo vệ sức khỏe</p>
              <p className="text-2xl font-semibold md:border-b border-black w-3/5 pb-2 text-center md:text-start mx-auto md:mx-0">{product.name}</p>
              <div className="mt-4 hidden md:block">
                {product.function && product.function.map(i =>
                        <div className="flex items-start mb-2">
                          <div className="w-[3%]"><GiCheckMark className="text-sm mt-2"/></div>
                          <span className="ml-2">{i}</span>
                        </div>
                        )
                }
                <Link to="https://m.me/1436968196580581" onClick={() => send(product.link)} className='w-fit mt-6 py-2 px-2 md:px-4 bg-[#d9cbb0] text-yellow-900 font-semibold transition hover:text-white mb-4 rounded-lg flex items-center justify-center'>
                  <PiShoppingCartSimpleThin className="text-lg"/>
                  <div className="mx-1"></div>
                  <div className="text-xs md:text-sm">Liên hệ để mua hàng</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-8">
            <Link to="m.me/1436968196580581" onClick={() => send(product.link)} className='md:hidden w-full mt-6 py-2 px-2 md:px-4 bg-[#d9cbb0] transition text-white mb-4 flex items-center justify-center'>
              <PiShoppingCartSimpleThin className="text-lg"/>
              <div className="mx-1"></div>
              <div className="text-xs md:text-sm">Liên hệ để mua hàng</div>
            </Link>
          </div>
          <div className="w-4/5 mx-auto mt-4  md:hidden ">
              <div className="border-b border-black mx-auto flex justify-between py-2">
                  <div className="font-semibold uppercase">Công dụng của sản phẩm</div>
                </div>
                <div className="mt-2">
                  {product.function && product.function.map(i =>
                        <div className="flex items-start mb-2">
                          <div className="w-[3%]"><GiCheckMark className="text-sm mt-1 md:mt-2"/></div>
                          <span className="ml-2">{i}</span>
                        </div>
                    )
                  }
              </div>
              </div>
          <div className="w-4/5 mx-auto mt-4 mb-8 text-justify">
            <div className="border-b border-black mx-auto flex justify-between py-2">
              <div className="font-semibold uppercase">Thành phần</div>
            </div>
            <div className="text-[15px] mt-2">
                <span className="font-semibold">Thành phần chính </span>
                <span>{product.ingredients && product.ingredients.replace("Thành phần chính", "")}</span>
            </div>
            <div className="border-b border-black mx-auto flex justify-between py-2">
              <div className="font-semibold uppercase">Hướng dẫn sử dụng</div>
            </div>
            <div className="text-[15px] mt-2">
                  <p><span className="font-semibold">Hướng dẫn sử dụng: </span><span>{product.instruction}</span></p>
                  <p><span className="font-semibold">Đối tượng: </span><span>{product.subject}</span></p>
                  <p><span className="font-semibold">Bảo quản: </span><span>{product.preserve}</span></p>
                  <p><span className="font-semibold">Thông tin cảnh báo:</span></p>
                  {product.warnings && product.warnings.map(i =>
                    <>
                      <p>{"- " + i}</p>
                    </>  
                  )}
                  
            </div>
            <div className="border-b border-black mx-auto flex justify-between py-2">
              <div className="font-semibold uppercase">Thông tin sản phẩm</div>
            </div>
            <div className="text-[15px] mt-2">
                  <p><span className="font-semibold">Trọng lượng: </span><span>{product.mass}</span></p>
                  <p><span className="font-semibold">Ngày sản xuất: : </span><span>{product.productionDate}</span></p>
                  <p><span className="font-semibold">Hạn sử dụng: </span><span>{product.expirationDate}</span></p>
                  <p><span className="font-semibold">Nhà sản xuất: </span><span>{product.factory}</span></p>
                  <p><span className="font-semibold">Địa chỉ: </span><span>{product.address}</span></p>
            </div>
          </div>
          </>
    )
  };

  function SwiperComponent(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full aspect-square  shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)] border border-gray-300 !hidden md:!block"
      >
        <SwiperSlide className="w-full !flex items-center justify-center h-full">
          <img src={"slides2/" + props.slide1} className="h-[75%]"/>
        </SwiperSlide>
        <SwiperSlide className="w-full !flex items-center justify-center h-full">
          <img src={"slides2/" + props.slide2}  className="h-[75%]"/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)] w-full aspect-[4/1]  !hidden md:!block"
      >
        <SwiperSlide className="w-full !flex items-center justify-center h-full">
          <img src={"slides2/" + props.slide1} className="h-[75%]"/>
        </SwiperSlide>
        <SwiperSlide className="w-full !flex items-center justify-center h-full">
          <img src={"slides2/" + props.slide2} className="h-[75%]"/>
        </SwiperSlide>
      </Swiper>



      <Swiper pagination={true} modules={[Pagination]} className="mySwiper  w-full aspect-square  shadow-[0_10px_10px_-10px_rgba(0,0,0,0.3)] md:!hidden">
        <SwiperSlide className="w-full !flex items-center justify-center h-full">
          <img src={"slides2/" + props.slide1} className="h-[75%]"/>
        </SwiperSlide>
        <SwiperSlide className="w-full !flex items-center justify-center h-full">
          <img src={"slides2/" + props.slide2} className="h-[75%]"/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
  