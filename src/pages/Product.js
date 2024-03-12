import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

export function Product(props) {
    const [isHover, setHover] = useState(false)
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
      <Link reloadDocument to={props.link} className='w-[45%] md:w-[30%] text-center relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div className='w-full h-56 flex justify-center items-center overflow-hidden relative'>
              <img src={"thumbnails/" + props.src} className="h-[75%]" alt={props.name}></img>
              {props.isLiked && (!isHover ? 
                <BsSuitHeart className="absolute right-0 md:right-12 top-4 text-gray-800"/> : 
                <BsSuitHeartFill className="absolute right-0 md:right-12 top-4"/>)
              }
          </div>
          <div className='font-semibold mt-2 h-9 md:h-6 text-sm md:text-base'>{props.name}<span></span></div>
          <div className="mb-2 md:mt-1 text-xs md:text-sm">Thực phẩm bảo vệ sức khỏe</div>
          <Link to="https://m.me/1436968196580581" className='w-fit py-2 px-2 md:px-4 bg-[#d9cbb0] text-yellow-900 hover:text-white transition font-semibold mb-4 rounded-lg flex items-center justify-center mx-auto' onClick={() => send(props.link)}>
            <PiShoppingCartSimpleThin className="text-lg"/>
            <div className="mx-1"></div>
            <div className="text-xs md:text-sm">Liên hệ để mua hàng</div>
          </Link>
      </Link>
    )
  }