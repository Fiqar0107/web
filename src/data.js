export const submissions = [
  { id: "SBM-2026-0184", nim: "21080694076", name: "Dwi Ramadhani", title: "Strategi Penetrasi Pasar UMKM Batik ke Asia Tenggara melalui E-Commerce Lintas Batas", stage: "ext", progress: 90, similarity: 11, status: "review" },
  { id: "SBM-2026-0183", nim: "21080694058", name: "Aldi Prasetyo", title: "Pengaruh Kebijakan Tarif Impor Tiongkok terhadap Kinerja Eksportir Produk Tekstil di Jawa Timur", stage: "local", progress: 64, similarity: 18, status: "warn" },
  { id: "SBM-2026-0182", nim: "21080694101", name: "Nadia K. Putri", title: "Analisis Manajemen Rantai Pasok Halal pada Industri Makanan Beku Indonesia–Malaysia", stage: "docs", progress: 42, similarity: null, status: "draft" },
  { id: "SBM-2026-0181", nim: "21080694022", name: "Bayu Setiawan", title: "Diplomasi Ekonomi ASEAN dan Daya Saing UKM Furniture Jepara di Pasar Eropa", stage: "title", progress: 22, similarity: 31, status: "bad" },
  { id: "SBM-2026-0180", nim: "21080694014", name: "Salwa Maharani", title: "Adopsi Fintech B2B oleh Eksportir Kopi Spesialti Indonesia ke Pasar Jepang", stage: "done", progress: 100, similarity: 7, status: "ok" },
  { id: "SBM-2026-0179", nim: "21080694063", name: "Rizky Pratama", title: "Pengaruh Sertifikasi ISO 14001 terhadap Ekspor Industri Furnitur Indonesia", stage: "done", progress: 100, similarity: 9, status: "ok" },
  { id: "SBM-2026-0178", nim: "21080694089", name: "Intan Lestari", title: "Strategi Internasionalisasi Brand Skincare Lokal melalui Marketplace Korea Selatan", stage: "ext", progress: 88, similarity: 14, status: "review" },
]

export const stageLabel = {
  title: "Cek Judul",
  docs: "Kelengkapan",
  local: "Plagiasi Lokal",
  ext: "Plagiasi Eksternal",
  done: "Selesai",
  review: "Direview",
}

export const stageBadge = {
  title: "info", docs: "info", local: "warn", ext: "violet", done: "ok", review: "info",
}

export const simBadge = (s) => s == null ? "neutral" : s >= 25 ? "bad" : s >= 15 ? "warn" : "ok"
