# Product Requirement Document (PRD)

## Website Resmi Program Studi Teknik Informatika

---

## 1. Project Overview & Objectives

Dokumen ini menetapkan spesifikasi fungsional dan teknis untuk pembangunan website Program Studi Teknik Informatika. Website ini dirancang dengan tema **Modern Tech & Clean** menggunakan dominasi warna putih/abu-abu terang dengan aksen **Electric Blue** dan **Slate Gray** untuk mencerminkan identitas prodi IT yang inovatif dan profesional.

### Tujuan Utama

- **Media Informasi**  
  Menyediakan informasi akademik, kurikulum, dan pengumuman yang selalu diperbarui bagi mahasiswa aktif.

- **Branding & Promosi**  
  Menampilkan profil dosen, fasilitas laboratorium, pencapaian prestasi, dan produk inovasi untuk menarik minat calon mahasiswa dan mitra industri.

- **Content Management System (CMS)**  
  Menyediakan panel admin yang aman bagi staf prodi untuk mengelola seluruh konten website tanpa perlu menyentuh kode program.

---

## 2. Spesifikasi Tech Stack

Aplikasi ini menggunakan arsitektur **Decoupled**, yaitu pemisahan antara front-end dan back-end, dengan teknologi berbasis JavaScript dan relational database.

| Komponen | Teknologi |
| --- | --- |
| Front-end | React.js, Vite, Tailwind CSS, Axios |
| Back-end | Node.js, Express.js |
| Database | MySQL |
| ORM / Query Builder | Sequelize atau Prisma |
| Autentikasi | JSON Web Token (JWT), bcrypt |

---

## 3. Arsitektur Data (MySQL Schema)

Berikut adalah rancangan struktur tabel MySQL yang dibutuhkan untuk mendukung seluruh fitur sistem.

