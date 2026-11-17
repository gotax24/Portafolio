export function ArrowUpRightIcon() {
  return (
    <span className="icon-wrapper" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </span>
  )
}

export function LockIcon() {
  return (
    <span className="icon-wrapper" aria-hidden="true">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect
          x="3.3"
          y="7.3"
          width="9.4"
          height="6.4"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M5.3 7.3V5.3C5.3 3.8 6.5 2.5 8 2.5C9.5 2.5 10.7 3.8 10.7 5.3V7.3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    </span>
  )
}

export function LinkedInIcon() {
  return (
    <span className="social-icon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 10.5V16.5M8 7.5V7.6M12 16.5V13C12 11.6 13 10.5 14.4 10.5C15.8 10.5 16.5 11.5 16.5 13V16.5M12 10.5V16.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function GitHubIcon() {
  return (
    <span className="social-icon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 21V17.5C15.1 16.3 14.7 15.4 14 15C17 14.7 20 13.5 20 9C20 7.7 19.5 6.6 18.7 5.7C19.1 4.6 19.1 3.3 18.5 2.2C18.5 2.2 17.4 1.9 15 3.5C13.1 3 10.9 3 9 3.5C6.6 1.9 5.5 2.2 5.5 2.2C4.9 3.3 4.9 4.6 5.3 5.7C4.5 6.6 4 7.7 4 9C4 13.5 7 14.7 10 15C9.3 15.4 8.9 16.3 9 17.5V21M9 18C6 19.3 6 15.5 4 15"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function InstagramIcon() {
  return (
    <span className="social-icon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    </span>
  )
}

export function EmailIcon() {
  return (
    <span className="social-icon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M3.5 6.5L12 12.5L20.5 6.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function SocialPlatformIcon({ id }) {
  if (id === 'linkedin') return <LinkedInIcon />
  if (id === 'github') return <GitHubIcon />
  if (id === 'instagram') return <InstagramIcon />
  if (id === 'email') return <EmailIcon />
  return null
}
