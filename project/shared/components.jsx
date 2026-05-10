// shared/components.jsx — small primitives used across screens
// Exports to window so other Babel script files can use them.

const Icon = ({ name, size = 14, ...rest }) => {
  const paths = {
    home: <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />,
    upload: <><path d="M12 16V4M6 10l6-6 6 6" /><path d="M4 20h16" /></>,
    file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" /></>,
    check: <path d="m4 12 5 5L20 6" />,
    x: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
    chevron: <path d="m9 6 6 6-6 6" />,
    chevdown: <path d="m6 9 6 6 6-6" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    download: <><path d="M12 4v12M6 14l6 6 6-6" /><path d="M4 20h16" /></>,
    history: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    bell: <><path d="M6 18a8 8 0 1 1 12 0" /><path d="M9 18a3 3 0 0 0 6 0" /></>,
    bookmark: <path d="M5 4v17l7-5 7 5V4z" />,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    shield: <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6z" />,
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 0-2 2z" /><path d="M19 18H6" /></>,
    folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    filter: <path d="M4 5h16l-6 8v6l-4-2v-4z" />,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1.3l2.1-1.6-2-3.4-2.4 1A7 7 0 0 0 14.5 4l-.5-2.6h-4L9.5 4a7 7 0 0 0-2 .8L5 3.7l-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .9.1 1.3L3 14.9l2 3.4 2.4-1c.7.4 1.4.7 2.1.9L10 21h4l.5-2.8c.7-.2 1.4-.5 2.1-.9l2.4 1 2-3.4-2.1-1.6c.1-.4.1-.9.1-1.3z" /></>,
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    refresh: <><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v5h1" /></>,
    warn: <><path d="m12 3 10 18H2z" /><path d="M12 10v5M12 18h.01" /></>,
    link: <><path d="M10 14a4 4 0 0 1 0-5.6l3-3a4 4 0 0 1 5.6 5.6l-2 2" /><path d="M14 10a4 4 0 0 1 0 5.6l-3 3a4 4 0 0 1-5.6-5.6l2-2" /></>,
    trash: <><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14h10l1-14" /></>,
    sort: <><path d="M7 4v16M3 8l4-4 4 4" /><path d="M17 20V4M13 16l4 4 4-4" /></>,
    flag: <><path d="M5 21V4M5 4h12l-3 4 3 4H5" /></>,
    chat: <path d="M4 4h16v12H8l-4 4z" />,
    quote: <><path d="M7 7h4v4H7zM7 11c0 4 4 4 4 4" /><path d="M15 7h4v4h-4zM15 11c0 4 4 4 4 4" /></>,
  };
  const p = paths[name];
  if (!p) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {p}
    </svg>
  );
};

// Tiny inline sparkline
const Spark = ({ data, color = "currentColor", w = 64, h = 18 }) => {
  const max = Math.max(...data), min = Math.min(...data);
  const dx = w / (data.length - 1);
  const norm = (v) => h - ((v - min) / (max - min || 1)) * h;
  const d = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i * dx).toFixed(1)},${norm(v).toFixed(1)}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// Small ring/donut by single percentage
