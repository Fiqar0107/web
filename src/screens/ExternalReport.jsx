import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context'
import { Icon, Ring, Topbar, Sidebar, SubBar } from '../components/shared'

const externalSources = [
  { rank: 1, sim: 9.1, host: "repository.unri.ac.id", title: "Pengaruh Strategi Cross-Border E-Commerce terhadap UMKM Indonesia", year: 2024, type: "Repositori", color: "s1" },
  { rank: 2, sim: 6.4, host: "sciencedirect.com", title: "Cross-border e-commerce adoption among Southeast Asian SMEs", year: 2023, type: "Jurnal", color: "s2" },
  { rank: 3, sim: 4.8, host: "kemendag.go.id", title: "Outlook Perdagangan Lintas Batas ASEAN 2024", year: 2024, type: "Publikasi", color: "s3" },
  { rank: 4, sim: 2.1, host: "wikipedia.org", title: "E-commerce in Indonesia", year: 2025, type: "Web", color: "s4" },
  { rank: 5, sim: 1.7, host: "researchgate.net", title: "Penetrasi Pasar UMKM Batik di Pasar ASEAN", year: 2022, type: "Jurnal", color: "s4" },
  { rank: 6, sim: 1.2, host: "kompas.com", title: "Geliat UMKM batik tembus pasar Singapura", year: 2024, type: "Berita", color: "s4" },
]

function DocContent() {
  return (
    <>
      <h3 style={{ fontSize: 14, margin: "0 0 8px", fontWeight: 600 }}>BAB II · TINJAUAN PUSTAKA</h3>
      <p>Internasionalisasi UMKM kini ditopang oleh kanal digital yang memangkas hambatan masuk pasar luar negeri. <span className="matched s1">Berbagai studi menunjukkan bahwa adopsi e-commerce lintas batas memungkinkan UMKM menjangkau konsumen mancanegara tanpa harus membangun jaringan distribusi fisik di negara tujuan.</span> Hal ini memberikan ruang ekspansi yang sebelumnya hanya dimiliki oleh pelaku skala besar.</p>
      <p><span className="matched s2 selected">Penetrasi pasar melalui platform marketplace memberi UMKM keunggulan biaya, jangkauan geografis, serta umpan balik konsumen yang dapat dimanfaatkan untuk iterasi produk secara cepat.</span> Selain itu, infrastruktur logistik regional di Asia Tenggara mengalami peningkatan signifikan sejak 2020.</p>
      <p>Karakteristik pasar Asia Tenggara — populasi muda, penetrasi smartphone yang tinggi, serta literasi digital yang terus meningkat — menjadikannya target alami bagi UMKM Indonesia. <span className="matched s3">Data Kementerian Perdagangan menunjukkan transaksi lintas batas dari Indonesia ke negara-negara ASEAN tumbuh rata-rata 28% per tahun pada periode 2021–2024.</span></p>
      <h3 style={{ fontSize: 14, margin: "16px 0 8px", fontWeight: 600 }}>2.1 Strategi Penetrasi Pasar</h3>
      <p>Konsep penetrasi pasar dalam literatur pemasaran internasional umumnya merujuk pada upaya meningkatkan pangsa pasar pada kategori produk yang sudah ada. <span className="matched s1">Pada konteks UMKM, strategi penetrasi pasar mencakup penyesuaian harga, intensifikasi promosi digital, serta optimasi konten produk agar relevan dengan preferensi konsumen lokal di pasar tujuan.</span></p>
      <p>Untuk produk batik, faktor budaya dan persepsi nilai menjadi krusial. <span className="matched s2">Konsumen di Singapura, Malaysia, dan Filipina menunjukkan kesediaan membayar lebih tinggi untuk produk batik tulis dengan narasi asal-usul yang jelas.</span></p>
    </>
  )
}

