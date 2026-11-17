export function CertificationItem({ item }) {
  return (
    <article className="cert-row" data-reveal>
      <div className="cert-issuer-col">
        <span className="cert-issuer">{item.issuer}</span>
        <span className="cert-issued">{item.issuedAt}</span>
      </div>

      <div className="cert-main-col">
        <h3 className="cert-title">{item.title}</h3>
        <p className="cert-skills">
          <span className="cert-skills-label">Aptitudes: </span>
          {item.skills.join(' · ')}
        </p>
      </div>

      <div className="cert-credential-col">
        {item.credentialId ? (
          <div className="cert-credential-box">
            <span className="cert-credential-label">ID de credencial</span>
            <code className="cert-credential-code">{item.credentialId}</code>
          </div>
        ) : (
          <span className="cert-verified-note">Certificado expedido</span>
        )}
      </div>
    </article>
  )
}
