import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function Search() {
    const [results, setResults] = useState([])
    const isFetch = useRef(false)
    const [params] = useSearchParams()
    useEffect(() => {
      fetch("https://jpanwell-api.onrender.com/products/get_products").then(res => res.json()).then(data => {
          setResults(data.filter(el => el.name.toLowerCase().includes(params.get("query").replaceAll("-", " "))) || [])
      }).then(isFetch.current = true).catch(error => {})
    }, []);
    return (
        <div className="w-[90%] md:w-1/2 mx-auto mb-4">
            <h1 className="mt-4 text-lg font-semibold">{"Tìm thấy " + results.length + " kết quả"}</h1>

                {!isFetch.current && <div className='mx-auto flex items-center justify-center'>
                <div className='h-8 w-8 border border-y-black border-l-black rounded-full animate-spin'></div>
                <div className='mx-2'></div>
                <div>Đang tải sản phẩm</div>
              </div>}
              <div>
                {results.map(i =>
                    <Link reloadDocument className="flex items-center h-40 pl-2 py-1" to={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")}>
                        <div className="h-full aspect-square flex justify-center items-center"><img src={"/thumbnails/" + i.thumbnail} className="h-4/5 mx-auto"></img></div>
                        <div className="font-semibold text-yellow-950">{i.name}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}
