import { Link } from "react-router-dom";

export function Return() {
    return (
        <>
            <div className='mt-[120px] md:mt-36 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Chính sách đổi trả</span></div>
            <div className="mt-8 text-justify mx-8 md:w-1/2 md:mx-auto mb-12">
                <p className="font-bold text-2xl text-center">Chính sách đổi trả hàng</p>
                <p className="mt-4">Chúng tôi thành thật xin lỗi nếu sản phẩm hay dịch vụ của chúng tôi làm qúy khách không hài lòng. Tất nhiên, để khắc phục những thiếu sót đó, chúng tôi rất vui vẻ chấp nhận và thực hiện đổi trả hàng miễn phí, hoàn tiền 100% cho quý khách thuộc những trường hợp sau :</p>

                <p>1. Sản phẩm không đúng đơn đặt hàng của quý khách.</p>

                <p>2. Sản phẩm có hình dạng, đặc điểm không giống như mô tả trên website JPANWELL.COM.</p>

                <p>3. Sản phẩm không rõ hạn sử dụng, chữ in trên sản phẩm, bao bì bị mờ, nhòe.</p>

                <p>4. Sản phẩm bị hư hỏng, phá hủy hoặc có dấu hiệu qua sử dụng trước khi quý khách nhận hàng.</p>

                <p>5. Quý khách thay đổi nhu cầu, muốn đổi qua sản phẩm khác hoặc không tiếp tục mua hàng nữa.</p>

                <p className="font-semibold mt-4">I. Thời gian trả hàng và hoàn tiền</p>

                <p>Thời gian trả hàng : 30 ngày kể từ ngày ghi trên hóa đơn.</p>
                <p>Thời gian hoàn tiền : 1-2 ngày sau khi chúng tôi nhận được hàng trả về.</p>
                <p className="font-semibold mt-4">II. Quy trình đổi trả hàng</p>

                <p className="font-semibold">Bước 1: Gửi hàng về kho</p>

                <p>– Đối với KH ở các quận trung tâm của TPHCM (gồm Quận 1,2,3,4,5,6,7,8,9,10,11,12, Tân Bình, Bình Thành, Gò Vấp, Phú Nhuận    ), nhân viên chúng tôi sẽ đến tân nơi để thu hồi sản phẩm cho quý khách.</p>

                <p>– Đối với KH không thuộc những khu vực trên, quý khách vui lòng từ chối nhận hàng với bưu tá hoặc gửi trả hàng theo địa chỉ trên bưu kiện.</p>

                <p>* Quý khách vui lòng ghi rõ họ tên, số điện thoại để nhân viên chúng tôi xác minh và liên lạc lại.</p>
                <p>Chúng tôi sẽ hoàn phí gửi trả hàng của quý khách vào số tiền hoàn lại hoặc giảm giá vào hóa đơn mới của quý khách. Thời gian gửi trả hàng vào khoảng 3- 4 ngày.</p>

                <p className="font-semibold">Bước 2: Đánh giá tình trạng hàng hóa và kiểm tra thông tin</p>

                <p>Sau khi nhận được hàng gửi trả, chúng tôi sẽ tiến hành đánh giá tình trạng hàng hóa, ghi vào biên bản và chuyển giao cho bộ phận Chăm sóc khách hàng ( CSKH ). Bộ phận CSKH của chúng tôi sẽ liên lạc lại với quý khách để xác minh tình trạng hàng hóa, đổi trả hàng và hoàn tiền.</p>

                <p className="font-semibold">Bước 3: Đổi trả hàng và hoàn tiền</p>

                <p>Trường hợp đổi hàng: Nhân viên tư vấn sẽ liên lạc lại ngay với quý khách để tiến hành lên đơn hàng mới.</p>

                <p>Trường hợp hoàn tiền: Quý khách vui lòng cung cấp thông tin tài khoản ngân hàng (gồm : tên chủ tài khoản, số tài khoản, tên ngân hàng, chi nhánh) cho nhân viên CSKH. Ngay sau khi nhận được thông tin, chúng tôi sẽ hoàn tiền vào tài khoản cho quý khách trong vòng 1 -2 ngày.</p>

            </div>
        </>
    )
}