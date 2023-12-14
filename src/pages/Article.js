import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import Article2 from "./articles/Article2"
import Article1 from "./articles/Article1"
export function Article() {
    const [article, setArticle] = useState({})
    const [params] = useSearchParams()
    useEffect(() => {
      fetch("https://jpanwell-api.onrender.com/articles/get_one_article/" + params.get("id")).then(res => res.json()).then(data => {
        setArticle(data || {})
      }).catch(error => {})
    }, []);
    const searchArticle = [{title: "CHƯƠNG TRÌNH THIỆN NGUYỆN “CHIA SẺ CỘNG ĐỒNG” CỦA CÔNG TY CỔ PHẦN HIROKI – NHÃN HÀNG JPANWELL", content: <Article2/>},
                          {title: "CHƯƠNG TRÌNH TỪ THIỆN CÔNG TY CỔ PHẦN HIROKI ỦNG HỘ QUỸ PHÒNG CHỐNG COVID-19", content: <Article1/>}]
    return (
        <>         
          <div className="md:w-4/5 mx-auto px-[30px] mt-36 font-bold text-2xl">{article.title}</div>
          {article.date !== undefined && <div className="md:w-4/5 mx-auto px-[30px] pt-[30px] flex items-center text-sm"><AiOutlineClockCircle/><div className="ml-1.5">{article.date}</div></div> }
          {searchArticle.map(i =>
            article.title === i.title && <div className="w-4/5 mx-auto px-[30px] text-justify text-sm my-8">{i.content}</div>
          )}
        </>
    )
}

