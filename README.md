# Portofolio Andrian Cedric — GitHub Pages

Paket ini berisi source code homepage dan case study DWP, dengan React, TypeScript, Next.js, Plus Jakarta Sans, serta tema navy–cyan. Ini adalah salinan yang disiapkan untuk GitHub Pages; publikasi Sites sebelumnya tetap terpisah.

## 1. Pilih nama repository

Rekomendasi untuk website pribadi: `USERNAME.github.io`, dengan USERNAME diganti username GitHub Anda yang sebenarnya. Contoh pola alamat: `https://USERNAME.github.io/`.

Jika nama repository itu sudah digunakan, pilih `portfolio`. Pola alamat menjadi `https://USERNAME.github.io/portfolio/`. Paket ini mendukung keduanya; workflow membaca base path dari pengaturan Pages.

GitHub Free menyediakan Pages untuk repository publik. Kode, screenshot, CV, dan aset dalam repository publik bisa dibaca atau diunduh siapa pun. Paket menyertakan CV yang Anda berikan beserta email dan nomor telepon di dalam PDF. Tinjau isi CV sebelum publikasi; ganti file dengan versi publik bila diperlukan. Jika ingin kode tetap privat, pilih hosting/plan yang mendukungnya.

## 2. Persiapan MacBook

Pasang aplikasi berikut dari situs resminya:

- GitHub Desktop: https://desktop.github.com/download/
- Visual Studio Code: https://code.visualstudio.com/download
- Node.js: https://nodejs.org/en/download — pilih Node.js 22 versi terbaru dari jalur 22.x, macOS ARM64 untuk Apple Silicon. npm ikut terpasang.

Buka GitHub Desktop dan sign in ke akun GitHub Anda. Tidak perlu mengirim password atau token ke chat.

Ekstrak ZIP. Di dalam folder `andrian-portfolio-github`, file `package.json` harus berada langsung pada tingkat paling atas. Jangan membuka folder induk yang hanya berisi ZIP.

## 3. Buat repository lokal lewat GitHub Desktop

1. Di GitHub Desktop pilih **File → Add Local Repository**.
2. Pilih folder hasil ekstraksi `andrian-portfolio-github`.
3. Jika folder belum menjadi Git repository, pilih opsi untuk membuat repository di folder tersebut.
4. Pastikan lokasi akhirnya adalah folder yang langsung berisi `package.json`, bukan subfolder baru. Buka repository di Finder bila perlu untuk memastikan.
5. Buka tab Changes. Pastikan `.github/workflows/deploy.yml`, `.gitignore`, file kode, `package-lock.json`, serta public assets ikut terlihat.
6. Jika belum ada commit, isi Summary `Initial portfolio` lalu **Commit to main**. Pastikan branch utamanya bernama `main`.

Alternatif terminal, hanya jika Anda nyaman memakai Git:

```bash
cd /lokasi/folder/andrian-portfolio-github
git init -b main
git add .
git commit -m "Initial portfolio"
```

Jika Git meminta identitas, set nama dan email untuk repository ini sesuai akun Anda. GitHub Desktop dapat mengelolanya melalui pengaturan Git. Tambahkan repository lokal tadi ke GitHub Desktop setelah commit.

## 4. Jalankan sebelum mengunggah

Buka folder repository di VS Code (GitHub Desktop menyediakan **Repository → Open in Visual Studio Code**, setelah editor dipilih di pengaturan).

Di VS Code pilih **Terminal → New Terminal**, lalu:

```bash
node -v
npm -v
npm ci
npm run dev
```

Buka alamat localhost yang dicetak terminal, biasanya http://localhost:3000. Jangan membuka `page.tsx` langsung di browser. Tekan Control+C di terminal untuk menghentikan server.

Periksa homepage, link DWP, CV, serta menu mobile. Untuk build produksi:

```bash
npm run typecheck
npm run build
```

Folder `out/` merupakan output website statis. GitHub Actions membuat folder ini saat publikasi; Anda tidak perlu mengunggahnya secara manual. Jangan mengunggah `node_modules`, `.next`, atau `.env`; semuanya diabaikan oleh `.gitignore`.

## 5. Unggah ke GitHub

1. Kembali ke GitHub Desktop.
2. Klik **Publish repository**.
3. Pilih akun pribadi Anda sebagai pemilik dan isi nama `USERNAME.github.io` atau `portfolio`.
4. Untuk GitHub Pages pada GitHub Free, hapus centang **Keep this code private** agar repository publik. Ini juga membuat kode dan asetnya publik.
5. Klik **Publish Repository**.
6. Klik **View on GitHub**. Pastikan `package.json`, folder `app`, dan folder `.github` berada di root repository.

Jangan mengunggah file ZIP utuh sebagai isi repository: GitHub Actions perlu membaca file hasil ekstraksinya.

## 6. Aktifkan GitHub Pages

1. Di halaman repository GitHub, buka **Settings → Pages**.
2. Di bagian **Build and deployment**, pilih **Source: GitHub Actions**. Paket sudah membawa workflow; tidak perlu membuat workflow Next.js tambahan.
3. Buka tab **Actions**.
4. Pilih workflow **Publish portfolio to GitHub Pages**.
5. Klik **Run workflow**, pilih branch **main**, lalu jalankan. Jika workflow pertama gagal sebelum Pages diaktifkan, jalankan ulang setelah langkah 2.
6. Tunggu job `build` dan `deploy` selesai dengan tanda hijau.
7. Buka alamat pada hasil deployment atau **Settings → Pages → Visit site**. GitHub menyediakan alamat HTTPS tersebut.

