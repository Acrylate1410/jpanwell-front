import { Link } from "react-router-dom";

export function Delivery() {
    return (
            <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Chính sách giao hàng</span></div>
                <div className="mt-8 text-justify mx-8 md:w-1/2 md:mx-auto mb-12">
                    <p className="font-bold text-2xl text-center">Chính sách giao hàng</p>
                    <p className="mt-4">Miễn phí giao hàng toàn quốc</p>
                    <p className="font-semibold">Hình thức thanh toán, có 2 cách:</p>
                    <p><span className="font-semibold">Thanh toán tại chỗ (Ship COD):</span> JpanWell sẽ gọi lại cho khách hàng để xin địa chỉ giao hàng tận nơi và nhận thanh toán tại chỗ.</p>
                    <p><span className="font-semibold">Thanh toán qua thẻ ngân hàng:</span> Chấp nhận thanh toán nhiều thương hiệu và loại thẻ bao gồm thẻ ATM, thẻ Visa, MasterCard</p>
                </div>
        </>
    )
}