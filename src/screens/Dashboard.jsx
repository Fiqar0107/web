import { useNavigate } from 'react-router-dom'
import { useApp } from '../context'
import { Icon, Spark, Ring, Topbar, Sidebar, SubBar } from '../components/shared'
import { submissions, stageLabel, stageBadge, simBadge } from '../data'

const stageColumns = [
  { id: "title", title: "Cek Kesamaan Judul" },
  { id: "docs", title: "Kelengkapan Berkas" },
  { id: "local", title: "Plagiasi Lokal" },
  { id: "ext", title: "Plagiasi Eksternal" },
]

function DashboardA({ role }) {
  const navigate = useNavigate()
  return (
    <div className="app">
      <Topbar active="dashboard" role={role} />
      <div className="shell">
        <Sidebar active="dashboard" role={role} />
        <div className="main">
          <SubBar
            crumbs={["Dashboard", role === "admin" ? "Antrian Hari Ini" : "Pengajuan Saya"]}
            meta="Update terakhir 10 Mei 2026 · 09:42 WIB"
          />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>{role === "admin" ? "Antrian Verifikasi" : "Pengajuan Tugas Akhir"}</h1>
                <div className="desc">Pantau setiap tahap pengecekan: judul, berkas, plagiasi lokal, hingga eksternal.</div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="download" size={13} /> Ekspor</button>
                <button className="btn primary" onClick={() => navigate('/new')}><Icon name="plus" size={13} /> Pengajuan Baru</button>
              </div>
            </div>

            <div className="kpi-grid" style={{ marginBottom: 12 }}>
              <div className="kpi">
                <span className="label">Total Pengajuan</span>
                <span className="value">128</span>
                <span className="delta up"><Spark data={[8,9,12,11,14,16,18,20]} color="var(--green)" /> +14% MoM</span>
              </div>
              <div className="kpi">
                <span className="label">Menunggu Verifikasi</span>
                <span className="value">24</span>
                <span className="delta"><Spark data={[20,22,26,24,28,26,25,24]} color="var(--amber)" /> rata-rata 2,1 hari</span>
              </div>
              <div className="kpi">
                <span className="label">Similarity Rerata</span>
                <span className="value">12,4<span style={{ fontSize: 14, color: "var(--text-muted)" }}>%</span></span>
                <span className="delta down"><Spark data={[18,16,15,14,13,12,12,12]} color="var(--green)" /> −3,2 pts</span>
              </div>
              <div className="kpi">
                <span className="label">Lolos Tahap Akhir</span>
                <span className="value">94</span>
                <span className="delta up"><Spark data={[60,68,74,80,82,86,90,94]} color="var(--green)" /> 73% rate</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 12 }}>
              <div className="card">
                <div className="card-head">
                  Aktivitas Pengajuan
                  <span className="sub">· 7 dari 128</span>
                  <div className="actions">
                    <button className="btn subtle sm"><Icon name="filter" size={12} /> Filter</button>
                    <button className="btn subtle sm"><Icon name="sort" size={12} /> Urutkan</button>
                  </div>
                </div>
                <div className="card-body flush">
                  <table className="tbl">
                    <thead>
                      <tr>
                        <th style={{ width: 130 }}>ID</th>
                        <th style={{ width: 150 }}>Mahasiswa</th>
                        <th>Judul</th>
                        <th style={{ width: 130 }}>Tahap</th>
                        <th style={{ width: 130 }}>Progres</th>
                        <th style={{ width: 110 }}>Similarity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((s) => (
                        <tr key={s.id} style={{ cursor: 'pointer' }} onClick={() => navigate('/submission/title')}>
                          <td className="mono">{s.id}</td>
                          <td>
                            <div style={{ fontWeight: 500 }}>{s.name}</div>
                            <div className="mono" style={{ fontSize: 10.5, color: "var(--text-subtle)" }}>{s.nim}</div>
                          </td>
                          <td style={{ maxWidth: 0 }}>
                            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={s.title}>{s.title}</div>
                          </td>
                          <td><span className={"badge " + stageBadge[s.stage]}>{stageLabel[s.stage]}</span></td>
                          <td>
                            <div className="bar-row">
                              <div className={"bar " + (s.progress === 100 ? "ok" : s.progress > 50 ? "" : "warn")}>
                                <span style={{ width: s.progress + "%" }} />
                              </div>
                              <span className="pct">{s.progress}%</span>
                            </div>
                          </td>
                          <td>
                            {s.similarity == null
                              ? <span className="badge neutral">—</span>
                              : <span className={"badge " + simBadge(s.similarity)}><span className="mono">{s.similarity}%</span></span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="card">
                  <div className="card-head">Distribusi Tahap</div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { label: "Cek Judul", n: 18, of: 128, c: "" },
                      { label: "Kelengkapan Berkas", n: 32, of: 128, c: "" },
                      { label: "Plagiasi Lokal", n: 22, of: 128, c: "warn" },
                      { label: "Plagiasi Eksternal", n: 14, of: 128, c: "" },
                      { label: "Selesai", n: 42, of: 128, c: "ok" },
                    ].map((r) => (
                      <div key={r.label}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, marginBottom: 4 }}>
                          <span>{r.label}</span>
                          <span className="mono" style={{ color: "var(--text-muted)" }}>{r.n}/{r.of}</span>
                        </div>
                        <div className={"bar " + r.c}><span style={{ width: ((r.n / r.of) * 100) + "%" }} /></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <div className="card-head">SLA Verifikasi</div>
                  <div className="card-body" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <Ring pct={73} color="var(--green)" />
                    <div style={{ fontSize: 12 }}>
                      <div style={{ fontWeight: 600, marginBottom: 2 }}>Tepat waktu</div>
                      <div style={{ color: "var(--text-muted)" }}>94 dari 128 selesai &lt; 3 hari kerja.</div>
                      <div style={{ marginTop: 6 }}>
                        <span className="badge ok">SLA on track</span>
                      </div>
                    </div>
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

function DashboardB({ role }) {
  const navigate = useNavigate()
  return (
    <div className="app">
      <Topbar active="dashboard" role={role} />
      <div className="shell">
        <Sidebar active="queue" role={role} />
        <div className="main">
          <SubBar crumbs={["Dashboard", "Status Board"]} meta="24 menunggu · 8 di review" />
          <div className="workspace" style={{ display: "flex", flexDirection: "column" }}>
            <div className="page-head">
              <div>
                <h1>Status Board · Pengecekan</h1>
                <div className="desc">Drag pengajuan antar tahap. Klik untuk melihat detail.</div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="filter" size={13} /> Angkatan 2022</button>
                <button className="btn"><Icon name="refresh" size={13} /> Sinkron</button>
              </div>
            </div>

            <div className="kanban" style={{ flex: 1, minHeight: 0 }}>
              {stageColumns.map((col) => {
                const items = submissions.filter((s) => s.stage === col.id)
                return (
                  <div key={col.id} className="kanban-col">
                    <div className="kanban-col-head">
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} />
                      {col.title}
                      <span className="count">{items.length || (col.id === "docs" ? 12 : col.id === "title" ? 8 : col.id === "local" ? 5 : 3)}</span>
                    </div>
                    <div className="kanban-list">
                      {(items.length ? items : submissions.slice(0, 3)).map((s, i) => (
                        <div className="kanban-card" key={s.id + i} style={{ cursor: 'pointer' }} onClick={() => navigate('/submission/title')}>
                          <div className="row">
                            <span className="mono nim">{s.id}</span>
                            {s.similarity != null && (
                              <span className={"badge " + simBadge(s.similarity)} style={{ marginLeft: "auto" }}>
                                <span className="mono">{s.similarity}%</span>
                              </span>
                            )}
                          </div>
                          <div className="title">{s.title}</div>
                          <div className="row" style={{ color: "var(--text-muted)" }}>
                            <span className="nim">{s.nim}</span>
                            <span style={{ marginLeft: "auto" }}>· {s.name.split(" ")[0]}</span>
                          </div>
                          <div className="bar"><span style={{ width: s.progress + "%" }} /></div>
                        </div>
                      ))}
                      <button className="btn subtle sm" style={{ justifyContent: "center" }}>+ tambah ke kolom</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardScreen() {
  const { role } = useApp()
  return role === "admin" ? <DashboardB role={role} /> : <DashboardA role={role} />
}
