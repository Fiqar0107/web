import { useApp } from '../context'
import { Icon, Topbar, Sidebar, SubBar } from '../components/shared'

const folders = [
  { path: "TA-ABI / 2025 / Final", role: "Repositori TA", files: 184, indexed: 184, lastSync: "10 Mei 2026 09:38", status: "ok" },
  { path: "TA-ABI / 2024 / Final", role: "Repositori TA", files: 296, indexed: 296, lastSync: "10 Mei 2026 09:38", status: "ok" },
  { path: "TA-ABI / 2023 / Final", role: "Repositori TA", files: 312, indexed: 312, lastSync: "10 Mei 2026 09:38", status: "ok" },
  { path: "TA-ABI / 2022 / Final", role: "Repositori TA", files: 287, indexed: 285, lastSync: "10 Mei 2026 09:38", status: "warn", note: "2 file gagal OCR" },
  { path: "TA-ABI / 2018-2021 / Arsip", role: "Repositori TA", files: 1105, indexed: 1098, lastSync: "10 Mei 2026 03:00", status: "warn", note: "7 file rusak" },
  { path: "Jurnal-Internal-ABI / Volume 1-12", role: "Jurnal Internal", files: 124, indexed: 124, lastSync: "10 Mei 2026 09:38", status: "ok" },
  { path: "Modul-Kuliah-ABI / 2024-2025", role: "Modul Kuliah", files: 76, indexed: 76, lastSync: "10 Mei 2026 09:38", status: "ok" },
  { path: "Pengajuan-Aktif / Inbox", role: "Inbox Submission", files: 24, indexed: 24, lastSync: "Real-time", status: "live" },
]

const events = [
  { t: "09:38", who: "system", e: "Sinkron inkremental selesai · 184 file diperiksa, 0 baru", c: "ok" },
  { t: "09:35", who: "admin@uni.ac.id", e: "Folder 'TA-ABI / 2025 / Final' ditandai sebagai Repositori TA", c: "info" },
  { t: "08:12", who: "system", e: "Webhook Drive · file baru terdeteksi di Pengajuan-Aktif/Inbox (3)", c: "info" },
  { t: "03:00", who: "system", e: "Sinkron penuh malam · 2.408 file · 7 gagal OCR", c: "warn" },
  { t: "Sel 14:21", who: "admin@uni.ac.id", e: "Token OAuth diperbarui — masa berlaku 90 hari", c: "ok" },
  { t: "Sel 09:02", who: "system", e: "Index full-text dibangun ulang (alasan: skema baru)", c: "info" },
]

