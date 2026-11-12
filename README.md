# HaloChina

Website tự học tiếng Trung HSK1–HSK6 với giao diện hồng “Nga Anh học tiếng Trung”, thay thế ứng dụng cũ. Bản gốc được giữ cục bộ tại `legacy/index.html` và không đưa lên website mới.

Tiêu đề, menu và chữ nội dung có độ đậm/tương phản rõ trên nền pastel; các nhóm tài liệu dùng màu hồng berry, tím và xanh ngọc. Trò chơi có lời khen đa dạng, chuỗi câu đúng liên tiếp và lời động viên theo kỹ năng khi sai, đi kèm đáp án/giải thích. Thông điệp giữ ổn định khi tải lại lượt chơi; phần luyện nói chỉ ghi nhận tự thực hành, không đưa lời khen giả về độ chuẩn phát âm.

## Giao tiếp hằng ngày

Mục **Giao tiếp hằng ngày** trên sidebar mở `#/communication/1`: 124 chủ đề (bổ sung 100 chủ đề mới), 1.240 câu giao tiếp và 124 hội thoại bốn lượt (496 lượt nói), tự biên soạn bằng tiếng Trung giản thể, pinyin và nghĩa tiếng Việt. Các nhóm gồm cơ bản, cuộc sống, ăn uống, dịch vụ, đi lại, học & làm, sức khỏe & an toàn, công nghệ, vui chơi & sở thích, quan hệ & dịp đặc biệt. Mẫu câu hỗ trợ giao tiếp, không thay thế tư vấn chuyên môn ở tình huống y tế hoặc khẩn cấp.

Có tìm kiếm tiếng Việt không dấu / chữ Hán / pinyin (có thể bỏ khoảng trắng), lọc nhóm chủ đề, lưu câu, đánh dấu tự luyện, ẩn pinyin hoặc nghĩa để ôn, nghe thường/chậm, nghe liên tiếp hội thoại và dừng, sao chép, xuất CSV, in / lưu PDF. Giọng đọc dùng Web Speech API của thiết bị. Phát hội thoại được hủy khi chuyển trang hoặc ẩn tab. Câu đã lưu và đã luyện được giữ trong bản xuất/nhập tiến độ JSON, vẫn đọc được bản sao từ các phiên bản cũ.

Nội dung gốc ở `dist/data/daily-conversation.js`; 100 chủ đề bổ sung ở `dist/data/daily-extra.js`; giao diện ở `dist/daily.js` và `dist/daily.css`. Câu và hội thoại là ví dụ học tập tự biên soạn, không sao chép kho nội dung của website khác.

## Hành trình Thỏ Mây

Mục **Trò chơi** ở sidebar có 120 cấp, chia 6 thế giới × 20 cấp HSK. Ngân hàng từ vựng được chia thành 120 phần; bài học tương ứng đi qua cả 108 bài đã biên soạn. Mỗi lượt lấy mẫu từ phần của cấp đó, nên chơi lại có thể gặp từ khác. Cứ 5 cấp có mốc ôn tập gồm 16 thử thách; các cấp khác có 12 thử thách. Mỗi lượt có từ vựng/pinyin, ngữ pháp, đọc, nghe, viết/gõ hoặc sắp xếp câu, và đọc to tự đánh giá.

Để thắng cần đúng ≥80% câu tính điểm, đạt ≥50% ở từng kỹ năng có chấm điểm và xác nhận đã luyện nói. Thắng mở cấp tiếp theo; thỏ chuyển tới cấp vừa mở. Có 1–3 sao, XP, mục tiêu mỗi ngày, khôi phục lượt dở và tùy chọn tự chuyển câu sau 3 giây. Chơi lại chỉ cộng phần XP cải thiện, không cộng điểm trùng. Tiến độ trò chơi đi kèm bản xuất/nhập JSON, tương thích dữ liệu cũ.

Logo là ảnh Nga Anh do người dùng cung cấp, được sao chép nguyên bản vào `dist/assets/nga-anh-logo.png`; giao diện chỉ căn khung hiển thị. Nhạc nền “Giai điệu Thỏ Mây” được viết bằng Web Audio API với giai điệu nguyên bản, không tải bản ghi âm từ bên ngoài. Nhạc tự bật ngay khi bấm bắt đầu/tiếp tục lượt chơi, kể cả khi đã tắt ở lượt trước; âm lượng 0 được đưa về mức nền 32%. Người học vẫn có thể tắt hoặc chỉnh âm lượng trong lượt đang chơi. Nhạc giảm khi nghe câu mẫu, dừng khi thu/nghe lại bản ghi, khi ẩn tab hoặc ra ngoài khu trò chơi. Tải lại trực tiếp trang đang chơi có thể cần bấm nút ♫ hoặc quay lại bản đồ và chọn Tiếp tục để trình duyệt cho phép âm thanh.

Chuyển trang, chuyển câu, mở hộp thoại và các nút dùng hiệu ứng ngắn trên opacity/transform. Chọn đáp án hoặc ghép từ không làm cả trang chạy lại hiệu ứng. Cấu hình giảm chuyển động của hệ điều hành được tôn trọng, kể cả khi đổi trong lúc sử dụng.

Thu âm chỉ dùng micro sau thao tác bấm và quyền của trình duyệt; bản ghi không được gửi lên máy chủ. Có phương án đọc to không dùng micro. Phần nói là tự đánh giá, không có điểm phát âm AI. Không cam kết hoàn thành thế giới trò chơi đồng nghĩa đạt chứng chỉ HSK. Phương pháp ôn xen kẽ tham khảo bài viết công khai của Duolingo, có dẫn nguồn ở trang **Cách chơi**. Nhân vật thỏ và bản đồ là SVG/CSS viết riêng; hiệu ứng tôn trọng `prefers-reduced-motion`.