function ThreePaneReader({ role }) {
  const [active, setActive] = useState(1)
  const navigate = useNavigate()

  return (
    <div className="app">
      <Topbar active="submission" role={role} />
      <div className="shell">
        <Sidebar active="ext" role={role} />
        <div className="main">
          <SubBar crumbs={["Pengajuan #SBM-2026-0184", "Plagiasi · Eksternal"]} meta="via Turnitin · selesai 6 menit lalu · ID 1834-A09F" />
          <div className="workspace" style={{ padding: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", gap: 12, alignItems: "center", background: "var(--surface)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Ring pct={23} color="var(--amber)" size={48} stroke={5} />
                <div>
                  <div className="smallcaps">Similarity Eksternal</div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>23% — di bawah threshold prodi (≤ 25%)</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{externalSources.length} sumber tercocok · 38 kalimat ditandai · 412 hal · 18.241 kata</div>
                </div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                <button className="btn"><Icon name="download" size={13} /> Laporan PDF</button>
                <button className="btn"><Icon name="link" size={13} /> Bagikan</button>
                <button className="btn primary" onClick={() => navigate('/submission/final')}>
                  <Icon name="check" size={13} /> Lihat Berita Acara
                </button>
              </div>
            </div>

            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "240px 1fr 320px", minHeight: 0 }}>
              <div style={{ borderRight: "1px solid var(--border)", background: "var(--surface)", overflow: "auto" }}>
                <div className="card-head" style={{ borderBottom: "1px solid var(--border)" }}>Filter Sumber</div>
                <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div>
                    <div className="smallcaps" style={{ marginBottom: 6 }}>Tipe Sumber</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {[["Repositori akademik", 12, true], ["Jurnal terindeks", 18, true], ["Publikasi resmi", 4, true], ["Web umum", 6, false], ["Berita", 3, false]].map(([n, c, on]) => (
                        <label key={n} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, padding: "3px 0" }}>
                          <input type="checkbox" defaultChecked={on} />
                          <span style={{ flex: 1 }}>{n}</span>
                          <span className="mono" style={{ color: "var(--text-subtle)" }}>{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="hr" />
                  <div>
                    <div className="smallcaps" style={{ marginBottom: 6 }}>Eksklusi</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 0" }}><input type="checkbox" defaultChecked /> Kutipan langsung</label>
                      <label style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 0" }}><input type="checkbox" defaultChecked /> Daftar pustaka</label>
                      <label style={{ display: "flex", alignItems: "center", gap: 8, padding: "3px 0" }}><input type="checkbox" /> Frasa &lt; 8 kata</label>
                    </div>
                  </div>
                  <div className="hr" />
                  <div>
                    <div className="smallcaps" style={{ marginBottom: 6 }}>Daftar Bab</div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {[["Sampul & Abstrak", 0], ["Bab 1", 4], ["Bab 2", 18], ["Bab 3", 6], ["Bab 4", 7], ["Bab 5", 1], ["Daftar Pustaka", 2]].map(([b, n]) => (
                        <div key={b} style={{ display: "flex", padding: "4px 6px", borderRadius: 4, fontSize: 12, cursor: "pointer", background: b === "Bab 2" ? "var(--accent-tint)" : "transparent", color: b === "Bab 2" ? "var(--primary)" : "inherit" }}>
                          <span>{b}</span><span className="mono" style={{ marginLeft: "auto" }}>{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: "var(--surface)", overflow: "auto", padding: "20px 36px" }}>
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, fontSize: 11, color: "var(--text-muted)" }}>
                    <span className="mono">hal. 18 / 210</span>
                    <span>·</span>
                    <span>Bab 2 · Tinjauan Pustaka</span>
                    <span style={{ marginLeft: "auto" }}>3 kalimat tertanda di halaman ini</span>
                  </div>
                  <div className="doc-reader"><DocContent /></div>
                  <div style={{ display: "flex", gap: 6, marginTop: 24, justifyContent: "center", color: "var(--text-muted)", fontSize: 11 }}>
                    <button className="btn subtle sm"><Icon name="chevron" style={{ transform: "rotate(180deg)" }} size={12} /> Sebelumnya</button>
                    <span style={{ alignSelf: "center" }} className="mono">18 / 210</span>
                    <button className="btn subtle sm">Berikutnya <Icon name="chevron" size={12} /></button>
                  </div>
                </div>
              </div>

              <div style={{ borderLeft: "1px solid var(--border)", background: "var(--surface)", display: "flex", flexDirection: "column", minHeight: 0 }}>
                <div className="card-head" style={{ borderBottom: "1px solid var(--border)" }}>
                  Sumber · {externalSources.length}
                  <div className="actions">
                    <button className="btn subtle sm"><Icon name="sort" size={12} /></button>
                  </div>
                </div>
                <div className="source-list" style={{ overflow: "auto", flex: 1 }}>
                  {externalSources.map((s, i) => (
                    <div key={s.rank} className={"source-item " + s.color + (i === active ? " active" : "")} onClick={() => setActive(i)}>
                      <span className="pct">{s.sim}%</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 500, lineHeight: 1.35 }}>{s.title}</div>
                        <div className="src-meta mono">{s.host} · {s.type} · {s.year}</div>
                      </div>
                      <button className="btn subtle sm" aria-label="lihat sumber"><Icon name="link" size={11} /></button>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 12, borderTop: "1px solid var(--border)", fontSize: 11, color: "var(--text-muted)", background: "var(--surface-2)" }}>
                  Sumber yang tidak dapat diakses publik ditampilkan tanpa tautan langsung.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnnotatedReader({ role }) {
  const navigate = useNavigate()
  return (
    <div className="app">
      <Topbar active="submission" role={role} />
      <div className="shell">
        <Sidebar active="ext" role={role} />
        <div className="main">
          <SubBar crumbs={["Antrian Verifikasi", "SBM-2026-0184", "Eksternal"]} meta="via Turnitin · ID 1834-A09F · diverifikasi oleh Admin" />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Laporan Plagiasi Eksternal · Annotated</h1>
                <div className="desc">Tampilan terpadu dokumen + komentar verifikator + sumber dalam satu kolom.</div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="chat" size={13} /> Komentar (5)</button>
                <button className="btn"><Icon name="download" size={13} /> Laporan PDF</button>
                <button className="btn primary" onClick={() => navigate('/submission/final')}>
                  <Icon name="flag" size={13} /> Setujui & Lihat Berita Acara
                </button>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 12 }}>
              <div className="card-body" style={{ display: "grid", gridTemplateColumns: "auto auto 1fr auto", gap: 22, alignItems: "center" }}>
                <Ring pct={23} color="var(--amber)" size={64} stroke={6} />
                <div>
                  <div className="smallcaps">Similarity</div>
                  <div style={{ fontSize: 22, fontWeight: 600, fontFamily: "var(--ff-mono)" }}>23<span style={{ fontSize: 14, color: "var(--text-muted)" }}>%</span></div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>threshold ≤ 25%</div>
                </div>
                <div>
                  <div className="smallcaps" style={{ marginBottom: 6 }}>Komposisi Sumber</div>
                  <div style={{ display: "flex", height: 14, borderRadius: 999, overflow: "hidden", border: "1px solid var(--border)" }}>
                    <div style={{ width: "9.1%", background: "oklch(.6 .18 25)" }} title="Repositori 9.1%" />
                    <div style={{ width: "6.4%", background: "oklch(.7 .14 75)" }} title="Jurnal 6.4%" />
                    <div style={{ width: "4.8%", background: "oklch(.5 .14 290)" }} title="Publikasi 4.8%" />
                    <div style={{ width: "2.7%", background: "oklch(.55 .12 195)" }} title="Web 2.7%" />
                    <div style={{ flex: 1, background: "var(--surface-3)" }} />
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8, fontSize: 11 }}>
                    <span><span style={{ display: "inline-block", width: 8, height: 8, background: "oklch(.6 .18 25)", borderRadius: 2, marginRight: 4 }} />Repositori 9,1%</span>
                    <span><span style={{ display: "inline-block", width: 8, height: 8, background: "oklch(.7 .14 75)", borderRadius: 2, marginRight: 4 }} />Jurnal 6,4%</span>
                    <span><span style={{ display: "inline-block", width: 8, height: 8, background: "oklch(.5 .14 290)", borderRadius: 2, marginRight: 4 }} />Publikasi 4,8%</span>
                    <span><span style={{ display: "inline-block", width: 8, height: 8, background: "oklch(.55 .12 195)", borderRadius: 2, marginRight: 4 }} />Web 2,7%</span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span className="badge ok"><Icon name="check" size={11} /> Lolos ambang batas</span>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--text-subtle)", marginTop: 6 }}>
                    Vrf: admin@uni.ac.id<br />10 Mei 2026 09:48
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 12 }}>
              <div className="card">
                <div className="card-head">Bab 2 · Tinjauan Pustaka <span className="sub">· hal. 18</span></div>
                <div className="card-body" style={{ position: "relative", paddingRight: 36 }}>
                  <div className="doc-reader">
                    <p>Internasionalisasi UMKM kini ditopang oleh kanal digital. <span className="matched s1" style={{ position: "relative" }}>Berbagai studi menunjukkan bahwa adopsi e-commerce lintas batas memungkinkan UMKM menjangkau konsumen mancanegara tanpa harus membangun jaringan distribusi fisik.<span style={{ position: "absolute", right: -28, top: 0, width: 22, height: 18, borderRadius: 4, background: "var(--red)", color: "white", fontFamily: "var(--ff-mono)", fontSize: 10, display: "inline-grid", placeItems: "center" }}>1</span></span></p>
                    <p><span className="matched s2 selected" style={{ position: "relative" }}>Penetrasi pasar melalui platform marketplace memberi UMKM keunggulan biaya, jangkauan geografis, serta umpan balik konsumen yang dapat dimanfaatkan untuk iterasi produk secara cepat.<span style={{ position: "absolute", right: -28, top: 0, width: 22, height: 18, borderRadius: 4, background: "var(--amber)", color: "white", fontFamily: "var(--ff-mono)", fontSize: 10, display: "inline-grid", placeItems: "center" }}>2</span></span></p>
                    <p>Karakteristik pasar Asia Tenggara menjadikannya target alami bagi UMKM Indonesia. <span className="matched s3" style={{ position: "relative" }}>Data Kementerian Perdagangan menunjukkan transaksi lintas batas dari Indonesia ke negara-negara ASEAN tumbuh rata-rata 28% per tahun pada periode 2021–2024.<span style={{ position: "absolute", right: -28, top: 0, width: 22, height: 18, borderRadius: 4, background: "var(--violet)", color: "white", fontFamily: "var(--ff-mono)", fontSize: 10, display: "inline-grid", placeItems: "center" }}>3</span></span></p>
                  </div>
                  <div className="hr" style={{ margin: "16px 0 12px" }} />
                  <div className="smallcaps" style={{ marginBottom: 8 }}>Catatan Verifikator</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { who: "Admin Prodi", t: "09:46", c: "Kalimat #2 mirip dengan publikasi 2023. Pertimbangkan parafrase atau tambahkan sitasi langsung." },
                      { who: "Dr. Wulandari", t: "09:51", c: "Setuju. Untuk kalimat #3, tambahkan footnote ke laporan Kemendag 2024." },
                    ].map((c, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, padding: 10, background: "var(--surface-2)", borderRadius: 6, fontSize: 12 }}>
                        <div className="avatar" style={{ flex: "0 0 22px" }}>{c.who.slice(0, 2)}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                            <strong>{c.who}</strong>
                            <span className="mono" style={{ color: "var(--text-subtle)", fontSize: 10.5 }}>{c.t}</span>
                          </div>
                          <div>{c.c}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card" style={{ alignSelf: "start" }}>
                <div className="card-head">Sumber Terdeteksi</div>
                <div className="source-list">
                  {externalSources.map((s, i) => (
                    <div key={s.rank} className={"source-item " + s.color + (i === 1 ? " active" : "")}>
                      <span className="pct">{s.sim}%</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 500, lineHeight: 1.3 }}>{s.title}</div>
                        <div className="src-meta mono">{s.host} · {s.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ExternalReportScreen() {
  const { role } = useApp()
  return role === "admin" ? <AnnotatedReader role={role} /> : <ThreePaneReader role={role} />
}
