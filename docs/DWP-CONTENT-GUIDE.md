# Mengisi case study DWP

Template dibuat berdasarkan main 2312ca57f5a012969f5fed301122f2c11f60707f.
Satu proyek, dua kontribusi: Design System + Master Mockup. Tidak ada perubahan otomatis ke GitHub.

## File yang diedit
- `content/dwp.ts`: konten tiga contoh alur dan dokumentasi referensi pengembangan.
- `public/images/dwp/mockups/`: gambar mockup.
- `app/work/digital-workplace/page.tsx`: narasi Design System dan overview yang sudah ada.

## Preview template lokal
Jalankan `DWP_SHOW_DRAFTS=true npm run dev`, lalu buka http://localhost:3000/work/digital-workplace/.
Mode ini menampilkan pertanyaan panduan dan tempat gambar. Setelah mengubah flag, hentikan server dengan Ctrl+C dan jalankan ulang.
`npm run dev` tanpa flag menampilkan versi pengunjung. Flag tidak ditambahkan ke workflow deployment.

## Mengisi contoh alur
1. Pilih objek `flow-01`, `flow-02`, atau `flow-03` di content/dwp.ts. Judul slot hanya contoh editorial, bukan fitur proyek.
2. Isi title, userGoal, problem, contribution, decisions, states, validation, outcome. Boleh gunakan `\n` untuk paragraf baru. Gunakan bahasa Inggris untuk tampilan publik.
3. Simpan gambar, contoh `public/images/dwp/mockups/flow-01-desktop.webp`.
4. Isi objek images:

```ts
{ src: "/images/dwp/mockups/flow-01-desktop.webp",
  alt: "Deskripsi visual spesifik screenshot Anda",
  caption: "Jelaskan keputusan desain atau detail yang perlu diperhatikan.",
  device: "Desktop" }
```

5. Tambah atau hapus objek images sesuai kebutuhan. Tidak wajib mencakup semua perangkat. Gambar tampil utuh, dapat dibuka pada ukuran asli.
6. Setelah ditinjau, ubah published menjadi true. Slot hanya tampil publik jika title, userGoal, contribution, decisions dan minimal satu gambar dengan alt terisi. Field opsional kosong disembunyikan.
7. Isi dwpReference untuk struktur file, versi/status, anotasi, cara kolaborasi, dan screenshot dokumentasi. Field yang sudah diisi langsung tampil pada build publik; jangan masukkan draft ke field ini.
8. Jalankan npm run typecheck dan npm run build sebelum commit/push. Pastikan tidak mengaktifkan DWP_SHOW_DRAFTS saat build produksi.

## Mengirim materi lewat chat
Salin format ini untuk setiap contoh (boleh jawab dalam bahasa Indonesia):
- Nama fitur/alur:
- Pengguna dan tujuan:
- Masalah + bukti/batasan:
- Kontribusi saya vs tim:
- Keputusan desain + alasan/alternatif:
- Perbedaan desktop/iPad/mobile atau state:
- Validasi/feedback + perubahan:
- Hasil (jika ada bukti):
- Gambar dan urutannya:
- Keterangan tiap gambar:

Untuk development reference:
- Organisasi master file:
- Cara menunjukkan versi terbaru/status:
- Anotasi interaksi/state:
- Siapa yang memakai dan cara komunikasi perubahan:
- Screenshot dokumentasi:

Tidak perlu membuat angka hasil bila belum diukur. Gunakan materi yang boleh ditampilkan publik dan samarkan data internal sebelum menambahkan gambar.