## Chạy

Yêu cầu Node.js 22 trở lên:

```sh
npm start
```

Mở `http://127.0.0.1:4173`. Có thể mở `index.html` trực tiếp; trang này chuyển vào `dist/index.html`. Website tĩnh không cần API key, tài khoản hay bước build. Khi triển khai, dùng toàn bộ thư mục `dist` làm thư mục public.

## Nội dung thực tế

| Cấp | Mục từ mới | Bài học / điểm ngữ pháp |
| --- | ---: | ---: |
| HSK1 | 300 | 15 |
| HSK2 | 200 | 15 |
| HSK3 | 500 | 18 |
| HSK4 | 1.000 | 20 |
| HSK5 | 1.600 | 20 |
| HSK6 | 1.800 | 20 |

Tổng: 5.400 mục từ có pinyin và nghĩa tiếng Việt; 108 bài học ngắn, 108 cấu trúc ngữ pháp; 6 chuyên đề kỹ năng dùng chung. Danh sách từ theo đề cương 2025-11 nên số mục có thể khác ảnh tham khảo. Từ đồng hình có thể xuất hiện ở nhiều cách đọc. Ngữ pháp là lộ trình do HaloChina biên soạn, không phải toàn bộ ngữ pháp trong một bộ giáo trình chính thức.

- Tra chữ Hán, pinyin không dấu, nghĩa Việt, âm Hán Việt; phân trang, ôn gộp cấp trước.
- Lưu từ, đánh dấu đã nhớ, lật flashcard và nghe phát âm.
- Bài học có cấu trúc, giải thích, ví dụ, pinyin, bản dịch, câu kiểm tra và bản nháp tự lưu.
- Luyện từ vựng, pinyin, điền từ theo nghĩa, đọc câu, nghe câu; lời giải và ôn lại câu sai.
- Thi thử có đồng hồ, chuyển câu, lưu bài dở, tự nộp khi hết giờ và lịch sử điểm.
- Xuất CSV cho Excel / Google Sheets, bảng tự kiểm tra, phiếu luyện chữ, sổ tay ngữ pháp, bài tập kèm đáp án; in / lưu PDF từ hộp thoại trình duyệt.
- Xuất / nhập tiến độ JSON để mang sang trình duyệt khác.

## Giới hạn cần biết

Tiến độ lưu tại localStorage, không đồng bộ máy chủ. Âm thanh dùng Web Speech API; máy cần có giọng đọc tiếng Trung, có thể cần mạng tùy hệ điều hành. Bài thi là bài luyện độc lập, không mô phỏng đầy đủ phần viết tự do, bản ghi âm người thật hoặc thang điểm kỳ thi chính thức. Nội dung từ điển cộng đồng có thể còn lỗi dịch; đã ghi rõ nguồn và giấy phép trong website.

## Cấu trúc

```text
dist/index.html              giao diện chính
dist/styles.css              giao diện responsive
dist/app.js                  điều hướng, học tập, lưu trữ, xuất tài liệu
dist/core.js                 tìm kiếm, tạo đề, chấm điểm, CSV, kiểm tra bản nhập
dist/data/vocabulary.js      5.400 mục từ đã chuẩn hóa
dist/data/curriculum.js      108 bài tự biên soạn và 6 chuyên đề
dist/data/ATTRIBUTION.txt    ghi nguồn và giấy phép
scripts/                    máy chủ xem trước, chuẩn hóa dữ liệu, kiểm tra
sources/                    dữ liệu thô, chỉ cục bộ, không phát hành
legacy/                     bản ứng dụng cũ, chỉ cục bộ
```

## Kiểm tra

```sh
npm install
npx playwright install chromium
npm run check
# Chạy npm start trong một terminal khác, sau đó:
node scripts/browser-check.mjs
node scripts/game-check.mjs
node scripts/game-browser-check.mjs
node scripts/music-browser-check.mjs
node scripts/feedback-browser-check.mjs
node scripts/autoplay-motion-check.mjs
node scripts/daily-check.mjs
node scripts/daily-browser-check.mjs
```

Kiểm tra dữ liệu: số lượng theo cấp, đủ trường bài học, nghĩa Việt, đề không trùng ID, đủ bốn phương án, chấm điểm, tìm không dấu, chống chèn HTML, CSV và xác thực bản sao tiến độ. Kiểm tra trình duyệt: tất cả danh mục của sáu cấp, lưu từ, flashcard, bài nháp, bài làm dở, tự nộp khi hết giờ, xuất / nhập và màn hình nhỏ.

## Cập nhật từ điển

`node scripts/download-data.mjs` tải nguồn mở đã liệt kê trong script vào `sources/`. Giải nén riêng `Unihan_Readings.txt` từ `sources/Unihan.zip`, đặt vào `sources/Unihan_Readings.txt`, rồi chạy `npm run data`. Chạy lại kiểm tra dữ liệu sau cập nhật; các nguồn trên nhánh main có thể thay đổi. Không cần chạy quy trình này để sử dụng bản hiện tại: dữ liệu đã đóng gói trong `dist`.

Dữ liệu từ điển phái sinh được chia sẻ theo CC BY-SA 4.0; các nguồn công cụ MIT và dữ liệu Unicode có thông báo riêng. Xem `dist/data/ATTRIBUTION.txt`. Không phân phối kho tài liệu từ 123tiengtrung.com.
