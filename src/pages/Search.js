import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
export function Search() {
    const [results, setResults] = useState([])
    const [params] = useSearchParams()
    let resultCount = 0
    useEffect(() => {
      fetch("https://jpanwell-api.onrender.com/products/get_products").then(res => res.json()).then(data => {
          setResults(data.filter(el => el.name.toLowerCase().includes(params.get("query").replaceAll("-", " "))) || [])
      }).catch(error => {})
    }, []);
    return (
        <div className="w-[90%] md:w-1/2 mx-auto">
            <h1 className="mt-4 text-lg font-semibold">{"Tìm thấy " + results.length + " kết quả"}</h1>
            {results.map(i =>
                <Link reloadDocument className="flex items-center h-40 pl-2 py-1" to={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")}>
                    <div className="h-full aspect-square flex justify-center items-center"><img src={"/thumbnails/" + i.thumbnail} className="h-4/5 mx-auto"></img></div>
                    <div className="font-semibold text-yellow-950">{i.name}</div>
                </Link>
            )}
        </div>
    )
}
