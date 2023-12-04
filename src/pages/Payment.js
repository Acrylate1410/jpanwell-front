import { Link } from "react-router-dom";

export function Payment() {
    return (
        <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Chính sách thanh toán</span></div>
            <div className="mt-8 text-justify mx-8 md:w-1/2 md:mx-auto mb-12">
                <p className="font-bold text-2xl text-center">Chính sách thanh toán</p>
                <p className="mt-4">Về thanh toán, có 2 cách. Quý khách có thể thanh toán cho JpanWell bằng các hình thức sau:</p>
                <p><span className="font-semibold">Thanh toán tại chỗ (Ship COD):</span> JpanWell sẽ gọi lại cho khách hàng để xin địa chỉ giao hàng tận nơi và nhận thanh toán tại chỗ.</p>
                <p><span className="font-semibold">Thanh toán qua thẻ ngân hàng:</span> Chấp nhận thanh toán nhiều thương hiệu và loại thẻ bao gồm thẻ ATM, thẻ Visa, MasterCard,...</p>
            </div>
        </>
    )
}