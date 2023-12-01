import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Product } from './Product';
function ImageEffect() {
  const [isHover, setHover] = useState(false)
  return (

    <Swiper 
        slidesPerView={1} autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30} pagination={{clickable: true,}} modules={[Autoplay, Pagination]} className='mt-32 !w-full'>
              <SwiperSlide>
              
                <img className='w-full' src="banner.png"></img>
              </SwiperSlide>
              <SwiperSlide>
              <img className='w-full scale-[0.8]' src="nmn.png"></img>
              </SwiperSlide>
      </Swiper>
      
  )
}
export function Home() {
    return (
        <div className="relative">
          <ImageEffect/>
          <div className='mt-8 md:mt-12 overflow-y-hidden'>
              <img className='' src="banner2.png"></img>
          </div>
          <section className='w-full scroll-m-20  mt-6 '>
            <div className='flex justify-center items-center mx-4 md:mx-44'>
                    <div className='h-1 flex-1 border-b border-yellow-950'></div>
                    <h2 className='font-semibold text-xl md:text-3xl text-center my-8 mx-4  text-yellow-950'>Sản phẩm yêu thích</h2>
                    <div className='h-1 flex-1 border-b border-yellow-950'></div>
                </div>
            <div className='md:flex md:justify-between md:items-center mx-8 flex-wrap'>
              <ProductTN/>
              <ProductSwiper/>
            </div>
          </section>
          <section className='w-full scroll-m-20  mt-8'>
              <div className='flex justify-center items-center mx-4 md:mx-44'>
                  <div className='h-1 flex-1 border-b border-yellow-950'></div>
                  <h2 className='font-semibold text-xl md:text-3xl text-center my-8 mx-4  text-yellow-950'>Tin tức</h2>
                  <div className='h-1 flex-1 border-b border-yellow-950'></div>
              </div>
              <ArticleSwiper/>
              <Link to="/tin-tuc" className='block w-fit mx-auto'>
                <button className='mt-4 mb-12 text-sm w-36 h-9 rounded-full flex items-center justify-center border border-gray-500 hover:scale-105 transition '>
                        Xem thêm tin tức   
                </button>
              </Link>
          </section>
      </div>
    )
  };

function ProductTN() {
    const [img, setImg] = useState("2G9A8251.jpg")
    return(
      <div className='md:w-1/3 aspect-square'>
        <img src={img} className='w-full h-full' onMouseEnter={() => setImg("z4911505159452_0cee79c665cdd670d36a365602ff21d1.jpg")} onMouseLeave={() => setImg("2G9A8251.jpg")}></img>
      </div>
    )
}

function ProductSwiper() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch("https://jpanwell-api.onrender.com/products/get_favorites").then(res => res.json()).then(data => {
        setProducts(data || [])
      }).catch(error => {})
    }, []);
    return (
      <Swiper 
        breakpoints={{
          0: {
            slidesPerView: 2,
          }, 
          768: {
            slidesPerView: 3,
          },
        }} spaceBetween={30} navigation={true} modules={[Navigation]} className='products md:!w-2/3 !w-full'>
            {products.map(i => 
              <SwiperSlide>
                <Product src={i.thumbnail} name={i.name} isLiked={i.isLiked} link={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")}/>
              </SwiperSlide>
            )}
      </Swiper>
    )
}

function ArticleSwiper() {
  const [articleList, setArticleList] = useState([])
    useEffect(() => {
      fetch("https://jpanwell-api.onrender.com/articles/get_articles").then(res => res.json()).then(data => {
          setArticleList(data || [])
      }).catch(error => {})
    }, []);
    return (
      <Swiper 
          breakpoints={{
            0: {
              slidesPerView: 1,
            }, 
            768: {
              slidesPerView: 3,
            },
          }} spaceBetween={30} navigation={true} modules={[Navigation]} className='!mx-8 articles'>
        {articleList.map(i =>
          <SwiperSlide>
              <Link to={i.link ? i.link : "/article?id=" + i._id}>
                <img className='h-52 w-full object-cover' alt={i.title} src={i.thumbnail}></img>
                <p className='font-bold mt-4 text-justify uppercase'>{i.title}</p>
                <p className='mt-4 text-sm text-justify'>{i.description}</p>
              </Link>
          </SwiperSlide>
        )}
      </Swiper>
    )
}

  
  

