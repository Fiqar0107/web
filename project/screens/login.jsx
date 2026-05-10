// screens/login.jsx — dual-role login (mahasiswa / admin)
const LoginScreen = () => {
  const [role, setRole] = React.useState("mahasiswa");
  return (
    <div className="app" data-role={role}>
      <div className="auth-shell">
        <div className="auth-side">
          <Brand />
          <div style={{ marginTop: 28, maxWidth: 380 }}>
            <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", opacity: .75, marginBottom: 10 }}>
              Sistem Verifikasi Tugas Akhir
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.2, margin: 0, letterSpacing: "-.01em" }}>
              Cek judul, kelengkapan berkas, dan plagiasi dalam satu alur.
            </h2>
            <p style={{ fontSize: 13, opacity: .8, marginTop: 12, lineHeight: 1.55 }}>
              Diperuntukkan bagi mahasiswa dan staf prodi Administrasi Bisnis Internasional. Submission tervalidasi otomatis sebelum sidang.
            </p>
          </div>
          <div className="auth-art">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              <div className="auth-stat"><strong>1.284</strong> submission</div>
              <div className="auth-stat"><strong>97,2%</strong> uptime</div>
              <div className="auth-stat"><strong>4</strong> tahap cek</div>
            </div>
          </div>
        </div>
        <div className="auth-form-wrap">
          <div className="auth-form">
            <h1>Masuk ke akun Anda</h1>
            <div className="desc">Gunakan SSO universitas atau kredensial yang diberikan.</div>
            <div className="role-toggle">
              <button className={role === "mahasiswa" ? "on" : ""} onClick={() => setRole("mahasiswa")}>Mahasiswa</button>
              <button className={role === "admin" ? "on" : ""} onClick={() => setRole("admin")}>Admin Prodi</button>
            </div>
            <div className="field" style={{ marginBottom: 10 }}>
              <label>{role === "mahasiswa" ? "NIM" : "NIP / Email Staf"}</label>
              <input type="text" defaultValue={role === "mahasiswa" ? "21080694076" : "staf.tu@uni.ac.id"} />
            </div>
            <div className="field" style={{ marginBottom: 14 }}>
              <label>Kata Sandi</label>
              <input type="password" defaultValue="••••••••••" />
              <span className="hint">Lupa sandi? Hubungi TU Prodi.</span>
            </div>
            <button className="btn primary" style={{ width: "100%", height: 36, justifyContent: "center" }}>
              Masuk sebagai {role === "mahasiswa" ? "Mahasiswa" : "Admin"}
              <Icon name="arrow" size={13} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "16px 0 12px" }}>
              <div className="hr" style={{ flex: 1 }} />
              <span style={{ fontSize: 11, color: "var(--text-subtle)" }}>atau</span>
              <div className="hr" style={{ flex: 1 }} />
            </div>
            <button className="btn" style={{ width: "100%", height: 36, justifyContent: "center" }}>
              <Icon name="shield" size={13} /> SSO Universitas
            </button>
            <div style={{ marginTop: 22, fontSize: 11, color: "var(--text-subtle)", textAlign: "center" }}>
              Dengan masuk, Anda menyetujui kebijakan integritas akademik prodi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
window.LoginScreen = LoginScreen;
