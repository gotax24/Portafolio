import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/context/themeContextObject'
import { accentOptions } from '@/data/profileData'

const STORAGE_KEY = 'gotax:theme:v1'
const storageCache = new Map()

function readStoredAccentId() {
  if (typeof window === 'undefined') {
    return accentOptions[0].id
  }
  if (storageCache.has(STORAGE_KEY)) {
    return storageCache.get(STORAGE_KEY)
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return accentOptions[0].id
    const parsed = JSON.parse(raw)
    const found = accentOptions.find((item) => item.id === parsed?.id)
    const resolvedId = found ? found.id : accentOptions[0].id
    storageCache.set(STORAGE_KEY, resolvedId)
    return resolvedId
  } catch {
    return accentOptions[0].id
  }
}

function writeStoredAccent(accentObj) {
  try {
    const payload = JSON.stringify({
      id: accentObj.id,
      value: accentObj.value,
      muted: accentObj.muted,
    })
    window.localStorage.setItem(STORAGE_KEY, payload)
    storageCache.set(STORAGE_KEY, accentObj.id)
  } catch {
    // Ignore storage quota or private browsing restrictions
  }
}

export function ThemeProvider({ children }) {
  const [accentId, setAccentId] = useState(readStoredAccentId)

  const currentAccent =
    accentOptions.find((item) => item.id === accentId) || accentOptions[0]

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', currentAccent.value)
    document.documentElement.style.setProperty('--accent-muted', currentAccent.muted)
    writeStoredAccent(currentAccent)
  }, [currentAccent])

  const contextValue = useMemo(
    () => ({
      state: {
        accentId: currentAccent.id,
        currentAccent,
      },
      actions: {
        setAccent: setAccentId,
      },
      meta: {
        options: accentOptions,
      },
    }),
    [currentAccent],
  )

  return <ThemeContext value={contextValue}>{children}</ThemeContext>
}
