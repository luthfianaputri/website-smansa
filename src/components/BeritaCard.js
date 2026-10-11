import Link from "next/link";
import { formatTanggal } from "@/data/berita";

export default function BeritaCard({ item }) {
  return (
    <article className="news-card">
      <Link
        href={`/berita/${item.id}`}
        className="news-card-link"
      >
        <div
          className="news-image"
          style={{
            backgroundImage: `url("${item.gambar}")`,
          }}
          role="img"
          aria-label={item.judul}
        >
          <span className="news-category">
            {item.kategori}
          </span>
        </div>

        <div className="news-content">
          <span className="news-date">
            {formatTanggal(item.tanggal)}
          </span>

          <h3>{item.judul}</h3>

          <p>{item.ringkasan}</p>

          <span className="read-more">
            Baca selengkapnya →
          </span>
        </div>
      </Link>
    </article>
  );
}