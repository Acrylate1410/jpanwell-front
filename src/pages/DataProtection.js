import { Link } from "react-router-dom";

export function DataProtection() {
    return (
        <>
        {/*
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Chính sách bảo mật</span></div>
                <div className="mt-8 text-justify mx-8 md:w-1/2 md:mx-auto mb-12">
                    <p className="font-bold text-2xl text-center">Chính sách bảo mật</p>
                    <p className="mt-4 font-semibold">1. Mục đích, phạm vi thu thập thông tin</p>
                    <p>JpanWell chỉ thu thập thông tin liên lạc cần thiết 
                        để thực hiện giao dịch giữa website với khách hàng mà không lấy thêm thông tin gì khác. 
                        Thông tin của khách hàng sẽ chỉ được lưu lại khi khách hàng tạo tài khoản và đăng nhập với tài khoản của mình. 
                        JpanWell thu thập và sử dụng thông tin cá nhân của khách hàng với mục đích phù hợp và hoàn toàn tuân thủ theo pháp luật. 
                        JpanWell cam kết không chia sẻ hay sử dụng thông tin cá nhân của khách hàng cho một bên thứ 3 nào khác với mục đích lợi nhuận. 
                        Thông tin của khách hàng sẽ chỉ được sử dụng trong nội bộ JpanWell. 
                        Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với khách hàng dưới các hình thức như: gửi thư, đơn đặt hàng, thư cảm ơn. 
                        Khách hàng có thể nhận được thư định kỳ cung cấp thông tin sản phẩm, dịch vụ mới, thông tin về các chương trình khuyến mãi. 
                        Khi khách hàng đăng kí trên website jpanwell.com, những thông tin chúng tôi thu thập bao gồm:</p>
                    <p>• Tên</p>
                    <p>• Địa chỉ giao hàng</p>
                    <p>• Số điện thoại</p>
                    <p>• Ngày sinh</p>
                    <p>• Giới tính</p>
                    <p>• Những thông tin khác (nếu có).</p>
                    <p className="mt-4 font-semibold">2. Phạm vi sử dụng thông tin</p>
                    <p>Những thông tin trên chỉ được sử dụng cho những mục đích sau đây:</p>
                    <p>• Giao hàng cho các đơn hàng được đặt mua trên website jpanwell.com</p>
                    <p>• Thông báo giao hàng và hỗ trợ khách hàng</p>
                    <p>• Cung cấp thông tin sản phẩm</p>
                    <p>• Xử lý đơn đặt hàng và cung cấp dịch vụ của chúng tôi theo yêu cầu của khách hàng</p>
                    <p>• Chia sẻ cho dịch vụ chuyển phát nhanh để giao hàng</p>
                    <p>Ngoài ra, chúng tôi sẽ sử dụng thông tin của khách hàng trong việc quản lý tài khoản, giao dịch tài chính, kiểm tra dữ liệu để cải thiện tính năng của website jpanwell.com nhằm mang đến cho khách hàng những trải nghiệm tốt nhất khi ghé thăm website của chúng tôi.</p>
                    <p>Chi tiết đơn hàng của khách hàng sẽ được giữ bảo mật và chỉ được cung cấp cho chủ đơn hàng. Chúng tôi có quyền không cung cấp thông tin nếu khách hàng không cung cấp chính xác thông tin xác nhận theo yêu cầu từ JpanWell. Khách hàng có thể theo dõi đơn hàng của mình trong tài khoản của mình và bảo đảm không cho bên thứ 3 biết thông tin. Chúng tôi sẽ không chịu trách nhiệm về việc khách hàng nhập sai mật khẩu trừ khi đó là lỗi từ phía chúng tôi.</p>
                    <p className="mt-4 font-semibold">3. Thời gian lưu trữ thông tin</p>
                    <p>Thông tin của khách hàng sẽ được giữ đúng trong thời hạn pháp luật quy định hoặc chỉ sử dụng cho mục đích mà thông tin đó được thu thập.</p>
                    <p className="mt-4 font-semibold">4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân của khách hàng</p>
                    <p>Khách hàng đồng ý rằng, trong trường hợp cần thiết, các cơ quan/ tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân của mình, bao gồm:</p>
                    <p>• Ban quản trị, nhân viên Công ty Cổ phần Hiroki</p>
                    <p>• Bên thứ ba có dịch vụ tích hợp với website jpanwell.com</p>
                    <p>• Đơn vị vận chuyển liên kết với Công ty để giao hàng cho khách hàng</p>
                    <p>• Cố vấn tài chính, pháp lý và Công ty kiểm toán</p>
                    <p>• Bên khiếu nại chứng minh được hành vi vi phạm của khách hàng</p>
                    <p>• Theo yêu cầu của cơ quan nhà nước có thẩm quyền</p>
                    <p className="mt-4 font-semibold">5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân</p>
                    <p>• Đơn vị: Công ty cổ phần Hiroki</p>
                    <p>• Địa chỉ: 58 Kim Mã, P. Kim Mã, Q. Ba Đình, TP. Hà Nội</p>
                    <p>• Hotline miễn phí: 098 319 1166</p>
                    <p>• Email: hiroki.jsc@gmail.com</p>
                    <p className="mt-4 font-semibold">6. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</p>
                    <p>Bất cứ thời điểm nào khách hàng cũng có thể truy cập và chỉnh sửa những thông tin cá nhân của mình theo các bước hướng dẫn thích hợp mà chúng tôi cung cấp.</p>
                    <p className="mt-4 font-semibold">7. Cam kết bảo vệ thông tin cá nhân khách hàng</p>
                    <p>JpanWell luôn đảm bảo rằng mọi thông tin cá nhân của khách hàng sẽ được lưu giữ an toàn. Ngoại trừ các trường hợp về việc sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông tin cá nhân khách hàng ra ngoài vì mục đích thương mại. Chúng tôi có thể tiết lộ hoặc cung cấp thông tin cá nhân của khách hàng trong các trường hợp thật sự cần thiết như sau:</p>
                    <p>• Khi có yêu cầu của cơ quan pháp luật</p>
                    <p>• Trong trường hợp mà điều đó giúp chúng tôi bảo vệ quyền lợi chính đáng của mình trước pháp luật</p>
                    <p>• Tình huống khẩn cấp và cần thiết để bảo đảm quyền an toàn cá nhân của các thành viên khác</p>
                    <p className="mt-4 font-semibold">8. Cơ chế tiếp nhận và giải quyết khiếu nại liên quan đến việc thông tin của khách hàng</p>
                    <p>Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc phạm vi, khách hàng gửi email khiếu nại đến email hiroki.jsc@gmail.com hoặc gọi điện thoại tới số 098 319 1166 để khiếu nại và cung cấp chứng cứ liên quan tới vụ việc cho Ban quản trị. Ban quản trị cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là trong vòng 24 giờ làm việc kể từ thời điểm nhận được khiếu nại.</p>
                </div>
        */}
        </>
    )
}