const Ring = ({ pct, size = 64, stroke = 6, color }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  const colorClass = pct >= 30 ? 'var(--red)' : pct >= 15 ? 'var(--amber)' : 'var(--green)';
  const ringColor = color || colorClass;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke="var(--surface-3)" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke={ringColor} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={off}
          strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`} />
      </svg>
      <div className="ring-num" style={{ color: ringColor }}>{pct}%</div>
    </div>
  );
};

// Brand mark — placeholder until user provides logo
const Brand = ({ small = false }) => (
  <div className="brand">
    <div className="brand-mark placeholder" title="Drop logo here">LOGO</div>
    {!small && (
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
        <span className="brand-name">SI<span style={{ color: "var(--primary)" }}>Profi</span></span>
        <span className="brand-sub">Adm. Bisnis Internasional</span>
      </div>
    )}
  </div>
);

const Topbar = ({ active = "dashboard", role = "mahasiswa" }) => (
  <div className="topbar">
    <Brand />
    <div className="brand-divider" />
    <nav className="topnav">
      <a className={active === "dashboard" ? "active" : ""}>Dashboard</a>
      <a className={active === "submission" ? "active" : ""}>Submission</a>
      <a className={active === "history" ? "active" : ""}>Riwayat</a>
      <a>Bantuan</a>
    </nav>
    <div className="spacer" />
    <input className="global-search" placeholder="Cari judul, NIM, atau ID submission…" />
    <button className="btn subtle sm" aria-label="Notifications">
      <Icon name="bell" />
    </button>
    <div className="user-pill">
      <div className="avatar">{role === "admin" ? "AD" : "DR"}</div>
      <span>{role === "admin" ? "Admin Prodi" : "Dwi R."}</span>
      <span className="badge neutral mono" style={{ height: 16, fontSize: 9.5 }}>
        {role === "admin" ? "ADMIN" : "MHS"}
      </span>
    </div>
  </div>
);

const Sidebar = ({ active = "dashboard", role = "mahasiswa" }) => {
  const items = role === "admin"
    ? [
        { group: "Verifikasi", entries: [
          { id: "queue", icon: "folder", label: "Antrian Verifikasi", count: "24" },
          { id: "title", icon: "search", label: "Cek Kesamaan Judul", count: "8" },
          { id: "docs", icon: "check", label: "Kelengkapan Berkas", count: "12" },
          { id: "local", icon: "shield", label: "Plagiasi Lokal", count: "5" },
          { id: "ext", icon: "layers", label: "Plagiasi Eksternal", count: "3" },
        ]},
        { group: "Repositori", entries: [
          { id: "repo", icon: "book", label: "Database Judul" },
          { id: "users", icon: "user", label: "Mahasiswa" },
          { id: "log", icon: "history", label: "Audit Log" },
        ]},
      ]
    : [
        { group: "Pengajuan", entries: [
          { id: "dashboard", icon: "home", label: "Dashboard" },
          { id: "new", icon: "upload", label: "Pengajuan Baru" },
          { id: "title", icon: "search", label: "Cek Kesamaan Judul" },
          { id: "docs", icon: "check", label: "Kelengkapan Berkas" },
          { id: "local", icon: "shield", label: "Plagiasi Lokal" },
          { id: "ext", icon: "layers", label: "Plagiasi Eksternal" },
        ]},
        { group: "Lainnya", entries: [
          { id: "history", icon: "history", label: "Riwayat", count: "11" },
          { id: "bookmarks", icon: "bookmark", label: "Tersimpan" },
          { id: "settings", icon: "settings", label: "Pengaturan" },
        ]},
      ];
  return (
    <aside className="sidebar">
      {items.map((g) => (
        <React.Fragment key={g.group}>
          <div className="group-label">{g.group}</div>
          {g.entries.map((e) => (
            <div key={e.id} className={"nav-item" + (e.id === active ? " active" : "")}>
              <span className="nav-ico"><Icon name={e.icon} /></span>
              <span>{e.label}</span>
              {e.count && <span className="nav-count">{e.count}</span>}
            </div>
          ))}
        </React.Fragment>
      ))}
    </aside>
  );
};

const SubBar = ({ crumbs = [], meta }) => (
  <div className="subbar">
    <div className="crumbs">
      {crumbs.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">›</span>}
          {i === crumbs.length - 1 ? <strong>{c}</strong> : <span>{c}</span>}
        </React.Fragment>
      ))}
    </div>
    <div className="spacer" />
    {meta && <span className="meta">{meta}</span>}
  </div>
);

Object.assign(window, { Icon, Spark, Ring, Brand, Topbar, Sidebar, SubBar });
