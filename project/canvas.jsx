// canvas.jsx — top-level Design Canvas layout
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "navy",
  "showHistoryAdmin": false
}/*EDITMODE-END*/;

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme to document so :root vars switch
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    root.setAttribute("data-accent", t.accent);
  }, [t.theme, t.accent]);

  // Standard desktop artboard size
  const W = 1280, H = 800;

  return (
    <>
      <DesignCanvas>
        <DCSection id="auth" title="Otentikasi" subtitle="Login dual-role · mahasiswa & admin">
          <DCArtboard id="login" label="Login · dual role" width={1100} height={680}>
            <LoginScreen />
          </DCArtboard>
        </DCSection>

        <DCSection id="dashboard" title="Dashboard" subtitle="Dua varian: data-dense table vs status board">
          <DCArtboard id="dash-a" label="A · KPI + tabel aktivitas (mahasiswa)" width={W} height={H}>
            <DashboardA role="mahasiswa" />
          </DCArtboard>
          <DCArtboard id="dash-b" label="B · Status board kanban (admin)" width={W} height={H}>
            <DashboardB role="admin" />
          </DCArtboard>
        </DCSection>

        <DCSection id="upload" title="Pengajuan Baru" subtitle="Form judul + unggah berkas + validasi sisi-bar">
          <DCArtboard id="up" label="Form pengajuan" width={W} height={H}>
            <UploadScreen role="mahasiswa" />
          </DCArtboard>
        </DCSection>

        <DCSection id="title" title="Cek Kesamaan Judul" subtitle="Persentase + judul mirip + distribusi">
          <DCArtboard id="title-1" label="Hasil cek judul" width={W} height={H}>
            <TitleCheckScreen role="mahasiswa" />
          </DCArtboard>
        </DCSection>

        <DCSection id="docs" title="Kelengkapan Berkas" subtitle="Checklist 7 berkas + aturan validasi per dokumen">
          <DCArtboard id="docs-1" label="Checklist berkas" width={W} height={H}>
            <DocumentCheckScreen role="mahasiswa" />
          </DCArtboard>
        </DCSection>

        <DCSection id="drive" title="Integrasi Google Drive (Admin)" subtitle="Drive sebagai sumber tunggal database judul & plagiasi lokal">
          <DCArtboard id="drive-1" label="Konfigurasi Drive · folder & sinkron" width={W} height={H}>
            <DriveIntegrationScreen role="admin" />
          </DCArtboard>
        </DCSection>

        <DCSection id="local" title="Plagiasi · Database Lokal" subtitle="Indeks Drive: TA prodi + jurnal internal + modul kuliah">
          <DCArtboard id="local-1" label="Hasil plagiasi lokal" width={W} height={H}>
            <LocalPlagiarismScreen role="mahasiswa" />
          </DCArtboard>
        </DCSection>

        <DCSection id="ext" title="Plagiasi · Eksternal (via Turnitin)" subtitle="Dua varian report viewer">
          <DCArtboard id="ext-a" label="A · Three-pane reader (mahasiswa)" width={W} height={H}>
            <ExternalReportA role="mahasiswa" />
          </DCArtboard>
          <DCArtboard id="ext-b" label="B · Annotated single-column (admin)" width={W} height={H}>
            <ExternalReportB role="admin" />
          </DCArtboard>
        </DCSection>

        <DCSection id="final" title="Berita Acara Final" subtitle="Laporan akhir + tanda tangan elektronik penanggung jawab pemeriksa & koorprodi">
          <DCArtboard id="final-1" label="Laporan final · siap unduh" width={W} height={1100}>
            <FinalReportScreen role="mahasiswa" />
          </DCArtboard>
        </DCSection>

        <DCSection id="history" title="Riwayat" subtitle="Tabel semua pengajuan termasuk draft & yang ditolak">
          <DCArtboard id="hist" label="Riwayat submission" width={W} height={H}>
            <HistoryScreen role={t.showHistoryAdmin ? "admin" : "mahasiswa"} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Skema Warna">
          <TweakRadio
            label="Mode"
            value={t.theme}
            onChange={(v) => setTweak("theme", v)}
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
            ]}
          />
          <TweakRadio
            label="Accent"
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={[
              { value: "navy", label: "Navy" },
              { value: "teal", label: "Teal" },
              { value: "plum", label: "Plum" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Konteks">
          <TweakToggle
            label="Riwayat sebagai admin"
            value={t.showHistoryAdmin}
            onChange={(v) => setTweak("showHistoryAdmin", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
