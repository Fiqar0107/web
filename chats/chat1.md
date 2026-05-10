# Website Pengecekan Skripsi

_Started 2026-05-10 07:33 UTC_

---

## User

saya ingin membuah sebuah website pengecekan untuk progras tudi administrasi bisnis internasional, mulai dari pengecekan kesamaan judul, pengeecekan kelengkapan berkas, pengecekan plagiasi dengan database lokal dan pengecekan melalui aplikasi turnitin

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- user_role: Multi-role (mahasiswa + admin)
- main_flow: Dashboard + setiap pengecekan jadi modul terpisah
- fidelity: Beberapa varian layout untuk dibandingkan
- visual_direction: Data-dense / dashboard style (rapat, teknis)
- language: Bahasa Indonesia
- branding: Saya akan attach logo nanti
- key_screens: Login / Auth, Form upload judul + berkas, Checklist kelengkapan berkas, Hasil plagiasi database lokal, Hasil Turnitin (highlight + report), Hasil cek kesamaan judul (similarity score), Riwayat submission
- title_check_detail: Sederhana (% similarity + daftar judul mirip)
- turnitin_style: Embed view mirip Turnitin asli (highlight per kalimat)
- tweaks_interest: Skema warna (light/dark/accent)

## Assistant

_[tool: update_todos]_

Baik, saya akan membuat **beberapa varian layout** untuk dibandingkan, dalam format design canvas. Sebelum mulai, beberapa keputusan desain yang akan saya gunakan:

**Sistem desain (data-dense)**
- Type: **Inter** (UI) + **JetBrains Mono** (angka, ID, kode dokumen)
- Palet light: cool off-white `oklch(0.985 0.003 240)`, navy primary `oklch(0.32 0.08 250)`, status green/amber/red dengan chroma seragam
- Density rapat: rows 36–40px, border tipis, kartu bordered (bukan elevated)
- Numerik selalu monospace + tabular-nums

**Yang akan dibuat (artboard di design canvas):**
1. Login (auth dual-role)
2. Dashboard — 2 varian (sidebar metrics vs status board)
3. Form Upload Judul + Berkas
4. Hasil Cek Kesamaan Judul
5. Checklist Kelengkapan Berkas
6. Hasil Plagiasi Database Lokal
7. Report Viewer Plagiasi Eksternal — 2 varian (split-view vs annotated)
8. Riwayat Submission

**Catatan:** untuk modul Turnitin saya akan mendesain *report viewer* original (label "Cek Plagiasi Eksternal · via Turnitin") — pola highlight kalimat + panel sumber adalah pola fungsional umum, tapi saya tidak akan menyalin chrome/branded UI Turnitin.

**Tweaks:** toggle skema warna (light / dark / accent navy / accent teal).

Mulai membangun.

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

Now the local plagiarism + external report (2 variants) screens, and the history screen.

_[tool: write_file]_

_[tool: snip]_

Now the external report viewer (2 variants) and history screen.

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

Now the canvas wrapper that lays out all screens, plus the Tweaks panel for color schemes, and the index.html.

_[tool: write_file]_

_[tool: write_file]_

_[tool: grep]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: snip]_

Selesai. Semua layar tersusun di satu design canvas — Anda dapat scroll/pan, drag-reorder artboard, dan klik tombol expand untuk fokus fullscreen. Toggle **Tweaks** di toolbar untuk memunculkan panel skema warna (Light/Dark, Navy/Teal/Plum) dan konteks Riwayat (mahasiswa vs admin).

**Yang ada di canvas:**
- Otentikasi · Login dual-role
- Dashboard · 2 varian (KPI+tabel mahasiswa, status board admin)
- Pengajuan Baru · form judul + unggah berkas
- Cek Kesamaan Judul · ring score + tabel judul mirip
- Kelengkapan Berkas · checklist 7 dokumen + aturan validasi
- Plagiasi Lokal · sumber + distribusi per bab + cuplikan kalimat
- Plagiasi Eksternal · 2 varian (three-pane reader / annotated single-column)
- Riwayat Submission

