import { Routes, Route, Navigate } from 'react-router-dom'
import { useApp } from './context'
import { useState } from 'react'
import { Icon } from './components/shared'

import LoginScreen from './screens/Login'
import DashboardScreen from './screens/Dashboard'
import UploadScreen from './screens/Upload'
import TitleCheckScreen from './screens/TitleCheck'
import DocumentCheckScreen from './screens/DocumentCheck'
import LocalPlagiarismScreen from './screens/LocalPlagiarism'
import ExternalReportScreen from './screens/ExternalReport'
import FinalReportScreen from './screens/FinalReport'
import HistoryScreen from './screens/History'
import DriveIntegrationScreen from './screens/DriveIntegration'

function ProtectedRoute({ children }) {
  const { loggedIn } = useApp()
  return loggedIn ? children : <Navigate to="/" replace />
}

function SettingsPanel({ open, onClose }) {
  const { theme, setTheme, accent, setAccent } = useApp()
  if (!open) return null

  const accentColors = {
    navy: 'oklch(0.34 0.085 252)',
    teal: 'oklch(0.42 0.085 195)',
    plum: 'oklch(0.36 0.09 320)',
  }

  return (
    <div className="settings-panel">
      <div className="settings-panel-head">
        <span>Tampilan</span>
        <button className="btn subtle sm" style={{ width: 22, height: 22, padding: 0, display: 'grid', placeItems: 'center' }} onClick={onClose}>
          <Icon name="x" size={12} />
        </button>
      </div>
      <div className="settings-panel-body">
        <div className="settings-row">
          <label>Mode</label>
          <div className="seg-ctrl">
            <button className={theme === 'light' ? 'on' : ''} onClick={() => setTheme('light')}>Light</button>
            <button className={theme === 'dark' ? 'on' : ''} onClick={() => setTheme('dark')}>Dark</button>
          </div>
        </div>
        <div className="settings-row">
          <label>Warna</label>
          <div className="accent-chips">
            {Object.entries(accentColors).map(([key, color]) => (
              <div
                key={key}
                className={'accent-chip' + (accent === key ? ' on' : '')}
                style={{ background: color }}
                onClick={() => setAccent(key)}
                title={key}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const { loggedIn } = useApp()
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardScreen /></ProtectedRoute>} />
        <Route path="/new" element={<ProtectedRoute><UploadScreen /></ProtectedRoute>} />
        <Route path="/submission/title" element={<ProtectedRoute><TitleCheckScreen /></ProtectedRoute>} />
        <Route path="/submission/docs" element={<ProtectedRoute><DocumentCheckScreen /></ProtectedRoute>} />
        <Route path="/submission/local" element={<ProtectedRoute><LocalPlagiarismScreen /></ProtectedRoute>} />
        <Route path="/submission/external" element={<ProtectedRoute><ExternalReportScreen /></ProtectedRoute>} />
        <Route path="/submission/final" element={<ProtectedRoute><FinalReportScreen /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><HistoryScreen /></ProtectedRoute>} />
        <Route path="/admin/drive" element={<ProtectedRoute><DriveIntegrationScreen /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {loggedIn && (
        <>
          <button
            className="btn"
            style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 998, boxShadow: '0 2px 8px rgba(0,0,0,.12)' }}
            onClick={() => setSettingsOpen(o => !o)}
            title="Pengaturan tampilan"
          >
            <Icon name="settings" size={13} /> Tampilan
          </button>
          <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
        </>
      )}
    </>
  )
}
