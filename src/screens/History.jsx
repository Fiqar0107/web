import { useApp } from '../context'
import { Icon, Topbar, Sidebar, SubBar } from '../components/shared'
import { submissions, stageLabel, stageBadge, simBadge } from '../data'

const historyRows = [...submissions,
  { id: "SBM-2026-0142", nim: "21080694076", name: "Dwi Ramadhani", title: "[Draft awal] Penetrasi UMKM Batik via Marketplace ASEAN", stage: "title", progress: 100, similarity: 38, status: "bad" },
  { id: "SBM-2026-0098", nim: "21080694076", name: "Dwi Ramadhani", title: "Strategi Pemasaran Digital Batik Lokal di Pasar Domestik", stage: "done", progress: 100, similarity: 17, status: "ok" },
]

const dates = ["10 Mei 2026", "08 Mei 2026", "06 Mei 2026", "05 Mei 2026", "30 Apr 2026", "28 Apr 2026", "21 Apr 2026", "12 Mar 2026", "08 Sep 2025"]
const externalSims = [23, 19, null, 41, 12, 14, 17, 52, 21]

export default function HistoryScreen() {
  const { role } = useApp()

  return (
    <div className="app">
      <Topbar active="history" role={role} />
      <div className="shell">
        <Sidebar active="history" role={role} />
        <div className="main">
          <SubBar crumbs={["Riwayat Submission"]} meta={`${historyRows.length} entri · sejak Sep 2025`} />
          <div className="workspace">
            <div className="page-head">
              <div>
                <h1>Riwayat Submission</h1>
                <div className="desc">Semua pengajuan, termasuk draft, ditolak, dan sudah lolos.</div>
              </div>
              <div className="actions">
                <button className="btn"><Icon name="filter" size={13} /> Status: Semua</button>
                <button className="btn"><Icon name="filter" size={13} /> Tahun: 2026</button>
                <button className="btn"><Icon name="download" size={13} /> Ekspor CSV</button>
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <span style={{ display: "flex", gap: 6 }}>
                  {[["Semua", historyRows.length, true], ["Selesai", 4, false], ["Direview", 3, false], ["Ditolak", 1, false], ["Draft", 2, false]].map(([l, n, a]) => (
                    <span key={l} className={"badge " + (a ? "info" : "neutral")} style={{ height: 22, cursor: "pointer" }}>
                      {l} <span className="mono" style={{ opacity: .7 }}>{n}</span>
                    </span>
                  ))}
                </span>
                <div className="actions">
                  <button className="btn subtle sm"><Icon name="sort" size={12} /> Tanggal ↓</button>
                </div>
              </div>
              <div className="card-body flush">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th style={{ width: 130 }}>ID</th>
                      <th style={{ width: 110 }}>Tanggal</th>
                      <th>Judul</th>
                      <th style={{ width: 130 }}>Tahap</th>
                      <th style={{ width: 100 }}>Sim. Lokal</th>
                      <th style={{ width: 100 }}>Sim. Eksternal</th>
                      <th style={{ width: 100 }}>Status</th>
                      <th style={{ width: 60 }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyRows.map((s, i) => (
                      <tr key={s.id + i}>
                        <td className="mono">{s.id}</td>
                        <td className="mono num" style={{ fontSize: 11 }}>{dates[i] || "—"}</td>
                        <td style={{ maxWidth: 0 }}>
                          <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 500 }} title={s.title}>{s.title}</div>
                          <div className="mono" style={{ fontSize: 10.5, color: "var(--text-subtle)", marginTop: 1 }}>
                            {s.nim} · {s.name}
                          </div>
                        </td>
                        <td><span className={"badge " + stageBadge[s.stage]}>{stageLabel[s.stage]}</span></td>
                        <td>{s.similarity == null
                          ? <span className="muted">—</span>
                          : <span className={"badge " + simBadge(s.similarity)}><span className="mono">{s.similarity}%</span></span>}
                        </td>
                        <td>{externalSims[i] == null
                          ? <span className="muted">—</span>
                          : <span className={"badge " + simBadge(externalSims[i])}><span className="mono">{externalSims[i]}%</span></span>}
                        </td>
                        <td>
                          {s.status === "ok" && <span className="badge ok"><span className="dot" />Lolos</span>}
                          {s.status === "review" && <span className="badge info"><span className="dot" />Direview</span>}
                          {s.status === "warn" && <span className="badge warn"><span className="dot" />Revisi</span>}
                          {s.status === "draft" && <span className="badge neutral"><span className="dot" />Draft</span>}
                          {s.status === "bad" && <span className="badge bad"><span className="dot" />Ditolak</span>}
                        </td>
                        <td><button className="btn subtle sm"><Icon name="eye" size={12} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
