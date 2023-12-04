import { Link } from "react-router-dom";

export function DataProtection() {
    return (
        <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Chính sách xử lý dữ liệu cá nhân</span></div>
            <div className="mt-8 text-justify mx-8 md:w-1/2 md:mx-auto mb-12">
                <p className="font-bold text-2xl text-center">Chính sách xử lý dữ liệu cá nhân</p>
                <p className="mt-4">
                    Chính sách xử lý dữ liệu cá nhân (“Chính sách”) này được thực hiện bởi JpanWell, 
                    mô tả các hoạt động liên quan đến việc xử lý dữ liệu cá nhân của Khách hàng. 
                    Chính sách này là một phần không thể tách rời của các hợp đồng, thỏa thuận, điều khoản và điều kiện ràng buộc mối quan hệ giữa JpanWell và Khách hàng.
                </p>
                <p className="font-semibold mt-4">Điều 1. Đối tượng và phạm vi áp dụng</p>
                <p>Chính sách này điều chỉnh cách thức mà JpanWell xử lý dữ liệu cá nhân của Khách hàng và những người có liên quan đến Khách hàng theo các mối quan hệ do pháp luật yêu cầu phải xử lý dữ liệu hoặc người đồng sử dụng các sản phẩm/ dịch vụ của JpanWell với khách hàng khi sử dụng hoặc tương tác với trang tin điện tử hoặc/và các sản phẩm/ dịch vụ của JpanWell.
                    Để tránh nhầm lẫn, Chính sách bảo mật dữ liệu này chỉ áp dụng cho các Khách hàng cá nhân. JpanWell khuyến khích Khách hàng đọc kỹ Chính sách này và thường xuyên kiểm tra trang tin điện tử để cập nhật bất kỳ thay đổi nào mà JpanWell có thể thực hiện theo các điều khoản của Chính sách.
                </p>
                <p className="font-semibold mt-4">Điều 2. Giải thích từ ngữ</p>
                <p>2.1. “Khách hàng” là cá nhân tiếp cận, tìm hiểu, đăng ký, sử dụng hoặc có liên quan trong quy trình hoạt động, cung cấp các sản phẩm, dịch vụ của JpanWell.</p>
                <p>2.2. “JpanWell” là Công ty Cổ phần Hiroki, địa chỉ trụ sở chính: 58 Kim Mã, Phường Kim Mã, Quận Ba Đình, Thành phố Hà Nội, Việt Nam</p>
                <p>2.3. “Dữ liệu cá nhân” hay “DLCN” là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể.</p>
                <p>Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm.</p>
                <p>2.4. Dữ liệu cá nhân cơ bản bao gồm:</p>
                <p>(a) Họ, chữ đệm và tên khai sinh, tên gọi khác (nếu có);</p>
                <p>(b) Ngày, tháng, năm sinh; ngày, tháng, năm chết hoặc mất tích;</p>
                <p>(c) Giới tính;</p>
                <p>(d) Nơi sinh, nơi đăng ký khai sinh, nơi thường trú, nơi tạm trú, nơi ở hiện tại, quê quán, địa chỉ liên hệ;</p>
                <p>(e) Quốc tịch;</p>
                <p>(f) Hình ảnh của cá nhân;</p>
                <p>(g) Số điện thoại, số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe, số biển số xe, số mã số thuế cá nhân, số bảo hiểm xã hội, số thẻ bảo hiểm y tế;</p>
                <p>(h) Tình trạng hôn nhân;</p>
                <p>(i) Thông tin về mối quan hệ gia đình (cha mẹ, con cái);</p>
                <p>(j) Thông tin về tài khoản số của cá nhân; dữ liệu cá nhân phản ánh hoạt động, lịch sử hoạt động trên không gian mạng;</p>
                <p>(k) Các thông tin khác gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể không thuộc Dữ liệu cá nhân nhạy cảm.</p>
                <p>(l) Các dữ liệu khác theo quy định pháp luật hiện hành</p>
                <p>2.5. Dữ liệu cá nhân nhạy cảm dữ liệu cá nhân gắn liền với quyền riêng tư của cá nhân mà khi bị xâm phạm sẽ gây ảnh hưởng trực tiếp tới quyền và lợi ích hợp pháp của cá nhân gồm:</p>
                <p>(a) Quan điểm chính trị, quan điểm tôn giáo;</p>
                <p>(b) Tình trạng sức khỏe và đời tư được ghi trong hồ sơ bệnh án, không bao gồm thông tin về nhóm máu;</p>
                <p>(c) Thông tin liên quan đến nguồn gốc chủng tộc, nguồn gốc dân tộc;</p>
                <p>(d) Thông tin về đặc điểm di truyền được thừa hưởng hoặc có được của cá nhân;</p>
                <p>(e)Thông tin về thuộc tính vật lý, đặc điểm sinh học riêng của cá nhân;</p>
                <p>(f)Thông tin về đời sống tình dục, xu hướng tình dục của cá nhân;</p>
                <p>(g) Dữ liệu về tội phạm, hành vi phạm tội được thu thập, lưu trữ bởi các cơ quan thực thi pháp luật;</p>
                <p>(h) Thông tin khách hàng của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài, tổ chức cung ứng dịch vụ trung gian thanh toán, các tổ chức được phép khác, gồm: thông tin định danh khách hàng theo quy định của pháp luật, thông tin về tài khoản, thông tin về tiền gửi, thông tin về tài sản gửi, thông tin về giao dịch, thông tin về tổ chức, cá nhân là bên bảo đảm tại tổ chức tín dụng, chi nhánh ngân hàng, tổ chức cung ứng dịch vụ trung gian thanh toán;</p>
                <p>(i) Dữ liệu về vị trí của cá nhân được xác định qua dịch vụ định vị;</p>
                <p>(j) Dữ liệu cá nhân khác được pháp luật quy định là đặc thù và cần có biện pháp bảo mật cần thiết.</p>
                <p>2.6. Bảo vệ dữ liệu cá nhân: là hoạt động phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi vi phạm liên quan đến dữ liệu cá nhân theo quy định của pháp luật.</p>
                <p>2.7. Xử lý dữ liệu cá nhân: là một hoặc nhiều hoạt động tác động tới dữ liệu cá nhân, như: thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan.</p>
                <p>2.8. Bên thứ ba: là tổ chức, cá nhân khác ngoài JpanWell và Khách hàng đã được giải thích theo Chính sách này.</p>
                <p>Để làm rõ hơn, các từ ngữ nào chưa được giải thích tại Điều này sẽ được hiểu và áp dụng theo pháp luật Việt Nam.</p>
                <p>2.9. Kênh giao dịch JpanWell: gồm các kênh giao dịch điện tử (<Link reloadDocument to="/" className="text-blue-600">jpanwell.com</Link>; SĐT: 098 319 1166) hoặc các kênh giao dịch khác nhằm cung cấp sản phẩm/ dịch vụ hoặc để phục vụ nhu cầu của JpanWell và khách hàng.</p>
                
                <p className="font-semibold mt-4">Điều 3. Mục đích xử lý dữ liệu cá nhân của Khách hàng</p>
                <p>3.1. Khách hàng đồng ý cho phép JpanWell xử lý dữ liệu cá nhân của khách hàng cho một hoặc nhiều mục đích sau đây:</p>
                <p>(a) Cung cấp sản phẩm hoặc dịch vụ hoặc hỗ trợ khách hàng sử dụng các sản phẩm/ dịch vụ của Công ty và/ hoặc Đối tác của Công ty thông qua thỏa thuận hợp tác được Khách hàng yêu cầu;</p>
                <p>(b) Thực hiện các hoạt động nhằm chăm sóc khách hàng và thực hiện các chương trình hậu mãi sau bán hàng;</p>
                <p>(c) Điều chỉnh, cập nhật, bảo mật và cải tiến các sản phẩm, dịch vụ, ứng dụng, thiết bị mà JpanWell hoặc công ty con của JpanWell đang cung cấp cho Khách hàng;</p>
                <p>(d) Xác minh danh tính và đảm bảo tính bảo mật thông tin cá nhân của Khách hàng;</p>
                <p>(e) Đáp ứng các yêu cầu dịch vụ và nhu cầu hỗ trợ của Khách hàng;</p>
                <p>(f) Thông báo cho Khách hàng về những thay đổi đối với các chính sách, khuyến mại của các sản phẩm, dịch vụ mà Công ty đang cung cấp;</p>
                <p>(g) Đo lường, phân tích dữ liệu nội bộ và các xử lý khác để cải thiện, nâng cao chất lượng dịch vụ/sản phẩm của Công ty hoặc thực hiện các hoạt động truyền thông tiếp thị;</p>
                <p>(h) Tổ chức các hoạt động nghiên cứu thị trường, thăm dò dư luận nhằm cải thiện chất lượng sản phẩm/ dịch vụ hoặc để nghiên cứu phát triển các sản phẩm, dịch vụ mới nhằm đáp ứng tốt hơn nhu cầu của khách hàng;</p>
                <p>(i) Ngặn chặn và phòng chống gian lận, đánh cắp danh tính và các hoạt động bất hợp pháp khác;</p>
                <p>(j) Để có cơ sở thiết lập, thực thi các quyền hợp pháp hoặc bảo vệ các khiếu nại pháp lý của JpanWell, Khách hàng hoặc bất kỳ cá nhân nào. Các mục đích này có thể bao gồm việc trao đổi dữ liệu với các công ty và tổ chức khác để ngăn chặn và phát hiện gian lận, giảm rủi ro về tín dụng;</p>
                <p>(k) Tuân thủ pháp luật hiện hành, các tiêu chuẩn ngành có liên quan và các chính sách hiện hành khác của Công ty;</p>
                <p>(l) Bất kỳ mục đích nào khác dành riêng cho hoạt động vận hành của Công ty;</p>
                <p>(m) Bất kỳ mục đích nào khác mà JpanWell thông báo cho Khách hàng, vào thời điểm thu thập dữ liệu cá nhân của Khách hàng hoặc trước khi bắt đầu xử lý liên quan hoặc theo yêu cầu khác hoặc được pháp luật hiện hành cho phép; và</p>
                <p>3.2. JpanWell sẽ yêu cầu sự cho phép của Khách hàng trước khi sử dụng dữ liệu cá nhân của Khách hàng theo bất kỳ mục đích nào khác ngoài các mục đích đã được nêu tại Điều 3.1 trên, vào thời điểm thu thập dữ liệu cá nhân của Khách hàng hoặc trước khi bắt đầu xử lý liên quan hoặc theo yêu cầu khác hoặc được pháp luật hiện hành cho phép.</p>
                <p className="font-semibold mt-4">Điều 4. Bảo mật Dữ liệu cá nhân khách hàng</p>
                <p>4.1. Nguyên tắc bảo mật:</p>
                <p>(a) Dữ liệu cá nhân của Khách hàng được cam kết bảo mật theo quy định của JpanWell và quy định của pháp luật. Việc xử lý Dữ liệu cá nhân của mỗi Khách hàng chỉ được thực hiện khi có sự đồng ý của Khách hàng, trừ trường hợp pháp luật có quy định khác.</p>
                <p>(b) JpanWell không sử dụng, chuyển giao, cung cấp hay chia sẻ cho bên thứ ba nào về Dữ liệu cá nhân của Khách hàng khi không có sự đồng ý của Khách hàng, trừ trường hợp pháp luật có quy định khác.</p>
                <p>(c) JpanWell sẽ tuân thủ các nguyên tắc bảo mật dữ liệu cá nhân khác theo quy định pháp luật hiện hành.</p>
                <p>4.2. Hậu quả, thiệt hại không mong muốn có thể xảy ra:</p>
                <p>JpanWell sử dụng nhiều công nghệ bảo mật thông tin khác nhau nhằm bảo vệ Dữ liệu cá nhân của Khách hàng không bị truy lục, sử dụng hoặc chia sẻ ngoài ý muốn. Tuy nhiên, không một dữ liệu nào có thể được bảo mật 100%. Do vậy, JpanWell cam kết sẽ bảo mật một cách tối đa trong khả năng cho phép Dữ liệu cá nhân của Khách hàng. Một số hậu quả, thiệt hại không mong muốn có thể xảy ra bao gồm nhưng không giới hạn:</p>
                <p>(a) Lỗi phần cứng, phần mềm trong quá trình xử lý dữ liệu làm mất dữ liệu của Khách hàng;</p>
                <p>(b) Lỗ hổng bảo mật nằm ngoài khả năng kiểm soát của JpanWell, hệ thống có liên quan bị hacker tấn công gây lộ lọt dữ liệu;</p>
                <p>(c) Khách hàng tự làm lộ lọt dữ liệu cá nhân do: bất cẩn hoặc bị lừa đảo truy cập các website/tải các ứng dụng có chứa phần mềm độc hại, vv...</p>
                <p>4.3. JpanWell khuyến cáo Khách hàng bảo mật các thông tin liên quan đến mật khẩu đăng nhập vào tài khoản của Khách hàng, mã OTP và không chia sẻ mật khẩu đăng nhập, mã OTP này với bất kỳ người nào khác.</p>
                <p>4.4. Khách hàng nên bảo quản thiết bị điện tử trong quá trình sử dụng; Khách hàng nên khóa, đăng xuất, hoặc thoát khỏi tài khoản trên website hoặc Ứng dụng của JpanWell khi không sử dụng.</p>
                <p className="font-semibold mt-4">Điều 5. Các loại dữ liệu cá nhân mà JpanWell xử lý</p>

                <p>Để JpanWell có thể cung cấp các sản phẩm, dịch vụ cho Khách hàng và/hoặc xử lý các yêu cầu của Khách hàng, JpanWell có thể cần phải và/hoặc được yêu cầu phải thu thập dữ liệu cá nhân, bao gồm:</p>

                <p>(a) Dữ liệu cá nhân cơ bản của Khách hàng và các cá nhân có liên quan của Khách hàng; và,</p>

                <p>(b) Dữ liệu cá nhân nhạy cảm của Khách hàng và các cá nhân có liên quan của Khách hàng;</p>

                <p>(c) Dữ liệu liên quan đến các trang tin điện tử hoặc ứng dụng: dữ liệu kỹ thuật (như đã nêu ở trên, bao gồm loại thiết bị, hệ điều hành, loại trình duyệt, cài đặt trình duyệt, địa chỉ IP, cài đặt ngôn ngữ, ngày và giờ kết nối với trang tin điện tử, thống kê sử dụng ứng dụng, cài đặt ứng dụng, ngày và giờ kết nối với ứng dụng, dữ liệu vị trí và thông tin liên lạc kỹ thuật khác); chi tiết đăng nhập bảo mật; dữ liệu sử dụng, ...</p>

                <p>(d) Dữ liệu tiếp thị: các mối quan tâm đối với quảng cáo; dữ liệu cookie; dữ liệu clickstream; lịch sử duyệt web; phản ứng với tiếp thị trực tiếp; và lựa chọn không tham gia tiếp thị trực tiếp.</p>


                <p className="font-semibold mt-4">Điều 6. Cách thức thu thập dữ liệu cá nhân</p>

                <p>JpanWell thực hiện thu thập dữ liệu cá nhân từ Khách hàng theo các phương thức sau:</p>

                <p>6.1. Trực tiếp từ Khách hàng bằng các phương tiện khác nhau:</p>

                <p>(a) Khi Khách hàng gửi yêu cầu đăng ký hoặc điền thông tin vào bất kỳ biểu mẫu nào khác liên quan tới các sản phẩm và dịch vụ của JpanWell, đối tác của JpanWell;</p>
                <p>(b) Khi Khách hàng tương tác với nhân viên dịch vụ khách hàng của Công ty, ví dụ như thông qua các cuộc gọi điện thoại, thư từ, gặp mặt trực tiếp, gửi thư điện tử hoặc tương tác trên mạng xã hội;</p>
                <p>(c) Khi Khách hàng sử dụng một số dịch vụ của JpanWell, ví dụ như các trang web và ứng dụng bao gồm việc thiết lập các tài khoản trực tuyến với JpanWell;</p>
                <p>(d) Khi Khách hàng được liên hệ và phản hồi lại các đại diện tiếp thị và các nhân viên dịch vụ khách hàng của JpanWell;</p>
                <p>(e) Khi Khách hàng gửi thông tin cá nhân của mình cho Công ty vì bất kỳ lý do nào khác, bao gồm cả khi Khách hàng đăng ký sử dụng thử miễn phí bất kỳ sản phẩm và dịch vụ nào hoặc khi Khách hàng thể hiện quan tâm đến bất kỳ sản phẩm và dịch vụ nào của Công ty.</p>
                <p>(f) Khi Khách hàng mua hoặc sử dụng các dịch vụ của bên thứ ba thông qua JpanWell hoặc tại các điểm giao dịch, cơ sở kinh doanh của JpanWell;</p>
                <p>6.2. Từ các bên thứ ba khác:</p>

                <p>(a) Nếu Khách hàng tương tác với nội dung hoặc quảng cáo của bên thứ ba trên trang tin điện tử hoặc trong ứng dụng, Công ty có thể nhận được thông tin cá nhân của Khách hàng từ bên thứ ba có liên quan, theo chính sách bảo mật hiện hành hợp pháp của bên thứ ba đó.</p>
                <p>(b) Nếu Khách hàng chọn thanh toán điện tử trực tiếp tới JpanWell hoặc thông qua trang tin điện tử hoặc ứng dụng, JpanWell có thể nhận được dữ liệu cá nhân của Khách hàng từ các bên thứ ba, chẳng hạn như nhà cung cấp dịch vụ thanh toán, cho mục đích thanh toán đó.</p>
                <p>(c) Để tuân thủ các nghĩa vụ của mình theo luật hiện hành, JpanWell có thể tiếp nhận dữ liệu cá nhân về Khách hàng từ các cơ quan pháp luật và cơ quan công quyền theo quy định pháp luật.</p>
                <p>(d) JpanWell có thể tiếp nhận được dữ liệu cá nhân về Khách hàng từ các nguồn công khai (như danh bạ điện thoại, thông tin quảng cáo/tờ rơi, các thông tin được công khai trên các trang tin điện tử, v.v.).</p>
                <p>Bất cứ khi nào thu thập dữ liệu cá nhân như vậy, JpanWell sẽ đảm bảo việc nhận dữ liệu từ các bên thứ ba có liên quan theo những cách hợp pháp, đồng thời yêu cầu các bên thứ ba đó chịu trách nhiệm tuân thủ quy định của pháp luật về bảo vệ dữ liệu cá nhân.</p>
                <p className="font-semibold mt-4">Điều 7. Tổ Chức Được Xử Lý Dữ Liệu Cá Nhân</p>
                <p>7.1. Công ty Cổ phần Hiroki.</p>
                <p>7.2. JpanWell sẽ thực hiện việc chia sẻ hoặc cùng xử lý dữ liệu cá nhân với các tổ chức, cá nhân sau:</p>
                <p>a) Các nhà thầu, đại lý, đối tác, các nhà cung cấp dịch vụ vận hành của JpanWell.</p>
                <p>b) Các chi nhánh, đơn vị kinh doanh và các cán bộ nhân viên làm việc tại các chi nhánh, đơn vị kinh doanh, đại lý của JpanWell.</p>
                <p>c) Các doanh nghiệp kinh doanh viễn thông trong trường hợp Khách hàng vi phạm nghĩa vụ thanh toán cước dịch vụ.</p>
                <p>d) Các cửa hàng thương mại và nhà bán lẻ liên quan tới việc thực hiện các chương trình khuyến mại của JpanWell.</p>
                <p>e) Các cố vấn chuyên nghiệp của JpanWell. như kiểm toán, luật sư,… theo quy định của pháp luật.</p>
                <p>f) Tòa án, các cơ quan nhà nước có thẩm quyền phù hợp với quy định của pháp luật và/hoặc khi được yêu cầu và pháp luật cho phép.</p>
                <p>7.3. JpanWell cam kết việc chia sẻ hoặc cùng xử lý dữ liệu cá nhân chỉ thực hiện trong trường hợp cần thiết để thực hiện các Mục Đích Xử Lý được nêu tại Chính sách này hoặc theo quy định của pháp luật. Các tổ chức, cá nhân nhận được dữ liệu cá nhân của Khách hàng sẽ phải tuân thủ theo nội dung quy định tại Chính sách này và quy định của pháp luật về bảo vệ dữ liệu cá nhân liên quan.</p>
                <p>Mặc dù JpanWell sẽ thực hiện mọi nỗ lực để đảm bảo rằng các thông tin Khách hàng được ẩn danh/mã hóa, nhưng không thể loại trừ hoàn toàn rủi ro các dữ liệu này có thể bị tiết lộ trong những trường hợp bất khả kháng.</p>

                <p>7.4. Trong trường hợp có sự tham gia của các tổ chức xử lý dữ liệu cá nhân khác được nêu tại Điều này, Khách hàng đồng ý JpanWell sẽ thông báo cho Khách hàng trước khi JpanWell thực hiện.</p>


                <p className="font-semibold mt-4">Điều 8. Xử lý dữ liệu cá nhân trong một số trường hợp đặc biệt</p>

                <p>JpanWell đảm bảo thực hiện xử lý dữ liệu cá nhân của Khách hàng đáp ứng đầy đủ các yêu cầu của Pháp luật trong các trường hợp đặc biệt nêu sau:</p>

                <p>8.1. Đoạn phim của máy quay giám sát (CCTV), trong trường hợp cụ thể, cũng có thể được sử dụng cho các muc đích sau đây:</p>

                <p>(a) cho các mục đích đảm bảo chất lượng;</p>
                <p>(b) cho mục đích an ninh công cộng và an toàn lao động;</p>
                <p>(c) phát hiện và ngăn chặn việc sử dụng đáng ngờ, không phù hợp hoặc không được phép của các tiện ích, sản phẩm, dịch vụ và/hoặc cơ sở của Công ty;</p>
                <p>(d) phát hiện và ngăn chặn hành vi phạm tội; và/hoặc</p>
                <p>(e) tiến hành điều tra các sự cố.</p>
                <p>8.2 JpanWell luôn tôn trọng và bảo vệ dữ liệu cá nhân của trẻ em. Ngoài các biện pháp bảo vệ dữ liệu cá nhân được quy định theo pháp luật, trước khi xử lý dữ liệu cá nhân của trẻ em, Công ty sẽ thực hiện xác minh tuổi của trẻ em và yêu cầu sự đồng ý của (i) trẻ em và/hoặc (ii) cha, mẹ hoặc người giám hộ của trẻ em theo quy định của pháp luật.</p>

                <p>8.3. Bên cạnh tuân thủ theo các quy định pháp luật có liên quan khác, đối với việc xử lý dữ liệu cá nhân liên quan đến dữ liệu cá nhân của người bị tuyên bố mất tích/ người đã chết, Công ty sẽ phải được sự đồng ý của một trong số những người có liên quan theo quy định của pháp luật hiện hành.</p>


                <p className="font-semibold mt-4">Điều 9. Quyền và nghĩa vụ của Khách hàng liên quan đến dữ liệu cá nhân cung cấp cho JpanWell</p>

                <p>9.1. Quyền của khách hàng</p>

                <p>(a) Khách hàng có quyền được biết về hoạt động xử lý dữ liệu cá nhân của mình, trừ trường hợp pháp luật có quy định khác.</p>
                <p>(b) Khách hàng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                <p>(c) Khách hàng được quyền truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa Dữ liệu cá nhân của mình bằng văn bản gửi đến JpanWell, trừ trường hợp luật có quy định khác.</p>
                <p>(d) Khách hàng có quyền rút lại sự đồng ý của mình bằng văn bản gửi đến JpanWell, trừ trường hợp pháp luật có quy định khác.</p>
                <p>Việc rút lại sự đồng ý không ảnh hưởng đến tính hợp pháp của việc xử lý dữ liệu đã được Khách hàng đồng ý với JpanWell trước khi rút lại sự đồng ý.</p>

                <p>(e) Khách hàng được quyền xóa hoặc yêu cầu xóa dữ liệu cá nhân của mình bằng văn bản gửi đến JpanWell, trừ trường hợp luật có quy định khác.</p>
                <p>(f) Khách hàng được quyền yêu cầu hạn chế xử lý Dữ liệu cá nhân của mình bằng văn bản gửi đến JpanWell, trừ trường hợp luật có quy định khác.</p>
                <p>Việc hạn chế xử lý dữ liệu sẽ được JpanWell thực hiện trong 72 giờ sau khi có yêu cầu của Khách hàng, với toàn bộ Dữ liệu cá nhân mà Khách hàng yêu cầu hạn chế, trừ trường hợp pháp luật có quy định khác.</p>

                <p>(g) Khách hàng được quyền yêu cầu JpanWell cung cấp cho bản thân Dữ liệu cá nhân của mình bằng văn bản gửi đến JpanWell, trừ trường hợp luật có quy định khác.</p>
                <p>(h) Khách hàng được quyền phản đối JpanWell, Tổ Chức Được Xử Lý Dữ Liệu Cá Nhân quy định tại Chính sách này xử lý dữ liệu cá nhân của mình bằng văn bản gửi đến JpanWell nhằm ngăn chặn hoặc hạn chế việc tiết lộ DLCN hoặc sử dụng DLCN cho mục đích quảng cáo, tiếp thị, trừ trường hợp pháp luật có quy định khác.</p>
                <p>JpanWell sẽ thực hiện yêu cầu của Khách hàng trong 72 giờ sau khi nhận được yêu cầu, trừ trường hợp luật có quy định khác.</p>

                <p>(i) Khách hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật.</p>
                <p>(j) Khách hàng có quyền yêu cầu bồi thường đối với thiệt hại thực tế theo quy định của pháp luật nếu JpanWell có hành vi vi phạm quy định về bảo vệ Dữ liệu cá nhân của mình, trừ trường hợp các bên có thỏa thuận khác hoặc luật có quy định khác.</p>
                <p>(k) Khách hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật khác có liên quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ quyền dân sự theo quy định tại Điều 11 Bộ luật Dân sự.</p>
                <p>(l) Các quyền khác theo quy định của pháp luật hiện hành.</p>
                <p>9.2. Nghĩa vụ của Khách hàng</p>

                <p>(a) Tuân thủ các quy định của pháp luật, quy định, hướng dẫn của JpanWell liên quan đến xử lý Dữ liệu cá nhân của Khách hàng.</p>
                <p>(b) Cung cấp đầy đủ, trung thực, chính xác Dữ liệu cá nhân, các thông tin khác theo yêu cầu của JpanWell khi đăng ký và sử dụng dịch vụ của JpanWell và khi có thay đổi về các thông tin này. JpanWell sẽ tiến hành bảo mật Dữ liệu cá nhân của Khách hàng căn cứ trên thông tin Khách hàng đã đăng ký, do đó nếu có bất kỳ thông tin sai lệch nào JpanWell sẽ không chịu trách nhiệm trong trường hợp thông tin đó làm ảnh hưởng hoặc hạn chế quyền lợi của Khách hàng. Trường hợp không thông báo, nếu có phát sinh rủi ro, tổn thất thì Khách hàng chịu trách nhiệm về những sai sót hay hành vi lợi dụng, lừa đảo khi sử dụng dịch vụ do lỗi của mình hoặc do không cung cấp đúng, đầy đủ, chính xác, kịp thời sự thay đổi thông tin; bao gồm cả thiệt hại về tài chính, chi phí phát sinh do thông tin cung cấp sai hoặc không thống nhất.</p>
                <p>(c) Phối hợp với JpanWell, cơ quan nhà nước có thẩm quyền hoặc bên thứ ba trong trường hợp phát sinh các vấn đề ảnh hưởng đến tính bảo mật Dữ liệu cá nhân của Khách hàng.</p>
                <p>(d) Tự bảo vệ dữ liệu cá nhân của mình; chủ động áp dụng các biện pháp nhằm bảo vệ Dữ liệu cá nhân của mình trong quá trình sử dụng dịch vụ của JpanWell; thông báo kịp thời cho JpanWell khi phát hiện thấy có sai sót, nhầm lẫn về Dữ liệu cá nhân của mình hoặc nghi ngờ Dữ liệu cá nhân của mình đang bị xâm phạm.</p>
                <p>(e) Tự chịu trách nhiệm đối với những thông tin, dữ liệu, chấp thuận mà mình tạo lập, cung cấp trên môi trường mạng; tự chịu trách nhiệm trong trường hợp dữ liệu cá nhân bị rò rỉ, xâm phạm do lỗi của mình.</p>
                <p>(f) Thường xuyên cập nhật các Quy định, Chính sách của JpanWell trong từng thời kỳ được thông báo tới Khách hàng hoặc đăng tải trên các website và hoặc các kênh giao dịch khác của JpanWell từng thời kỳ. Thực hiện các hành động theo hướng dẫn của JpanWell để thể hiện rõ việc chấp thuận hoặc không chấp thuận đối với các mục đích xử lý Dữ liệu cá nhân mà JpanWell thông báo tới Khách hàng trong từng thời kỳ.</p>
                <p>(g) Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.</p>
                <p>(h) Các trách nhiệm khác theo quy định của pháp luật.</p>

                <p className="font-semibold mt-4">Điều 10. Lưu trữ dữ liệu cá </p>

                <p>JpanWell cam kết sẽ chỉ lưu trữ dữ liệu cá nhân của Khách hàng trong trường hợp liên quan đến các mục đích được nêu trong Chính sách này. JpanWell cũng có thể cần lưu trữ dữ liệu cá nhân của quý khách trong một thời gian nhằm để thực hiện mục đích nêu trong chính sách này và khi pháp luật hiện hành yêu cầu.</p>


                <p className="font-semibold mt-4">Điều 11. Cách Thức Xử Lý Dữ Liệu</p>

                <p>JpanWell áp dụng một hoặc nhiều hoạt động tác động tới dữ liệu cá nhân như: thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan.</p>


                <p className="font-semibold mt-4">Điều 12. Cookies</p>
                <p>12.1. Khi Khách hàng sử dụng hoặc truy cập các website, trang tin trực tuyến (sau đây gọi chung là “trang tin điện tử”) của JpanWell, JpanWell có thể đặt một hoặc nhiều cookie trên thiết bị của Khách hàng. “Cookie” là một tệp nhỏ được đặt trên thiết bị của Khách hàng khi Khách hàng truy cập một trang tin điện tử, nó ghi lại thông tin về thiết bị, trình duyệt của Khách hàng và trong một số trường hợp, sở thích và thói quen duyệt tin điện tử của Khách hàng. JpanWell có thể sử dụng thông tin này để nhận diện Khách hàng khi Khách hàng quay lại các trang tin điện tử của JpanWell, để cung cấp các dịch vụ được cá nhân hóa trên các trang tin điện tử của JpanWell, để biên soạn số liệu phân tích nhằm hiểu rõ hơn về hoạt động của trang tin điện tử và để cải thiện các trang tin điện tử của JpanWell. Khách hàng có thể sử dụng cài đặt trình duyệt của mình để xóa hoặc chặn cookie trên thiết bị của mình. Tuy nhiên, nếu Khách hàng quyết định không chấp nhận hoặc chặn cookie từ các trang tin điện tử của JpanWell, Khách hàng có thể không tận dụng hết tất cả các tính năng của các trang tin điện tử của JpanWell.</p>

                <p>12.2. JpanWell có thể xử lý thông tin cá nhân của Khách hàng thông qua công nghệ cookie, theo các quy định của Điều khoản này. JpanWell cũng có thể sử dụng biện pháp tiếp thị lại để phân phát quảng cáo cho những cá nhân mà JpanWell biết trước đây đã truy cập trang tin điện tử của mình.</p>

                <p>12.3. Trong phạm vi các bên thứ ba đã gán nội dung lên trên các trang tin điện tử của JpanWell (ví dụ: các tính năng truyền thông xã hội), các bên thứ ba đó có thể thu thập thông tin cá nhân của Khách hàng (ví dụ: dữ liệu cookie) nếu Khách hàng chọn tương tác với nội dung của bên thứ ba đó hoặc sử dụng các dịch vụ của bên thứ ba.</p>


                <p className="font-semibold mt-4">Điều 13. Thông tin liên hệ xử lý dữ liệu cá nhân</p>

                <p>Trường hợp Khách hàng có bất kỳ câu hỏi nào liên quan đến Chính sách này hoặc các vấn đề liên quan đến quyền của chủ thể dữ liệu hoặc xử lý dữ liệu cá nhân của Khách hàng, Khách hàng hàng có thể sử dụng các hình thức liên hệ nêu sau:</p>

                <p>(1) Gửi thư về Công ty theo địa chỉ: Trung Tâm Trải Nghiệm Khách Hàng; địa chỉ: 58 Kim Mã, Phường Kim Mã, Quận Ba Đình, Thành phố Hà Nội, Việt Nam.</p>
                <p>(2) Gửi email về hòm thư điện tử: hiroki.jsc@gmail.com</p>
                <p>(3) Hotline: <Link to="tel:0983191166">098 319 1166</Link></p>

                <p className="font-semibold mt-4">Điều 14. Điều khoản chung</p>

                <p>14.1. Chính sách này có hiệu lực từ ngày 01/07/2023. Khách hàng hiểu và đồng ý rằng, Chính sách này có thể được sửa đổi theo từng thời kỳ và được thông báo tới Khách hàng thông qua các Kênh giao dịch của JpanWell trước khi áp dụng. Những thay đổi và thời điểm có hiệu lực sẽ được cập nhật và công bố tại các Kênh giao dịch và các kênh khác của JpanWell. Việc Khách hàng tiếp tục sử dụng dịch vụ sau thời hạn thông báo về các nội dung sửa đổi, bổ sung trong từng thời kỳ đồng nghĩa với việc Khách hàng đã chấp nhận các nội dung sửa đổi, bổ sung đó.</p>

                <p>14.2. Khách hàng đã biết rõ và đồng ý bản Chính sách này cũng là Thông báo xử lý dữ liệu cá nhân quy định tại Điều 13 Nghị định 13/NĐ-CP/2023 và được sửa đổi, bổ sung trong từng thời kỳ trước khi JpanWell tiến hành Xử lý dữ liệu cá nhân. Theo đó. JpanWell không cần thực hiện thêm bất kỳ biện pháp nào khác nằm mục đích thông báo việc Xử lý dữ liệu cá nhân cho Khách hàng.</p>

                <p>14.3. Khách hàng cam kết thực hiện nghiêm túc các quy định tại Chính sách này. Các vấn đề chưa được quy định, các Bên thống nhất thực hiện theo quy định của pháp luật, hướng dẫn của cơ quan Nhà nước có thẩm quyền và/hoặc các sửa đổi, bổ sung Chính sách này được JpanWell thông báo cho khách hàng trong từng thời kỳ.</p>

                <p>14.4. Khách hàng có thể thấy quảng cáo hoặc nội dung khác trên bất kỳ trang tin điện tử, ứng dụng hoặc thiết bị nào có thể liên kết đến các trang tin điện tử hoặc dịch vụ của các đối tác, nhà quảng cáo, nhà tài trợ hoặc các bên thứ ba khác.</p>

                <p>JpanWell không kiểm soát nội dung hoặc các liên kết xuất hiện trên các trang tin điện tử hoặc dịch vụ của bên thứ ba và không chịu trách nhiệm hoặc/và trách nhiệm pháp lý đối với các hoạt động được sử dụng bởi các trang tin điện tử hoặc dịch vụ của bên thứ ba được liên kết đến hoặc từ bất kỳ trang tin điện tử, ứng dụng hoặc thiết bị nào. Các trang tin điện tử và dịch vụ này có thể tuân theo các chính sách bảo mật và điều khoản sử dụng của riêng của bên thứ ba.</p>
                <p>14.5. Chính sách này được giao kết trên cơ sở thiện chí giữa JpanWell và Khách hàng. Trong quá trình thực hiện nếu phát sinh tranh chấp, các Bên sẽ chủ động giải quyết thông qua thương lượng, hòa giải. Trường hợp hòa giải không thành, tranh chấp sẽ được đưa ra Tòa án nhân dân có thẩm quyền để giải quyết theo quy định của pháp luật.</p>
                <p>14.6. Khách hàng đã đọc kỹ, hiểu rõ các quyền và nghĩa vụ và đồng ý với toàn bộ nội dung của bản Chính sách bảo vệ dữ liệu cá nhân này.</p>
            </div>
        </>
    )
}