Workflow melakukan checkout kode, memasang dependency dari lockfile, memeriksa TypeScript, mengekspor HTML statis, lalu memublikasikan folder `out/`. Deployment menggunakan token sementara bawaan GitHub Actions. Anda tidak perlu membuat Personal Access Token atau menambahkan secret untuk Pages.

## 7. Update sehari-hari

Sebelum mulai, klik **Fetch origin**, lalu **Pull origin** bila ada perubahan dari GitHub.

Edit file di VS Code, jalankan preview lokal, lalu:

1. Periksa daftar perubahan di GitHub Desktop.
2. Isi ringkasan yang jelas, misalnya `Update DWP contribution`.
3. Klik **Commit to main**.
4. Klik **Push origin**.
5. GitHub Actions otomatis memublikasikan perubahan setelah build dan deploy berhasil.

Untuk perubahan lebih besar, buat branch, kerjakan perubahan, lalu buka Pull Request. Workflow publikasi hanya berjalan pada `main` atau ketika dipicu manual dari workflow yang tersedia. Mengedit file saja tidak mengubah website publik.

Jika Anda dan Codex mengedit file yang sama dari versi berbeda, mungkin muncul merge conflict. Tarik kode terbaru sebelum memulai dan tinjau conflict sebelum melanjutkan.

## 8. Peta file untuk belajar

| File | Yang diubah |
| --- | --- |
| `content/portfolio.ts` | Profil, email, LinkedIn, pengalaman, kemampuan |
| `app/page.tsx` | Homepage dan kartu proyek |
| `app/work/digital-workplace/page.tsx` | Narasi case study DWP |
| `components/portfolio-nav.tsx` | Navbar, penanda aktif, menu mobile |
| `components/portfolio-footer.tsx` | Kontak dan footer |
| `app/globals.css` | Warna, font, spacing, liquid glass, responsive layout |
| `public/images/` | Gambar proyek |
| `public/Andrian-Cedric-Resume.pdf` | CV yang dibuka pengunjung |
| `lib/site-path.ts` | Prefix alamat aset dan link internal |
| `next.config.ts` | Ekspor statis dan base path |
| `.github/workflows/deploy.yml` | Build dan deployment otomatis |
| `AGENTS.md` | Panduan konteks proyek untuk Codex |

Untuk link lokal baru, gunakan `sitePath('/images/nama.png')` atau `sitePath('/work/nama-proyek/')`. Link hash seperti `#work` dan alamat eksternal tidak memerlukan prefix. Font dibundel dari file lokal sehingga tidak bergantung pada Google Fonts saat pengunjung membuka halaman.

## 9. Hubungkan ke Codex setelah repository ada

Setelah repository muncul di akun GitHub, pilih repository tersebut pada konfigurasi GitHub/Codex dan berikan akses sesuai kebutuhan. Untuk Codex cloud, buat environment untuk repository lalu jalankan tugas di sana. Untuk Codex lokal, buka checkout yang sama dengan yang Anda gunakan di VS Code.

Kirim link repository melalui chat agar langkah berikutnya bisa dipandu berdasarkan repo yang benar. Koneksi GitHub belum otomatis menyinkronkan publikasi Sites yang lama. Gunakan repository ini sebagai acuan perubahan setelah migrasi diterima.

## Troubleshooting

- **Workflow gagal pada Configure GitHub Pages:** pastikan Settings → Pages → Source = GitHub Actions, lalu Run workflow ulang.
- **npm tidak ditemukan:** pasang Node.js, tutup dan buka kembali VS Code.
- **npm ci gagal:** pastikan Node 22 dan `package-lock.json` ikut terunggah. Baca pesan error; jangan menghapus lockfile sebagai solusi pertama.
- **Workflow tidak muncul:** pastikan `.github/workflows/deploy.yml` terunggah. Folder bertitik tersembunyi di Finder; Command+Shift+. dapat menampilkannya. GitHub Desktop tetap melacaknya.
- **Situs 404 setelah publish:** tunggu deployment berstatus succeeded dan buka URL dari Settings → Pages, bukan URL hasil tebakan.
- **Gambar atau CV 404:** gunakan `sitePath()` untuk link lokal dan cek huruf besar/kecil pada nama file.
- **Perubahan belum terlihat:** cek push sudah selesai dan workflow terbaru hijau. Reload halaman setelah deployment selesai.
- **Node lokal berbeda dengan CI:** gunakan jalur Node 22 yang sama untuk mengurangi perbedaan.

## Referensi

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://nextjs.org/docs/app/guides/static-exports

## Sumber konten

CV Andrian Cedric tanggal 18 Agustus 2026 serta case study DWP di https://andriancedric.framer.ai/portfolio-dwp-bi. Angka 20+ menjelaskan komponen beserta variannya; 3 menjelaskan konteks perangkat. Tidak ada metrik peningkatan dampak baru yang dibuat. Foto/screenshot dan isi portofolio tetap milik pemiliknya; lisensi font dan stylesheet pihak ketiga disertakan pada folder masing-masing.
