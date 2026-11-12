# Đưa HaloChina lên GitHub Pages

Website chạy trực tiếp từ `dist/`, không cần máy chủ hoặc bước build.
Workflow `.github/workflows/pages.yml` kiểm tra dữ liệu HSK, 120 cấp trò chơi
và 124 chủ đề giao tiếp trước khi xuất bản.

1. Tạo repository trống trên tài khoản GitHub của bạn. GitHub Free hỗ trợ Pages
   cho repository Public. Nếu dùng repository Private, cần gói GitHub hỗ trợ Pages.
2. Đưa mã nguồn dự án vào repository, giữ nguyên cấu trúc thư mục. Đặc biệt cần
   có `dist/`, `scripts/` và `.github/workflows/pages.yml`.
3. Vào **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**.
4. Vào **Actions → Deploy HaloChina to GitHub Pages → Run workflow**, chọn nhánh
   `main` (hoặc `master`). Những lần push tiếp theo lên nhánh này sẽ tự deploy.
5. Mở URL mà bước **Deploy website** trả về sau khi workflow thành công.

Không cần nhập token hoặc mật khẩu vào mã nguồn hay workflow. GitHub cấp quyền
cho workflow thông qua `GITHUB_TOKEN` và OpenID Connect.

## Repository của dự án

Repository: https://github.com/thanhphong39/HaloChinaNA

Sau khi Pages được bật và workflow thành công, địa chỉ website dự kiến là:
https://thanhphong39.github.io/HaloChinaNA/

## Push từ máy tính

Nếu thư mục dự án chưa có remote `github`, thay `TEN_TAI_KHOAN` và `TEN_REPO`
trong lệnh dưới đây bằng tài khoản và repository thực tế:

```powershell
git remote add github https://github.com/TEN_TAI_KHOAN/TEN_REPO.git
git add .github/workflows/pages.yml GITHUB_DEPLOY.md
git commit -m "Configure GitHub Pages deployment"
git push -u github main
```

Nếu GitHub yêu cầu đăng nhập, dùng Git Credential Manager hoặc GitHub CLI trên
máy của bạn. Repository có sẵn commit cần được kiểm tra và hợp nhất trước khi
push; không dùng force push để ghi đè nội dung.

## Thông tin khi chuyển website

- Đường dẫn CSS, script, ảnh đều tương đối; điều hướng dùng hash, phù hợp cả URL
  dự án như `https://TEN_TAI_KHOAN.github.io/TEN_REPO/`.
- Tiến độ học lưu theo trình duyệt và tên miền. Muốn mang tiến độ từ website
  hiện tại sang GitHub Pages, xuất JSON ở trang Tải xuống rồi nhập lại trên trang mới.
- Giọng đọc phụ thuộc giọng tiếng Trung trên thiết bị; micro cần HTTPS hoặc localhost.
- `node_modules/`, `sources/`, `legacy/`, `artifacts/`, `.env*` và các tệp ZIP
  không cần đưa lên GitHub.

Tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
