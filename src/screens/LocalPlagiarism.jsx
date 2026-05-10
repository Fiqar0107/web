import { useNavigate } from 'react-router-dom'
import { useApp } from '../context'
import { Icon, Ring, Topbar, Sidebar, SubBar } from '../components/shared'

const sources = [
  { rank: 1, sim: 8.2, type: "TA · 2024", id: "TA-2024-0712", name: "Khairunnisa Ardiyanti", title: "Strategi Penetrasi Pasar UMKM Tenun ke Asia Tenggara…", color: "s1", matches: 14 },
  { rank: 2, sim: 4.6, type: "TA · 2023", id: "TA-2023-0388", name: "Bima Yudha Pratama", title: "Penetrasi Pasar Produk Batik di Singapura melalui E-Commerce", color: "s2", matches: 9 },
  { rank: 3, sim: 2.8, type: "Jurnal Internal · 2025", id: "JBI-25-04", name: "Wulandari, R.", title: "Cross-Border E-Commerce dan Internasionalisasi UMKM Tekstil", color: "s3", matches: 6 },
  { rank: 4, sim: 1.9, type: "Modul Kuliah", id: "MK-EBI-301", name: "Ekspor-Impor Lanjutan", title: "Bab 4: Strategi Penetrasi Pasar Internasional", color: "s4", matches: 5 },
]

const sourceColor = { s1: "var(--red)", s2: "var(--amber)", s3: "var(--violet)", s4: "var(--green)" }

