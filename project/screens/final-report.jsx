// screens/final-report.jsx — Berita Acara final, ditandatangani penanggung jawab + koorprodi
const FinalReportScreen = ({ role = "mahasiswa" }) => {
  return (
    <div className="app">
      <Topbar active="submission" role={role} />
      <div className="shell">
        <Sidebar active="ext" role={role} />
        <div className="main">
          <SubBar
            crumbs={["Pengajuan #SBM-2026-0184", "Berita Acara Final"]}
            meta="Status: Selesai · 4 dari 4 tahap lolos · siap diunduh"
          />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Berita Acara Pemeriksaan</h1>
                <div className="desc">Rangkuman empat tahap pengecekan dengan tanda tangan elektronik penanggung jawab pemeriksa & koordinator prodi.</div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="eye" size={13} /> Pratinjau</button>
                <button className="btn"><Icon name="link" size={13} /> Salin Tautan</button>
                <button className="btn primary"><Icon name="download" size={13} /> Unduh Laporan (PDF)</button>
              </div>
            </div>

            {/* Document preview frame */}
            <div className="card" style={{ background: "var(--surface-2)", padding: 24 }}>
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 1px 0 rgba(20,24,40,.04), 0 8px 24px rgba(20,24,40,.06)",
                borderRadius: 4,
                maxWidth: 720, margin: "0 auto",
                padding: "36px 56px",
                fontFamily: "'Inter', serif",
                color: "var(--text)",
                fontSize: 12,
                lineHeight: 1.55,
              }}>
                {/* Letterhead */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 14, borderBottom: "2px solid var(--text)" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 6, border: "1px dashed var(--border-strong)", display: "grid", placeItems: "center", color: "var(--text-muted)", fontFamily: "var(--ff-mono)", fontSize: 9 }}>LOGO</div>
                  <div style={{ lineHeight: 1.25 }}>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>PROGRAM STUDI ADMINISTRASI BISNIS INTERNASIONAL</div>
                    <div style={{ fontSize: 11 }}>Fakultas Ilmu Sosial dan Hukum · Universitas [Nama]</div>
                    <div style={{ fontSize: 10, color: "var(--text-muted)" }}>Jl. Ketintang, Surabaya 60231 · si-profi@uni.ac.id</div>
                  </div>
                </div>

                <h2 style={{ textAlign: "center", fontWeight: 700, letterSpacing: ".05em", fontSize: 14, margin: "20px 0 4px" }}>
                  BERITA ACARA PEMERIKSAAN TUGAS AKHIR
                </h2>
                <div style={{ textAlign: "center", fontFamily: "var(--ff-mono)", fontSize: 10.5, color: "var(--text-muted)", marginBottom: 16 }}>
                  No. SBM-2026-0184 / TA-ABI / V / 2026
                </div>

                {/* Identitas */}
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
                  <tbody>
                    {[
                      ["Nama Mahasiswa", "Dwi Ramadhani"],
                      ["NIM", "21080694076"],
                      ["Angkatan / Konsentrasi", "2022 / Ekspor-Impor & Logistik"],
                      ["Pembimbing 1", "Dr. Wulandari, M.B.A."],
                      ["Pembimbing 2", "Drs. Hendra S., M.Si."],
                      ["Judul", "Strategi Penetrasi Pasar UMKM Batik ke Asia Tenggara melalui E-Commerce Lintas Batas"],
                    ].map(([k, v]) => (
                      <tr key={k}>
                        <td style={{ width: 160, padding: "3px 0", verticalAlign: "top", color: "var(--text-muted)" }}>{k}</td>
                        <td style={{ padding: "3px 0", verticalAlign: "top" }}>: {v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Hasil 4 tahap */}
                <div style={{ fontWeight: 600, fontSize: 12, margin: "8px 0" }}>Hasil Pemeriksaan</div>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid var(--border-strong)", marginBottom: 18, fontSize: 11.5 }}>
                  <thead>
                    <tr style={{ background: "var(--surface-2)" }}>
                      <th style={{ width: 30, padding: "6px 8px", border: "1px solid var(--border-strong)", textAlign: "left" }}>No</th>
                      <th style={{ padding: "6px 8px", border: "1px solid var(--border-strong)", textAlign: "left" }}>Tahap Pemeriksaan</th>
                      <th style={{ width: 90, padding: "6px 8px", border: "1px solid var(--border-strong)", textAlign: "left" }}>Hasil</th>
                      <th style={{ width: 90, padding: "6px 8px", border: "1px solid var(--border-strong)", textAlign: "left" }}>Status</th>
                      <th style={{ width: 110, padding: "6px 8px", border: "1px solid var(--border-strong)", textAlign: "left" }}>Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1", "Cek Kesamaan Judul", "64% (1 mirip)", "Lolos", "10 Mei 2026"],
                      ["2", "Kelengkapan Berkas", "7 dari 7", "Lolos", "10 Mei 2026"],
                      ["3", "Plagiasi Database Lokal", "17,5%", "Lolos", "10 Mei 2026"],
                      ["4", "Plagiasi Eksternal (Turnitin)", "23%", "Lolos", "10 Mei 2026"],
                    ].map((r) => (
                      <tr key={r[0]}>
                        {r.map((c, i) => (
                          <td key={i} style={{ padding: "6px 8px", border: "1px solid var(--border-strong)", fontFamily: i === 2 || i === 4 ? "var(--ff-mono)" : undefined, fontSize: i === 2 || i === 4 ? 11 : undefined }}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p style={{ marginBottom: 18 }}>
                  Berdasarkan hasil pemeriksaan empat tahap di atas, pengajuan tugas akhir saudara/i <strong>Dwi Ramadhani</strong> dinyatakan <strong>memenuhi syarat administratif</strong> dan dapat dilanjutkan ke proses sidang tugas akhir sesuai kalender akademik.
                </p>

                {/* Signatures */}
                <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  {[
                    { role: "Penanggung Jawab Pemeriksa", name: "Anita Permatasari, S.Kom., M.M.", nip: "NIP. 198607142010122003", date: "Surabaya, 10 Mei 2026 · 09:48 WIB" },
                    { role: "Koordinator Program Studi", name: "Dr. Sunarto, M.Si.", nip: "NIP. 197304251999031002", date: "Surabaya, 10 Mei 2026 · 14:12 WIB" },
                  ].map((s) => (
                    <div key={s.role} style={{ fontSize: 11.5 }}>
                      <div>{s.date}</div>
                      <div style={{ marginTop: 2 }}>{s.role},</div>
                      {/* E-signature box */}
                      <div style={{
                        height: 76, marginTop: 8, marginBottom: 6,
                        border: "1px dashed var(--border-strong)",
                        borderRadius: 4,
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "8px 10px",
                        background: "var(--surface-2)",
                      }}>
                        {/* QR placeholder */}
                        <div style={{
                          width: 56, height: 56,
                          background: "repeating-linear-gradient(0deg, var(--text) 0 2px, transparent 2px 4px), repeating-linear-gradient(90deg, var(--text) 0 2px, transparent 2px 4px)",
                          opacity: .85,
                          borderRadius: 2,
                        }} />
                        <div style={{ fontSize: 10, color: "var(--text-muted)", lineHeight: 1.35 }}>
                          <div style={{ color: "var(--green)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                            <Icon name="shield" size={11} /> Tertandatangani digital
                          </div>
                          <div className="mono">BSrE · 9F4A·22B1·08C2</div>
                          <div className="mono">verifikasi: si-profi.uni.ac.id/v/9F4A22</div>
                        </div>
                      </div>
                      <div style={{ borderTop: "1px solid var(--text)", paddingTop: 4, fontWeight: 600 }}>{s.name}</div>
                      <div className="mono" style={{ fontSize: 10.5, color: "var(--text-muted)" }}>{s.nip}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 24, fontSize: 10, color: "var(--text-subtle)", borderTop: "1px solid var(--border)", paddingTop: 8, textAlign: "center", fontFamily: "var(--ff-mono)" }}>
                  Dokumen ini sah tanpa cap basah · Verifikasi keaslian: si-profi.uni.ac.id/verify
                </div>
              </div>
            </div>

            {/* Download options */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
              <div className="card">
                <div className="card-head">Opsi Unduhan</div>
                <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    ["Berita Acara Final (PDF)", "284 KB · ditandatangani 2 pihak", "primary"],
                    ["Lampiran A · Cek Judul", "1,2 MB"],
                    ["Lampiran B · Kelengkapan Berkas", "640 KB"],
                    ["Lampiran C · Plagiasi Lokal", "2,8 MB"],
                    ["Lampiran D · Plagiasi Eksternal", "4,1 MB"],
                    ["Paket Lengkap (ZIP)", "9,1 MB · semua lampiran"],
                  ].map(([n, sub, v], i) => (
                    <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 4px", borderBottom: i < 5 ? "1px solid var(--border)" : "none" }}>
                      <Icon name={i === 5 ? "folder" : "file"} size={14} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 500 }}>{n}</div>
                        <div className="mono" style={{ fontSize: 10.5, color: "var(--text-muted)" }}>{sub}</div>
                      </div>
                      <button className={"btn sm" + (v === "primary" ? " primary" : "")}><Icon name="download" size={11} /></button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="card-head">Status Tanda Tangan</div>
                <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { who: "Penanggung Jawab Pemeriksa", name: "Anita Permatasari", t: "10 Mei 2026 · 09:48", state: "ok" },
                    { who: "Koordinator Prodi", name: "Dr. Sunarto, M.Si.", t: "10 Mei 2026 · 14:12", state: "ok" },
                  ].map((s) => (
                    <div key={s.who} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div className="avatar" style={{ width: 30, height: 30, fontSize: 11 }}>
                        {s.name.split(" ").map(p => p[0]).slice(0,2).join("")}
                      </div>
                      <div style={{ flex: 1, fontSize: 12 }}>
                        <div style={{ fontWeight: 500 }}>{s.who}</div>
                        <div style={{ color: "var(--text-muted)", fontSize: 11 }}>{s.name}</div>
                        <div className="mono" style={{ fontSize: 10.5, color: "var(--text-subtle)" }}>{s.t}</div>
                      </div>
                      <span className="badge ok"><Icon name="check" size={10} /> Signed</span>
                    </div>
                  ))}
                  <div className="hr" />
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    Tanda tangan elektronik tersertifikasi BSrE. Stempel waktu kriptografis tertanam pada PDF — verifikasi otomatis saat dibuka.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-head">Kirim ke…</div>
                <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    ["Email mahasiswa", "dwi.ramadhani@mhs.uni.ac.id", "ok"],
                    ["Email pembimbing", "wulandari@uni.ac.id", "ok"],
                    ["Folder Drive saya", "/TA-Saya/Berita-Acara/", "ok"],
                    ["Print to TU Prodi", "Antri · 2 dokumen", "wait"],
                  ].map(([n, sub, st]) => (
                    <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 4px", borderBottom: "1px solid var(--border)" }}>
                      <Icon name={n.startsWith("Email") ? "chat" : n.startsWith("Folder") ? "folder" : "file"} size={14} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 500 }}>{n}</div>
                        <div className="mono" style={{ fontSize: 10.5, color: "var(--text-muted)" }}>{sub}</div>
                      </div>
                      {st === "ok" ? <button className="btn sm">Kirim</button> : <span className="badge warn">menunggu</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
window.FinalReportScreen = FinalReportScreen;