**Catatan:**
- Logo masih placeholder "LOGO" — drop file logo prodi/universitas saat sudah ada
- Modul Turnitin saya labelkan "Plagiasi Eksternal · via Turnitin" tetapi viewer-nya didesain original (bukan replika UI Turnitin)

**Langkah selanjutnya yang bisa saya kerjakan kalau diperlukan:**
1. Tambah layar Admin Settings (threshold, daftar pembimbing)
2. Versi mobile/tablet untuk mahasiswa
3. Notifikasi & timeline event untuk satu submission
4. State kosong / loading / error untuk tiap modul

## User

saya ingin menggunakan google drive sebagai database mengenai judul dan cek plagiasi lokal

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: snip]_

Sudah diintegrasikan. Google Drive sekarang menjadi sumber tunggal database judul & plagiasi lokal.

**Yang ditambahkan:**
- **Layar baru "Integrasi Google Drive (Admin)"** — tersinkron dengan akun `prodi-abi@drive`, menampilkan:
  - Status koneksi OAuth + scope + masa berlaku token
  - 8 folder Drive yang tersinkron, dipetakan ke peran (Repositori TA / Jurnal Internal / Modul Kuliah / Inbox Submission)
  - Per-folder: jumlah file, jumlah terindeks, last-sync, status (Sehat / Perhatian / Real-time)
  - Pemetaan field metadata Drive → field sistem (judul, NIM, tahun, pembimbing, full-text)
  - Log aktivitas sinkron 24 jam (sukses / info / warning)
  - Tombol **Hubungkan Folder** untuk menambah folder baru

**Perubahan di layar yang sudah ada:**
- **Plagiasi Database Lokal** — header sekarang menyebut sumber `Google Drive · prodi-abi@drive · 2.408 file`
- **Cek Kesamaan Judul** — disebut indeks dari `/TA-ABI/*/Final` di Drive

**Catatan integrasi (untuk implementasi):**
- Webhook Drive aktif untuk folder Inbox → submission baru terdeteksi real-time
- Sinkron inkremental tiap 5 menit untuk folder repositori; full re-index nightly 03:00
- File rusak / gagal OCR ditandai di kolom "Note" agar admin bisa tindak lanjut

Mau saya tambahkan flow "saat mahasiswa submit, file disalin otomatis ke folder Drive Inbox" sebagai layar konfirmasi? Atau layar **error/recovery** kalau OAuth token expired?

## User

setiap akhir dari proses buat tombol download sehingga mahasiswa bisa mendownload laporan mereka yang pada bagian akhir akan di tandatangani oleh penanggung jawab pemeriksa dan koordinator prodi

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Selesai. Setiap tahap pemeriksaan kini punya tombol **Unduh Laporan**, dan ada layar baru **Berita Acara Final** dengan tanda tangan elektronik:

**Per tahap (tombol unduh di header):**
- Cek Kesamaan Judul → "Unduh PDF"
- Kelengkapan Berkas → "Unduh Laporan Tahap"
- Plagiasi Lokal → "Laporan"
- Plagiasi Eksternal → "Laporan PDF"

**Layar baru: Berita Acara Final**
- Pratinjau dokumen resmi: kop prodi + identitas mahasiswa + tabel rangkuman 4 tahap + paragraf penetapan
- Dua blok tanda tangan digital:
  - **Penanggung Jawab Pemeriksa** (Anita Permatasari)
  - **Koordinator Program Studi** (Dr. Sunarto)
- Tiap tanda tangan: QR code verifikasi + sertifikat BSrE + timestamp kriptografis
- Panel "Opsi Unduhan": Berita Acara final, 4 lampiran per tahap, plus paket lengkap ZIP
- Panel "Status Tanda Tangan" + "Kirim ke…" (email mahasiswa, pembimbing, folder Drive, print TU)

Mau saya tambahkan **flow approval admin** (modal "Tandatangani sekarang" dengan input PIN/OTP), atau **template email** otomatis yang dikirim saat berita acara di-generate?

