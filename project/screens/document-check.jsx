// screens/document-check.jsx — kelengkapan berkas
const DocumentCheckScreen = ({ role = "mahasiswa" }) => {
  const docs = [
    { name: "Proposal Tugas Akhir (Final)", code: "PROP-FN", state: "ok", uploaded: "10 Mei 2026 09:31", size: "2,14 MB", checks: [["Format PDF", "ok"], ["210 halaman", "ok"], ["Margin sesuai", "ok"], ["Tanda tangan", "ok"]] },
    { name: "Lembar Persetujuan Pembimbing", code: "LPP", state: "ok", uploaded: "10 Mei 2026 09:32", size: "182 KB", checks: [["TTD basah", "ok"], ["Cap prodi", "ok"]] },
    { name: "Transkrip Nilai", code: "TRX", state: "ok", uploaded: "10 Mei 2026 09:33", size: "284 KB", checks: [["IPK ≥ 2,75", "ok", "3,72"], ["SKS ≥ 138", "ok", "144"]] },
    { name: "KRS Semester Berjalan", code: "KRS", state: "warn", uploaded: "10 Mei 2026 09:33", size: "192 KB", checks: [["Tercantum mata kuliah TA", "ok"], ["TTD Dosen Wali", "warn", "Tidak terbaca"]] },
    { name: "Form Bebas Pinjaman Perpus", code: "BPP", state: "ok", uploaded: "09 Mei 2026 14:08", size: "98 KB", checks: [["Stempel asli", "ok"]] },
    { name: "Surat Bebas Laboratorium", code: "BLB", state: "missing", uploaded: "—", size: "—", checks: [["Wajib", "warn"]] },
    { name: "Bukti Bayar SPP", code: "SPP", state: "missing", uploaded: "—", size: "—", checks: [["Wajib", "warn"]] },
  ];
  const counts = { ok: docs.filter(d=>d.state==="ok").length, warn: docs.filter(d=>d.state==="warn").length, missing: docs.filter(d=>d.state==="missing").length };

  return (
    <div className="app">
      <Topbar active="submission" role={role} />
      <div className="shell">
        <Sidebar active="docs" role={role} />
        <div className="main">
          <SubBar crumbs={["Pengajuan #SBM-2026-0184", "Kelengkapan Berkas"]} meta="5/7 lengkap · 1 perlu revisi · 2 belum diunggah" />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Checklist Kelengkapan Berkas</h1>
                <div className="desc">Validasi otomatis: format file, jumlah halaman, tanda tangan, dan metadata wajib.</div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="download" size={13} /> Unduh Laporan Tahap</button>
                <button className="btn"><Icon name="upload" size={13} /> Unggah Berkas Tertunda</button>
                <button className="btn primary">Lanjut: Plagiasi <Icon name="arrow" size={13} /></button>
              </div>
            </div>

            <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 12 }}>
              <div className="kpi"><span className="label">Total Wajib</span><span className="value">7</span><span className="delta">Sesuai pedoman 2025</span></div>
              <div className="kpi"><span className="label">Lengkap</span><span className="value" style={{ color: "var(--green)" }}>{counts.ok}</span><span className="delta up">71% dari wajib</span></div>
              <div className="kpi"><span className="label">Perlu Revisi</span><span className="value" style={{ color: "var(--amber)" }}>{counts.warn}</span><span className="delta">1 berkas</span></div>
              <div className="kpi"><span className="label">Belum Diunggah</span><span className="value" style={{ color: "var(--red)" }}>{counts.missing}</span><span className="delta">Tindak lanjut diperlukan</span></div>
            </div>

            <div className="card">
              <div className="card-head">Daftar Berkas Wajib</div>
              <div className="card-body flush">
                <div className="chk-row" style={{ background: "var(--surface-2)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--text-subtle)", fontWeight: 600 }}>
                  <div></div>
                  <div>Berkas</div>
                  <div>Status</div>
                  <div>Diunggah</div>
                  <div>Ukuran</div>
                  <div></div>
                </div>
                {docs.map((d) => (
                  <React.Fragment key={d.code}>
                    <div className={"chk-row " + d.state}>
                      <div className="chk-icon">
                        {d.state === "ok" && <Icon name="check" size={12} />}
                        {d.state === "warn" && "!"}
                        {d.state === "missing" && <Icon name="x" size={12} />}
                      </div>
                      <div>
                        <div className="chk-name">{d.name}</div>
                        <div className="chk-sub mono">[{d.code}] · validasi: {d.checks.length} aturan</div>
                      </div>
                      <div>
                        {d.state === "ok" && <span className="badge ok"><span className="dot"/>Lengkap</span>}
                        {d.state === "warn" && <span className="badge warn"><span className="dot"/>Revisi</span>}
                        {d.state === "missing" && <span className="badge bad"><span className="dot"/>Belum ada</span>}
                      </div>
                      <div className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>{d.uploaded}</div>
                      <div className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>{d.size}</div>
                      <div>
                        {d.state === "missing"
                          ? <button className="btn sm"><Icon name="upload" size={11} /></button>
                          : <button className="btn subtle sm"><Icon name="eye" size={12} /></button>}
                      </div>
                    </div>
                    {/* per-doc rule grid */}
                    <div style={{ padding: "6px 14px 12px 56px", display: "flex", flexWrap: "wrap", gap: 5, borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
                      {d.checks.map(([rule, st, val], i) => (
                        <span key={i} className={"badge " + (st === "ok" ? "ok" : "warn")}>
                          <Icon name={st === "ok" ? "check" : "warn"} size={10} /> {rule}{val ? `: ${val}` : ""}
                        </span>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
window.DocumentCheckScreen = DocumentCheckScreen;