```sql
-- 1. Tabel Users (Untuk Autentikasi Admin Staf Prodi)
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('superadmin', 'staff') DEFAULT 'staff',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Tabel Lecturers (Profil Dosen)
CREATE TABLE lecturers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nidn VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(150) NOT NULL,
  title VARCHAR(100), -- Gelar akademik
  expertise VARCHAR(255), -- Bidang Keahlian, contoh: Software Engineering, AI
  photo_url VARCHAR(255), -- Path penyimpanan file foto
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabel Articles (Berita & Pengumuman)
CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  category ENUM('berita', 'pengumuman') NOT NULL,
  image_url VARCHAR(255),
  author_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
);

-- 4. Tabel Innovations (Showcase Produk IT Mahasiswa/Dosen)
CREATE TABLE innovations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  developer VARCHAR(150) NOT NULL, -- Nama pembuat
  github_url VARCHAR(255),
  demo_url VARCHAR(255),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Tabel Documents (Pusat Unduhan Dokumen Akademik)
CREATE TABLE documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category ENUM('akademik', 'skripsi', 'form') NOT NULL,
  file_url VARCHAR(255) NOT NULL, -- Path penyimpanan file PDF/Docx
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 4. Lingkup Fitur & Fungsionalitas (Functional Requirements)

### A. Sisi Pengunjung (Public Portal - React.js)

#### Homepage

- Hero section interaktif berisi slogan prodi dan tombol CTA menuju profil.
- Komponen counter stats dinamis, seperti jumlah mahasiswa, dosen, lab, dan mitra.
- Grid layout yang menampilkan 3 berita/pengumuman terbaru.

#### Profil & Akademik

- Halaman statis Visi, Misi, dan Tujuan Prodi.
- Halaman Struktur Organisasi.
- Halaman Daftar Dosen yang dilengkapi fitur pencarian nama dosen.
- Halaman Kurikulum yang menampilkan tabel mata kuliah per semester secara interaktif.

#### Riset & Inovasi

- Informasi Laboratorium yang ada di prodi.
- Halaman Showcase produk inovasi berupa kartu digital yang berisi detail proyek dan tautan ke repositori kode GitHub.

#### Kemahasiswaan & Unduhan

- Informasi seputar Himpunan Mahasiswa Teknik Informatika (HMTI).
- Halaman Pusat Unduhan dokumen, di mana mahasiswa dapat mencari dan langsung mengunduh file panduan akademik atau formulir berformat PDF.

### B. Sisi Admin (CMS Panel - React.js & Node.js API)

#### Autentikasi Aman

- Halaman login admin menggunakan verifikasi token JWT.
- Token disimpan secara aman di sisi klien, menggunakan local storage atau secure cookie.

#### Dashboard

- Halaman ringkasan statistik jumlah total berita, dokumen, dosen, dan inovasi yang tersimpan di database.

#### Manajemen Berita & Pengumuman (CRUD)

- Form input menggunakan Rich Text Editor untuk kemudahan pemformatan teks.
- Fitur unggah gambar utama berita.

#### Manajemen Data Profil Dosen (CRUD)

- Form tambah/ubah data dosen.
- Validasi nomor NIDN.
- Fitur unggah foto profil.

#### Manajemen File Dokumen (CRUD)

- Fitur untuk mengunggah berkas akademis ke server back-end.
- Sistem otomatis mencatat path URL file ke dalam database MySQL.

---

## 5. Kriteria Non-Fungsional (Non-Functional Requirements)

### Keamanan (Security)

- Password wajib dienkripsi menggunakan bcrypt dengan salt rounds sebelum disimpan ke database MySQL.
- Setiap rute API untuk manipulasi data (`POST`, `PUT`, `DELETE`) wajib melewati middleware pengecekan JWT valid.

### Performa & Skalabilitas

- API pengambilan data berita dan dokumen wajib menerapkan pagination untuk mencegah beban query MySQL yang berlebih saat data sudah banyak.
- Aset gambar perlu dioptimasi atau dikompresi otomatis sebelum diunggah untuk mempertahankan load time website di bawah 3 detik.

### Desain & UI/UX

- Menerapkan prinsip kebersihan ruang desain atau whitespace yang lega khas tema teknologi modern.
- Sistem navigasi wajib 100% responsif dan nyaman diakses melalui smartphone, tablet, maupun desktop.

---

## 6. Struktur Direktori Proyek

Untuk menjaga keteraturan penulisan kode, proyek dipisahkan menjadi dua folder utama dengan struktur sebagai berikut.

```plaintext
ti-website-project/
├── backend/                       # Node.js + Express + MySQL
│   ├── config/                    # Konfigurasi koneksi database MySQL
│   ├── controllers/               # Logika bisnis dan pemrosesan query SQL
│   ├── middleware/                # Autentikasi JWT & validasi file upload (Multer)
│   ├── models/                    # Definisi skema tabel (Sequelize/Prisma)
│   ├── routes/                    # Handler endpoint API RESTful
│   ├── public/uploads/            # Penyimpanan file fisik, foto dosen, dan PDF
│   ├── .env                       # Environment variable: DB_USER, DB_PASS, JWT_SECRET
│   └── server.js                  # File utama untuk menjalankan server backend
│
└── frontend/                      # React.js + Tailwind CSS
    ├── public/                    # File statis frontend
    └── src/
        ├── components/            # Komponen UI global: Navbar, Footer, ProtectedRoute
        ├── pages/                 # Halaman utama: Home, AdminDashboard, Login
        ├── services/              # Konfigurasi Axios untuk koneksi ke API backend
        ├── App.jsx                # Routing halaman utama React
        └── main.jsx               # Entry point React
```

---

## 7. Penutup

Dokumen PRD ini telah siap dan bersifat final untuk dijadikan acuan blueprint pengerjaan website Program Studi Teknik Informatika. Pengembangan dapat dimulai dari pembuatan database MySQL sesuai skema di atas, kemudian dilanjutkan dengan inisialisasi folder `backend/` dan `frontend/` sesuai struktur proyek yang telah ditentukan.
