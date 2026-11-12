# HaloChina

Website tự học tiếng Trung HSK1–HSK6, thay thế ứng dụng cũ. Bản gốc được giữ cục bộ tại `legacy/index.html` và không đưa lên website mới.

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
```

Kiểm tra dữ liệu: số lượng theo cấp, đủ trường bài học, nghĩa Việt, đề không trùng ID, đủ bốn phương án, chấm điểm, tìm không dấu, chống chèn HTML, CSV và xác thực bản sao tiến độ. Kiểm tra trình duyệt: tất cả danh mục của sáu cấp, lưu từ, flashcard, bài nháp, bài làm dở, tự nộp khi hết giờ, xuất / nhập và màn hình nhỏ.

## Cập nhật từ điển

`node scripts/download-data.mjs` tải nguồn mở đã liệt kê trong script vào `sources/`. Giải nén riêng `Unihan_Readings.txt` từ `sources/Unihan.zip`, đặt vào `sources/Unihan_Readings.txt`, rồi chạy `npm run data`. Chạy lại kiểm tra dữ liệu sau cập nhật; các nguồn trên nhánh main có thể thay đổi. Không cần chạy quy trình này để sử dụng bản hiện tại: dữ liệu đã đóng gói trong `dist`.

Dữ liệu từ điển phái sinh được chia sẻ theo CC BY-SA 4.0; các nguồn công cụ MIT và dữ liệu Unicode có thông báo riêng. Xem `dist/data/ATTRIBUTION.txt`. Không phân phối kho tài liệu từ 123tiengtrung.com.
