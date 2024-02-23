import { Product } from './Product';
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
export default function Products() {
    const [products, setProducts] = useState([])
    const [isHover, setHover] = useState("hidden")
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("Tên sản phẩm từ A-Z")
    const [params] = useSearchParams()
    useEffect(() => {
      if (params.get("type") === "suc-khoe") {
        setFilter("Sức khỏe")
      } else if (params.get("type") === "lam-dep") {
        setFilter("Làm đẹp")
      }
      fetch("https://jpanwell-api.onrender.com/products/get_products").then(res => res.json()).then(data => {
        setProducts(data || [])
      }).catch(error => {})
    }, []);
    const changeOrder = (e) => {
        if (e === "Tên sản phẩm từ A-Z") {
          setSort("Tên sản phẩm từ A-Z")
          setFilter("")
        } else if (e === "Tên sản phẩm từ Z-A") {
          setSort("Tên sản phẩm từ Z-A")
          setFilter("")
        } else if (e === "Sản phẩm yêu thích"){
          setSort("Tên sản phẩm từ A-Z")
          setFilter("Yêu thích")
        }
    }
    return (
        <>
          <div className='md:mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className='font-semibold'>Danh mục sản phẩm</span></div>
          <div className='md:flex mt-4'>
            
            <div className='md:w-1/5 md:ml-24 md:mb-8'>
              {[{text: "Sức khỏe", link: "suc-khoe"}, {text: "Làm đẹp", link: "lam-dep"}].map(i =>
                  <>
                    {filter !== i.text ? 
                      <Link reloadDocument to={"/danh-muc-san-pham?type=" + i.link} className='border-b border-gray-500 py-2 pl-6 md:pl-4 pr-4 md:pr-0 flex justify-between items-center cursor-pointer hover:scale-105 hover:font-medium md:mt-0 mt-2'>
                        <div>{i.text}</div>
                        <GoChevronRight className='text-2xl rotate-90 md:rotate-0'/>
                      </Link> 
                  :  
                  <div className='border-b border-gray-500 py-2 pl-6 md:pl-4 flex justify-between items-center cursor-pointer scale-105 font-medium md:mt-0 mt-2 pr-4 md:pr-0' onClick={() => setFilter(i.text)}>
                      <div>{i.text}</div>
                      <GoChevronRight className='text-2xl rotate-90 md:rotate-0'/>
                    </div>
                  }
                  </>
                )}
            </div>
            <div className='mx-8 md:w-4/5 mt-4 md:mt-0'>
              <div className="md:mr-4">
                <div className='flex items-center justify-end'>
                  <label for="orders" className='text-sm font-semibold text-yellow-950'>Sắp xếp theo</label>
                  <div className='mx-1'></div>         
                  <select onChange={(e) => {changeOrder(e.target.value)}} name="orders" id="orders" className='border py-1 border-gray-500 text-xs flex justify-between items-center outline-0 px-1'>
                    <option>Tên sản phẩm từ A-Z</option>
                    <option>Tên sản phẩm từ Z-A</option>
                    <option>Sản phẩm yêu thích</option>
                  </select>
                </div>
            </div>
            <div className='flex justify-between flex-wrap w-full mt-4 mb-6'>                
                {products.filter(el => {
                  if (filter === '') {
                    return true
                  } else if (filter === 'Yêu thích') {
                    return el.isLiked
                  }
                  return el.category === filter;
                }).sort((a, b) => {
                  if (sort === "Tên sản phẩm từ A-Z") {
                    if (a.name > b.name) {
                      return 1
                    } else {
                      return -1
                    }
                  } else if (sort === "Tên sản phẩm từ Z-A") {
                    if (a.name > b.name) {
                      return -1
                    } else {
                      return 1
                    }
                  }
                }).map(i => <Product src={i.thumbnail} name={i.name} isLiked={i.isLiked} link={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")}/>)}
            </div>
          </div>
          </div>
        </>
    )
}