export default function DriveIntegrationScreen() {
  const { role } = useApp()

  return (
    <div className="app">
      <Topbar active="dashboard" role={role} />
      <div className="shell">
        <Sidebar active="repo" role={role} />
        <div className="main">
          <SubBar crumbs={["Repositori", "Integrasi Google Drive"]} meta="Akun: prodi-abi@drive · 2.408 file terindeks · last sync 09:38" />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Integrasi Google Drive</h1>
                <div className="desc">Sumber tunggal untuk database judul & plagiasi lokal. Sinkron via Drive API + webhook.</div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="settings" size={13} /> Pengaturan OAuth</button>
                <button className="btn"><Icon name="refresh" size={13} /> Sinkron Sekarang</button>
                <button className="btn primary"><Icon name="plus" size={13} /> Hubungkan Folder</button>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 12 }}>
              <div className="card-body" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, alignItems: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "var(--surface-3)", display: "grid", placeItems: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 18a5 5 0 1 1 .8-9.94A6 6 0 0 1 19.5 11.5 4.5 4.5 0 0 1 18 20H7z" />
                  </svg>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 600, fontSize: 14 }}>Google Drive · prodi-abi@drive</span>
                    <span className="badge ok"><span className="dot" />Terhubung</span>
                    <span className="badge neutral mono">scope: drive.file, drive.readonly</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
                    Token OAuth aktif · expires 22 Jul 2026 · webhook Drive aktif untuk 8 folder
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 18, textAlign: "right" }}>
                  {[["Folder", "8"], ["File", "2.408"], ["Index", "2.399"], ["Sinkron", "09:38"]].map(([l, v]) => (
                    <div key={l}>
                      <div className="smallcaps">{l}</div>
                      <div className="mono num" style={{ fontSize: l === "Sinkron" ? 13 : 18, fontWeight: 600 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 12 }}>
              <div className="card">
                <div className="card-head">
                  Folder Tersinkron
                  <span className="sub">· peran menentukan kemana datanya digunakan</span>
                  <div className="actions">
                    <button className="btn subtle sm"><Icon name="filter" size={12} /> Peran</button>
                    <button className="btn subtle sm"><Icon name="sort" size={12} /> Last sync</button>
                  </div>
                </div>
                <div className="card-body flush">
                  <table className="tbl">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Folder Drive</th>
                        <th style={{ width: 150 }}>Peran</th>
                        <th style={{ width: 90 }}>File</th>
                        <th style={{ width: 90 }}>Terindeks</th>
                        <th style={{ width: 130 }}>Sinkron</th>
                        <th style={{ width: 100 }}>Status</th>
                        <th style={{ width: 60 }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {folders.map((f) => (
                        <tr key={f.path}>
                          <td style={{ width: 24, paddingRight: 0 }}><Icon name="folder" size={14} /></td>
                          <td>
                            <div className="mono" style={{ fontSize: 12, fontWeight: 500 }}>{f.path}</div>
                            {f.note && <div style={{ fontSize: 10.5, color: "var(--amber)", marginTop: 2 }}>⚠ {f.note}</div>}
                          </td>
                          <td><span className="badge info">{f.role}</span></td>
                          <td className="mono num">{f.files.toLocaleString("id-ID")}</td>
                          <td>
                            <div className="bar-row">
                              <div className={"bar " + (f.indexed === f.files ? "ok" : "warn")}>
                                <span style={{ width: ((f.indexed / f.files) * 100) + "%" }} />
                              </div>
                              <span className="pct mono">{f.indexed.toLocaleString("id-ID")}</span>
                            </div>
                          </td>
                          <td className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>{f.lastSync}</td>
                          <td>
                            {f.status === "ok" && <span className="badge ok"><span className="dot" />Sehat</span>}
                            {f.status === "warn" && <span className="badge warn"><span className="dot" />Perhatian</span>}
                            {f.status === "live" && <span className="badge violet"><span className="dot" />Real-time</span>}
                          </td>
                          <td><button className="btn subtle sm"><Icon name="settings" size={12} /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card">
                  <div className="card-head">Penggunaan Sumber</div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { l: "Repositori TA · cek judul", v: 1898, of: 2408, c: "" },
                      { l: "Jurnal internal · plagiasi", v: 124, of: 2408, c: "" },
                      { l: "Modul kuliah · plagiasi", v: 76, of: 2408, c: "" },
                      { l: "Inbox submission", v: 24, of: 2408, c: "ok" },
                      { l: "Belum diindeks", v: 9, of: 2408, c: "warn" },
                    ].map((r) => (
                      <div key={r.l}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, marginBottom: 4 }}>
                          <span>{r.l}</span>
                          <span className="mono num" style={{ color: "var(--text-muted)" }}>{r.v}</span>
                        </div>
                        <div className={"bar " + r.c}><span style={{ width: ((r.v / r.of) * 100) + "%" }} /></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <div className="card-head">Pemetaan Field</div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12 }}>
                    {[
                      ["Judul TA", "metadata Drive · description"],
                      ["NIM", "regex nama file · ^(\\d{11})_"],
                      ["Tahun", "parent folder name"],
                      ["Pembimbing", "metadata custom · supervisor"],
                      ["Konten teks", "text-extract (PDF/DOCX) → indeks lucene"],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: "flex", gap: 10 }}>
                        <span style={{ width: 90, color: "var(--text-muted)" }}>{k}</span>
                        <span className="mono" style={{ flex: 1, fontSize: 11, color: "var(--text)" }}>{v}</span>
                      </div>
                    ))}
                    <button className="btn subtle sm" style={{ marginTop: 4, alignSelf: "flex-start" }}>
                      <Icon name="settings" size={11} /> Edit pemetaan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 12 }}>
              <div className="card-head">
                Log Aktivitas Sinkron
                <span className="sub">· 24 jam terakhir</span>
                <div className="actions">
                  <button className="btn subtle sm"><Icon name="download" size={12} /> Ekspor log</button>
                </div>
              </div>
              <div className="card-body flush">
                {events.map((ev, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 130px 1fr 80px", gap: 10, padding: "8px 14px", borderBottom: "1px solid var(--border)", alignItems: "center", fontSize: 12 }}>
                    <span className="mono" style={{ color: "var(--text-subtle)", fontSize: 11 }}>{ev.t}</span>
                    <span className="mono" style={{ fontSize: 11 }}>{ev.who}</span>
                    <span>{ev.e}</span>
                    <span style={{ textAlign: "right" }}>
                      {ev.c === "ok" && <span className="badge ok">success</span>}
                      {ev.c === "info" && <span className="badge info">info</span>}
                      {ev.c === "warn" && <span className="badge warn">warning</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
