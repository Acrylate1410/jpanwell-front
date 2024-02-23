import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Về JpanWell</span></div>
            <div className="mt-8 text-justify mx-8 md:w-1/2 md:mx-auto mb-12">
                <span className="font-semibold">Về JpanWell </span>
                <br></br>
                Trải qua với hơn 10 năm hoạt động, JpanWell tự hào khi trở thành một thương hiệu quen thuộc và tin cậy khi mang đến các sản phẩm Sức khỏe & Làm đẹp đến từ Nhật Bản. JpanWell cam kết mang đến những sản phẩm chất lượng với nguồn gốc xuất xứ rõ ràng, đảm bảo nguyên liệu đầu vào. Các sản phẩm của JpanWell luôn được nghiên cứu kỹ lưỡng bởi các chuyên gia tại Nhật Bản và được sản xuất trên dây chuyền công nghệ sản xuất hiện đại tại nhà máy đạt chuẩn GMP. Các sản phẩm đều 100% được nhập khẩu chính ngạch và được Bộ Y Tế thẩm định phê duyệt về chất lượng, đảm bảo an toàn cho người tiêu dùng. JpanWell đã, đang và sẽ không ngừng nỗ lực phát triển mỗi ngày để mang tới sự hài lòng cho Khách Hàng, các sản phẩm chất lượng và nhiều giá trị đạo đức đến cho cộng đồng. 
                <br></br>
                <div className="mt-2">
                <span className="font-semibold">Giá trị cốt lõi của JpanWell: </span>
                Tận tâm, Uy tín, Chất lượng
                </div>
                <div className="mt-2">
                    <span className="font-semibold">Sứ mệnh: </span>
                    “Vì sức khoẻ cộng đồng” là sứ mệnh mà JpanWell luôn luôn đề cao và hướng tới. Sức khỏe của cộng đồng được nâng cao là sự thành công nhất đối với chúng tôi.
                </div>
            </div>
        </>
    )
}