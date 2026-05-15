import { useState } from 'react'

const Settings = () => {
  const [notifications, setNotifications] = useState(true)
  const [theme, setTheme] = useState<'system' | 'dark' | 'light'>('system')
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')

  const handleSave = async () => {
    setIsSaving(true)
    setSavedMessage('')

    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsSaving(false)
    setSavedMessage('Settings saved successfully.')
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-lg shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Settings</p>
          <h2 className="text-3xl font-semibold text-white">Personalize your experience</h2>
          <p className="text-slate-400">Update your notification preferences and theme settings for a tailored dashboard view.</p>
        </div>

        <div className="mt-8 space-y-6">
          <section className="rounded-3xl bg-slate-900/80 p-6">
            <h3 className="text-xl font-semibold text-white">Profile section</h3>
            <p className="mt-2 text-sm text-slate-400">Control your public profile and preferences from a single place.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">Display name</p>
                <p className="mt-2 text-base font-medium text-white">Your personal name</p>
              </div>
              <div className="rounded-3xl border border-white/5 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">Account plan</p>
                <p className="mt-2 text-base font-medium text-white">Standard</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Notifications</h3>
                <p className="mt-2 text-sm text-slate-400">Receive alerts about account activity and product updates.</p>
              </div>
              <button
                type="button"
                onClick={() => setNotifications((prev) => !prev)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  notifications ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-100'
                }`}
              >
                {notifications ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Theme</h3>
                <p className="mt-2 text-sm text-slate-400">Choose the app appearance that fits your workflow.</p>
              </div>
              <div className="flex items-center gap-3">
                {(['system', 'dark', 'light'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTheme(option)}
                    className={`rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                      theme === option
                        ? 'border-sky-500 bg-sky-500/10 text-sky-300'
                        : 'border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/80 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-400">Save your preferences</p>
              {savedMessage && <p className="mt-2 text-sm text-emerald-300">{savedMessage}</p>}
            </div>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center justify-center rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? 'Saving...' : 'Save changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