export default function LocalPlagiarismScreen() {
  const { role } = useApp()
  const navigate = useNavigate()

  return (
    <div className="app">
      <Topbar active="submission" role={role} />
      <div className="shell">
        <Sidebar active="local" role={role} />
        <div className="main">
          <SubBar crumbs={["Pengajuan #SBM-2026-0184", "Plagiasi · Database Lokal"]} meta="Diproses 3,4 menit · 2.408 file dari Google Drive" />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Plagiasi Database Lokal</h1>
                <div className="desc">
                  Sumber data:{' '}
                  <span className="mono" style={{ color: "var(--text)" }}>Google Drive · prodi-abi@drive</span>
                  {' '}· 2.408 file (TA prodi 2018–2025, jurnal internal, modul kuliah).
                </div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="download" size={13} /> Laporan</button>
                <button className="btn primary" onClick={() => navigate('/submission/external')}>
                  Lanjut: Plagiasi Eksternal <Icon name="arrow" size={13} />
                </button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
              <div className="kpi"><span className="label">Skor Total</span><span className="value">17,5<span style={{ fontSize: 14, color: "var(--text-muted)" }}>%</span></span><span className="delta">Threshold prodi: ≤ 25%</span></div>
              <div className="kpi"><span className="label">Sumber Cocok</span><span className="value">{sources.length}</span><span className="delta">dari 2.184 dokumen</span></div>
              <div className="kpi"><span className="label">Kalimat Bertanda</span><span className="value">34</span><span className="delta">8,4% dari total kalimat</span></div>
              <div className="kpi"><span className="label">Status</span><span className="value" style={{ fontSize: 16, color: "var(--amber)" }}>Perlu Tinjau</span><span className="delta">1 sumber ≥ 5%</span></div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 12 }}>
              <div className="card">
                <div className="card-head">
                  Sumber Tercocok
                  <span className="sub">· peringkat berdasarkan kontribusi</span>
                </div>
                <div className="card-body flush">
                  <table className="tbl">
                    <thead>
                      <tr>
                        <th style={{ width: 50 }}>#</th>
                        <th style={{ width: 80 }}>Kontrib.</th>
                        <th>Sumber</th>
                        <th style={{ width: 110 }}>Tipe</th>
                        <th style={{ width: 70 }}>Cocok</th>
                        <th style={{ width: 60 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sources.map((s) => (
                        <tr key={s.id}>
                          <td className="mono">{s.rank}</td>
                          <td>
                            <span className={"badge " + (s.sim >= 5 ? "warn" : "ok")}><span className="mono">{s.sim}%</span></span>
                          </td>
                          <td>
                            <div style={{ fontWeight: 500, lineHeight: 1.4, display: "flex", alignItems: "center", gap: 6 }}>
                              <span style={{ width: 8, height: 14, borderRadius: 2, background: sourceColor[s.color], flexShrink: 0 }} />
                              {s.title}
                            </div>
                            <div className="mono" style={{ fontSize: 10.5, color: "var(--text-muted)", marginTop: 2 }}>
                              {s.id} · {s.name}
                            </div>
                          </td>
                          <td className="muted" style={{ fontSize: 11 }}>{s.type}</td>
                          <td className="mono num">{s.matches}</td>
                          <td><button className="btn subtle sm"><Icon name="eye" size={12} /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card">
                  <div className="card-head">Skor Komposit</div>
                  <div className="card-body" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <Ring pct={17.5} color="var(--amber)" size={80} stroke={8} />
                    <div style={{ fontSize: 12 }}>
                      <div style={{ fontWeight: 600 }}>17,5% kemiripan</div>
                      <div style={{ color: "var(--text-muted)" }}>Aman bila ≤ 25% dan tiap sumber ≤ 5%.</div>
                      <div style={{ marginTop: 6 }}>
                        <span className="badge warn">1 sumber melewati 5%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">Distribusi per Bab</div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { b: "Bab 1 — Pendahuluan", p: 9 },
                      { b: "Bab 2 — Tinjauan Pustaka", p: 38, c: "warn" },
                      { b: "Bab 3 — Metode", p: 21 },
                      { b: "Bab 4 — Hasil", p: 14 },
                      { b: "Bab 5 — Kesimpulan", p: 6, c: "ok" },
                      { b: "Daftar Pustaka", p: 12 },
                    ].map((r) => (
                      <div key={r.b}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, marginBottom: 4 }}>
                          <span>{r.b}</span><span className="mono num" style={{ color: "var(--text-muted)" }}>{r.p}%</span>
                        </div>
                        <div className={"bar " + (r.c || "")}><span style={{ width: r.p + "%" }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 12 }}>
              <div className="card-head">
                Cuplikan Kalimat Bertanda
                <span className="sub">· klik untuk membuka pembanding</span>
                <div className="actions">
                  <span className="badge" style={{ background: "oklch(.92 .07 25 / .55)", color: "var(--text)" }}>Sumber 1</span>
                  <span className="badge" style={{ background: "oklch(.92 .07 75 / .55)", color: "var(--text)" }}>Sumber 2</span>
                  <span className="badge" style={{ background: "oklch(.92 .07 290 / .55)", color: "var(--text)" }}>Sumber 3</span>
                </div>
              </div>
              <div className="card-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <div className="smallcaps" style={{ marginBottom: 6 }}>Dokumen Anda · hal. 23</div>
                  <div className="doc-reader">
                    <p>UMKM batik di Indonesia menghadapi tantangan dalam memperluas pangsa pasar luar negeri akibat keterbatasan akses logistik. <span className="matched s1">Strategi penetrasi pasar melalui platform e-commerce lintas batas dinilai sebagai pendekatan yang paling efisien dari sisi biaya dan jangkauan</span>, mengingat tingginya pertumbuhan transaksi cross-border di kawasan Asia Tenggara.</p>
                    <p><span className="matched s2 selected">Penelitian sebelumnya menemukan bahwa kualitas konten produk pada marketplace berkorelasi positif terhadap konversi pembelian lintas negara</span> (Pratama, 2023).</p>
                  </div>
                </div>
                <div>
                  <div className="smallcaps" style={{ marginBottom: 6 }}>Sumber pembanding · TA-2023-0388</div>
                  <div className="doc-reader">
                    <p style={{ color: "var(--text-muted)" }}>…transaksi B2C lintas batas di kawasan ASEAN tumbuh dua digit setiap tahunnya.</p>
                    <p><span className="matched s2 selected">Penelitian sebelumnya menemukan bahwa kualitas konten produk pada marketplace berkorelasi positif terhadap konversi pembelian lintas negara</span>, sehingga UMKM perlu memprioritaskan asset visual.</p>
                    <p style={{ color: "var(--text-muted)" }}>Selanjutnya, strategi promosi terintegrasi terbukti meningkatkan retensi pembeli mancanegara…</p>
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
