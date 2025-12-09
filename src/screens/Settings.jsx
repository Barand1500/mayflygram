import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function Settings() {
  const { theme, toggleTheme } = useTheme()
  const [name, setName] = useState('mayfly_user')
  const [bio, setBio] = useState('Living the moment.\nMayflySystems Founder. 🚀')
  const [editMode, setEditMode] = useState(false)

  const handleSave = () => {
    setEditMode(false)
  }

  return (
    <div className="settings">
      <div className="header">
        <h1>Settings</h1>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h3>Profile Settings</h3>
          
          <div className="settings-item">
            <label>Username</label>
            {editMode ? (
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <span>{name}</span>
            )}
          </div>

          <div className="settings-item">
            <label>Bio</label>
            {editMode ? (
              <textarea 
                value={bio} 
                onChange={(e) => setBio(e.target.value)}
                rows="3"
              />
            ) : (
              <span className="bio-preview">{bio}</span>
            )}
          </div>

          <button 
            className="settings-btn"
            onClick={() => editMode ? handleSave() : setEditMode(true)}
          >
            {editMode ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="settings-section">
          <h3>Appearance</h3>
          
          <div className="settings-item">
            <label>Theme</label>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>

        <div className="settings-section">
          <h3>Notifications</h3>
          
          <div className="settings-item">
            <label>Push Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="settings-item">
            <label>Email Notifications</label>
            <input type="checkbox" />
          </div>
        </div>

        <div className="settings-section">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Settings
