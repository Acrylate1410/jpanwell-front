import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function News() {
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
      fetch("https://jpanwell-api.onrender.com/articles/get_articles").then(res => res.json()).then(data => {
          setArticleList(data || [])
      })
    }, []);
    return (
      <>
        <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Tin tức</span></div>
        <div className="mt-8 mb-6">
            {articleList.length === 0 ?
              <div className='mx-auto flex items-center justify-center'>
                <div className='h-8 w-8 border border-y-black border-l-black rounded-full animate-spin'></div>
                <div className='mx-2'></div>
                <div>Đang tải tin tức</div>
              </div>
            : articleList.map(i =>
              <Link to={i.link ? i.link : "/bai-viet?id=" + i._id} className="flex flex-col justify-center items-center md:items-start md:flex-row mb-12 md:mx-32">
                  <div className="w-[90vw] md:w-1/3 h-48 md:mr-8"><img alt={i.title} src={i.thumbnail} className="w-full h-full object-cover"></img></div>
                  <div className="w-[90vw] mt-3 md:mt-0 md:w-3/5">
                    <p className="font-bold text-justify uppercase">{i.title}</p>
                    <p className="my-2"></p>
                    <p className="text-justify text-sm">{i.description}</p>
                  </div>
              </Link>  
            )}
        </div>
        </>
    )
}
