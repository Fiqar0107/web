// screens/upload.jsx — pengajuan baru: judul + berkas
const UploadScreen = ({ role = "mahasiswa" }) => {
  return (
    <div className="app">
      <Topbar active="submission" role={role} />
      <div className="shell">
        <Sidebar active="new" role={role} />
        <div className="main">
          <SubBar crumbs={["Dashboard", "Pengajuan Baru"]} meta="Draft otomatis disimpan · 09:42" />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Pengajuan Baru</h1>
                <div className="desc">Lengkapi judul dan berkas untuk memulai pengecekan empat tahap.</div>
              </div>
              <div className="actions">
                <button className="btn">Simpan Draft</button>
                <button className="btn primary">Mulai Pengecekan <Icon name="arrow" size={13} /></button>
              </div>
            </div>

            <div className="steps">
              <div className="step active">
                <div className="num">1</div>
                <div><div className="label">Judul & Metadata</div><div className="sub">Sedang diisi</div></div>
              </div>
              <div className="step">
                <div className="num">2</div>
                <div><div className="label">Unggah Berkas</div><div className="sub">7 dokumen wajib</div></div>
              </div>
              <div className="step">
                <div className="num">3</div>
                <div><div className="label">Tinjau & Ajukan</div><div className="sub">Ringkasan</div></div>
              </div>
              <div className="step">
                <div className="num">4</div>
                <div><div className="label">Pengecekan</div><div className="sub">Otomatis</div></div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 12 }}>
              <div className="card">
                <div className="card-head">Detail Pengajuan</div>
                <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                    <div className="field">
                      <label>NIM</label>
                      <input type="text" defaultValue="21080694076" disabled style={{ background: "var(--surface-2)" }} />
                    </div>
                    <div className="field">
                      <label>Angkatan</label>
                      <input type="text" defaultValue="2022" disabled style={{ background: "var(--surface-2)" }} />
                    </div>
                    <div className="field">
                      <label>Konsentrasi</label>
                      <select defaultValue="ekspor">
                        <option value="ekspor">Ekspor-Impor & Logistik</option>
                        <option value="pemasaran">Pemasaran Internasional</option>
                        <option value="manajemen">Manajemen Lintas Budaya</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label>Judul Tugas Akhir <span style={{ color: "var(--red)" }}>*</span></label>
                    <textarea rows={2} defaultValue="Strategi Penetrasi Pasar UMKM Batik ke Asia Tenggara melalui E-Commerce Lintas Batas" />
                    <span className="hint">102/200 karakter · Sistem akan mencocokkan dengan repositori judul prodi sebelum submit.</span>
                  </div>

                  <div className="field">
                    <label>Kata Kunci (max 5)</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: 8, border: "1px solid var(--border)", borderRadius: 5, background: "var(--surface)" }}>
                      {["UMKM", "Batik", "E-Commerce Lintas Batas", "Penetrasi Pasar", "ASEAN"].map((k) => (
                        <span key={k} className="badge info" style={{ height: 22 }}>{k} <Icon name="x" size={10} /></span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div className="field">
                      <label>Dosen Pembimbing 1</label>
                      <input type="text" defaultValue="Dr. Wulandari, M.B.A." />
                    </div>
                    <div className="field">
                      <label>Dosen Pembimbing 2</label>
                      <input type="text" defaultValue="Drs. Hendra S., M.Si." />
                    </div>
                  </div>

                  <div className="hr" />

                  <div className="smallcaps">Berkas Pendukung</div>
                  <div className="dropzone">
                    <div style={{ marginBottom: 6 }}><Icon name="upload" size={20} /></div>
                    <div><strong>Tarik berkas ke sini</strong> atau klik untuk memilih</div>
                    <div style={{ fontSize: 11, marginTop: 4 }}>PDF, DOCX · max 25 MB per berkas</div>
                  </div>

                  <div className="card" style={{ background: "var(--surface-2)" }}>
                    <div className="card-body flush">
                      {[
                        { name: "Proposal-TA-Final.pdf", size: "2,1 MB", state: "ok", note: "210 hal · md5: 4a8f…c2" },
                        { name: "Transkrip-Nilai.pdf", size: "284 KB", state: "ok", note: "IPK 3,72" },
                        { name: "KRS-Semester-7.pdf", size: "192 KB", state: "uploading", note: "73% · 2,1 MB/s" },
                        { name: "Surat-Pembimbing.pdf", size: "—", state: "missing", note: "Belum diunggah" },
                      ].map((f) => (
                        <div key={f.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderBottom: "1px solid var(--border)" }}>
                          <Icon name="file" size={16} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                              <span style={{ fontWeight: 500 }}>{f.name}</span>
                              <span className="mono" style={{ fontSize: 10.5, color: "var(--text-subtle)" }}>{f.size}</span>
                            </div>
                            <div className="mono" style={{ fontSize: 10.5, color: "var(--text-muted)" }}>{f.note}</div>
                          </div>
                          {f.state === "ok" && <span className="badge ok"><span className="dot" />OK</span>}
                          {f.state === "uploading" && <span className="badge info">Mengunggah…</span>}
                          {f.state === "missing" && <button className="btn sm">Unggah</button>}
                          <button className="btn subtle sm" aria-label="hapus"><Icon name="trash" size={12} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card">
                  <div className="card-head">Pratinjau Validasi</div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { label: "Format judul (15–200 karakter)", ok: true },
                      { label: "Konsentrasi sesuai prodi", ok: true },
                      { label: "Berkas wajib (4 dari 7)", ok: false, note: "3 berkas masih kurang" },
                      { label: "Pembimbing terdaftar", ok: true },
                      { label: "Belum pernah diajukan", ok: true },
                    ].map((c) => (
                      <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12 }}>
                        <span style={{ color: c.ok ? "var(--green)" : "var(--amber)", marginTop: 2 }}>
                          <Icon name={c.ok ? "check" : "warn"} size={13} />
                        </span>
                        <div>
                          <div>{c.label}</div>
                          {c.note && <div style={{ color: "var(--text-muted)", fontSize: 11 }}>{c.note}</div>}
                        </div>
                      </div>
                    ))}
                    <div className="hr" style={{ margin: "4px 0" }} />
                    <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>
                      Pengecekan otomatis akan berjalan setelah submit: cek judul, kelengkapan berkas, plagiasi lokal, lalu plagiasi eksternal.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-head">Estimasi Waktu</div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12 }}>
                    {[
                      { label: "Cek Kesamaan Judul", t: "≤ 30 detik" },
                      { label: "Validasi Berkas", t: "≤ 1 menit" },
                      { label: "Plagiasi Database Lokal", t: "2–4 menit" },
                      { label: "Plagiasi Eksternal", t: "5–8 menit" },
                    ].map((r) => (
                      <div key={r.label} style={{ display: "flex" }}>
                        <span>{r.label}</span>
                        <span className="mono" style={{ marginLeft: "auto", color: "var(--text-muted)" }}>{r.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
window.UploadScreen = UploadScreen;
