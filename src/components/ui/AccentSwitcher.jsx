import { clsx } from 'clsx'
import { useTheme } from '@/context/themeContextObject'

export function AccentSwitcher() {
  const {
    state: { accentId },
    actions: { setAccent },
    meta: { options },
  } = useTheme()

  return (
    <fieldset className="accent-switcher" aria-label="Selector de color de acento">
      <span className="accent-label">Acento</span>
      <div className="accent-swatch-list">
        {options.map((option) => {
          const isActive = accentId === option.id
          return (
            <button
              key={option.id}
              type="button"
              className={clsx('accent-swatch', isActive && 'is-active')}
              style={{ '--swatch-color': option.value }}
              onClick={() => setAccent(option.id)}
              title={`Color de acento: ${option.name}`}
              aria-label={`Cambiar color de acento a ${option.name}`}
              aria-pressed={isActive}
            />
          )
        })}
      </div>
    </fieldset>
  )
}
