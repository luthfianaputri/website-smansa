
"use client";

import { useMemo, useState } from "react";
import { berita, kategoriBerita } from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

export default function NewsExplorer() {
  const [keyword, setKeyword] = useState("");
  const [kategori, setKategori] = useState("Semua");

  const hasil = useMemo(() => {
    const query = keyword.toLowerCase().trim();

    return berita.filter((item) => {
      const cocokKategori =
        kategori === "Semua" || item.kategori === kategori;

      const cocokKata =
        item.judul.toLowerCase().includes(query) ||
        item.ringkasan.toLowerCase().includes(query) ||
        item.kategori.toLowerCase().includes(query);

      return cocokKategori && cocokKata;
    });
  }, [keyword, kategori]);

  return (
    <>
      <div className="news-tools">
        <input
          className="search-input"
          type="search"
          placeholder="Cari judul atau topik berita..."
          aria-label="Cari berita"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>

      <div className="filter-list" aria-label="Filter kategori">
        {kategoriBerita.map((nama) => (
          <button
            key={nama}
            type="button"
            className={`filter-button ${
              kategori === nama ? "selected" : ""
            }`}
            aria-pressed={kategori === nama}
            onClick={() => setKategori(nama)}
          >
            {nama}
          </button>
        ))}
      </div>

      <p className="prose" aria-live="polite">
        Menampilkan {hasil.length} berita
      </p>

      <div className="news-grid">
        {hasil.length > 0 ? (
          hasil.map((item) => (
            <BeritaCard key={item.id} item={item} />
          ))
        ) : (
          <div className="empty-state">
            <h3>Berita tidak ditemukan</h3>
            <p>Coba kata kunci atau kategori yang berbeda.</p>
          </div>
        )}
      </div>
    </>
  );
}