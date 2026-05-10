import { useNavigate } from 'react-router-dom'
import { useApp } from '../context'
import { Icon, Ring, Topbar, Sidebar, SubBar } from '../components/shared'

const myTitle = "Strategi Penetrasi Pasar UMKM Batik ke Asia Tenggara melalui E-Commerce Lintas Batas"
const matches = [
  { id: "TA-2024-0712", year: 2024, sim: 64, title: "Strategi Penetrasi Pasar UMKM Tenun ke Asia Tenggara melalui Marketplace Lintas Batas", author: "Khairunnisa Ardiyanti", supervisor: "Dr. Wulandari", terms: ["UMKM","Penetrasi Pasar","Asia Tenggara","Lintas Batas"] },
  { id: "TA-2023-0388", year: 2023, sim: 47, title: "Penetrasi Pasar Produk Batik di Singapura melalui E-Commerce", author: "Bima Yudha Pratama", supervisor: "Drs. Hendra S.", terms: ["Batik","Penetrasi Pasar","E-Commerce","Singapura"] },
  { id: "TA-2024-0511", year: 2024, sim: 39, title: "Strategi UMKM Kerajinan Indonesia Memasuki Pasar Malaysia via Shopee Cross-Border", author: "Maulida Cahya P.", supervisor: "Dr. Tantra", terms: ["UMKM","Malaysia","Cross-Border","Shopee"] },
  { id: "TA-2022-0214", year: 2022, sim: 31, title: "E-Commerce sebagai Sarana Internasionalisasi UMKM Fashion Lokal di Vietnam", author: "Hafiz Rahmadhan", supervisor: "Dr. Sari", terms: ["UMKM","E-Commerce","Vietnam","Fashion"] },
  { id: "TA-2024-0633", year: 2024, sim: 28, title: "Analisis Strategi Lintas Batas Industri Tekstil Indonesia ke Filipina", author: "Putri Anjani", supervisor: "Drs. Hendra S.", terms: ["Tekstil","Lintas Batas","Filipina"] },
  { id: "TA-2023-0905", year: 2023, sim: 22, title: "Optimalisasi Rantai Pasok Batik Pekalongan untuk Pasar ASEAN", author: "Galih Pradipta", supervisor: "Dr. Wulandari", terms: ["Batik","Rantai Pasok","ASEAN"] },
]

const hlMap = { "UMKM": "hl-1", "Batik": "hl-2", "Asia Tenggara": "hl-3", "E-Commerce": "hl-4", "Lintas Batas": "hl-3", "Penetrasi Pasar": "hl-1" }

function renderTitleWithHL(txt) {
  let out = txt
  Object.entries(hlMap).forEach(([k, c]) => {
    out = out.replace(new RegExp(`(${k})`, "g"), `<mark class="${c}">$1</mark>`)
  })
  return <span dangerouslySetInnerHTML={{ __html: out }} />
}

export default function TitleCheckScreen() {
  const { role } = useApp()
  const navigate = useNavigate()

  return (
    <div className="app">
      <Topbar active="submission" role={role} />
      <div className="shell">
        <Sidebar active="title" role={role} />
        <div className="main">
          <SubBar crumbs={["Pengajuan #SBM-2026-0184", "Cek Kesamaan Judul"]} meta="Selesai · 4,2 detik · 412 judul dibandingkan" />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Hasil Cek Kesamaan Judul</h1>
                <div className="desc">
                  Dibandingkan terhadap repositori judul prodi 2018–2025 — diindeks dari{' '}
                  <span className="mono" style={{ color: "var(--text)" }}>Google Drive · /TA-ABI/*/Final</span>.
                </div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="download" size={13} /> Unduh PDF</button>
                <button className="btn"><Icon name="refresh" size={13} /> Cek Ulang</button>
                <button className="btn primary" onClick={() => navigate('/submission/docs')}>
                  Lanjut: Berkas <Icon name="arrow" size={13} />
                </button>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 12 }}>
              <div className="card-body" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, alignItems: "center" }}>
                <Ring pct={64} color="var(--amber)" size={72} stroke={7} />
                <div>
                  <div className="smallcaps" style={{ marginBottom: 4 }}>Judul Anda</div>
                  <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4, marginBottom: 8 }}>
                    {renderTitleWithHL(myTitle)}
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {["UMKM","Batik","E-Commerce Lintas Batas","Penetrasi Pasar","ASEAN"].map((k) =>
                      <span key={k} className="badge neutral">{k}</span>)}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="smallcaps">Status</div>
                  <span className="badge warn" style={{ marginTop: 4 }}>
                    <Icon name="warn" size={11} /> Perlu Tinjau
                  </span>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6, maxWidth: 200 }}>
                    1 judul lampau dengan kesamaan ≥ 60%. Dianjurkan revisi judul atau konsultasi pembimbing.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 12 }}>
              <div className="card">
                <div className="card-head">
                  Judul Mirip · Database Prodi
                  <span className="sub">· {matches.length} hasil</span>
                  <div className="actions">
                    <button className="btn subtle sm"><Icon name="filter" size={12} /> Tahun: Semua</button>
                    <button className="btn subtle sm"><Icon name="sort" size={12} /> Similarity ↓</button>
                  </div>
                </div>
                <div className="card-body flush">
                  <table className="tbl">
                    <thead>
                      <tr>
                        <th style={{ width: 70 }}>Sim.</th>
                        <th style={{ width: 120 }}>ID</th>
                        <th>Judul · Penulis</th>
                        <th style={{ width: 70 }}>Tahun</th>
                        <th style={{ width: 50 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {matches.map((m) => (
                        <tr key={m.id}>
                          <td>
                            <span className={"badge " + (m.sim >= 60 ? "bad" : m.sim >= 30 ? "warn" : "ok")}>
                              <span className="mono">{m.sim}%</span>
                            </span>
                          </td>
                          <td className="mono">{m.id}</td>
                          <td>
                            <div style={{ fontWeight: 500, lineHeight: 1.4 }}>{renderTitleWithHL(m.title)}</div>
                            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                              {m.author} · {m.supervisor}
                            </div>
                          </td>
                          <td className="mono num">{m.year}</td>
                          <td>
                            <button className="btn subtle sm" aria-label="lihat detail"><Icon name="eye" size={12} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card">
                  <div className="card-head">Distribusi Similarity</div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { range: "60–100%", n: 1, c: "bad" },
                      { range: "30–59%", n: 3, c: "warn" },
                      { range: "10–29%", n: 12, c: "" },
                      { range: "0–9%", n: 396, c: "ok" },
                    ].map((r) => (
                      <div key={r.range}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, marginBottom: 4 }}>
                          <span>{r.range}</span>
                          <span className="mono num" style={{ color: "var(--text-muted)" }}>{r.n}</span>
                        </div>
                        <div className={"bar " + r.c}>
                          <span style={{ width: Math.max(2, (r.n / 412) * 100) + "%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <div className="card-head">Kata Kunci Bertabrakan</div>
                  <div className="card-body" style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {[
                      ["UMKM", 18], ["Batik", 11], ["Penetrasi Pasar", 7],
                      ["E-Commerce", 14], ["Lintas Batas", 4], ["ASEAN", 9], ["Asia Tenggara", 6],
                    ].map(([k, n]) => (
                      <span key={k} className="badge neutral">
                        {k} <span className="mono" style={{ color: "var(--text-subtle)" }}>{n}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
