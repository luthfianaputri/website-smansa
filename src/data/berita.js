
export const berita = [
  {
    id: "membangun-generasi-berkarakter-dan-berintegritas",
    judul: "Launching Laboratorium Sekolah Berintegritas SMA Negeri 1 Magelang",
    kategori: "Akademik",
    tanggal: "2026-09-14",
    ringkasan:
      "SMA Negeri 1 Magelang sebagai peraih penghargaan Peringkat 3 Terbaik Sekolah Berintegritas di Jawa Tengah menunjukkan komitmen dalam membangun generasi berkarakter dan berintegritas.",
    gambar: "/images/lab.png",
    label: "Generasi berkarakter dan berintegritas",
  },
  {
    id: "semangat-prestasi",
    judul: "Daftar Prestasi Tahun Pelajaran 2026/2027",
    kategori: "Prestasi",
    tanggal: "2026-09-10",
    ringkasan:
      "Pendidikan bukan hanya tentang nilai, tetapi juga tentang karakter, konsistensi, dan semangat untuk berkembang.",
    gambar: "/images/prestasi.jpeg",
    label: "Pengembangan siswa",
  },
  {
    id: "sekolah-peduli-lingkungan",
    judul: "SMANSA HEALTHY DAY",
    kategori: "Kegiatan",
    tanggal: "2026-08-28",
    ringkasan:
      "Kebiasaan sederhana dalam menjaga kebersihan dapat membangun lingkungan belajar yang nyaman.",
    gambar: "/images/SHD.jpg",
    label: "Peduli lingkungan",
  },
  {
    id: "kegiatan-edukasi",
    judul: "Pameran Edukasi Magelang",
    kategori: "Kegiatan",
    tanggal: "2026-08-20",
    ringkasan:
      "Kegiatan pameran menjadi ruang bagi siswa untuk mengeksplorasi dan mencari tahu perguruan tinggi yang diinginkan.",
    gambar: "/images/pem.jpg",
    label: "Edukasi",
  },
  {
    id: "penguatan-pembelajaran",
    judul: "Pertemuan Guru Wali",
    kategori: "Akademik",
    tanggal: "2026-09-12",
    ringkasan:
      "Guru wali mendampingi siswa dalam melengkapi biodata pada aplikasi Sistem Guru Wali SMA Negeri 1 Magelang serta memberikan bimbingan yang diperlukan.",
    gambar: "/images/wali kelas.jpeg",
    label: "Pembelajaran",
  },
{
    id: "penguatan-pembelajaran",
    judul: "Masa Peenerimaan Tamu Ambalan",
    kategori: "Kegiatan",
    tanggal: "2026-o8-12",
    ringkasan:
      "Peserta didik baru melakukan kegiatan Masa Penerimaan Tamu Ambalan sebagai bentuk diterimanya di Kepramukaan sekolah.",
    gambar: "/images/wali kelas.jpeg",
    label: "Pembelajaran",
  },
];

export const kategoriBerita = [
  "Semua",
  "Akademik",
  "Prestasi",
  "Kegiatan",
];

export function formatTanggal(tanggal) {
  return new Date(`${tanggal}T12:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}