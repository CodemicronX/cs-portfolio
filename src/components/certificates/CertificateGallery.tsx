import { FileBadge, Maximize2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { certificates, type Certificate } from '../../data/certificates'
import { certificateAlt, publicAsset } from '../../lib/assets'
import { Section } from '../ui/Section'
import { CertificateLightbox } from './CertificateLightbox'

type ImageStatus = 'ready' | 'unavailable'

function CertificateCard({ certificate, status, onStatusChange, onOpen }: {
  certificate: Certificate
  status?: ImageStatus
  onStatusChange: (status: ImageStatus) => void
  onOpen: (opener: HTMLButtonElement) => void
}) {
  const image = status === 'unavailable' ? undefined : certificate.image
  const ready = status === 'ready' && Boolean(image)

  return (
    <article className="panel certificate-card">
      <div className="certificate-preview">
        {image && (
          <img
            className={ready ? 'certificate-image' : 'certificate-image is-loading'}
            src={publicAsset(image)}
            alt=""
            width="720"
            height="480"
            loading="lazy"
            decoding="async"
            onLoad={() => onStatusChange('ready')}
            onError={() => onStatusChange('unavailable')}
          />
        )}
        {ready ? (
          <button type="button" className="certificate-open" aria-label={`View ${certificateAlt(certificate.title, certificate.award)}`} onClick={(event) => onOpen(event.currentTarget)}>
            <span className="certificate-expand"><Maximize2 size={19} aria-hidden="true" /></span>
          </button>
        ) : (
          <span className="certificate-placeholder">
            <FileBadge size={32} strokeWidth={1.4} aria-hidden="true" />
            <span>{image ? 'Loading image' : 'Image coming soon'}</span>
          </span>
        )}
      </div>
      <div className="certificate-body">
        <p className="card-category">{certificate.category}{certificate.year && ` · ${certificate.year}`}</p>
        <h3>{certificate.title}</h3>
        {certificate.award && <p className="award">{certificate.award}</p>}
        <p className="issuer">{certificate.issuer}</p>
        <p>{certificate.description}</p>
        {certificate.verificationUrl && <a className="text-link" href={certificate.verificationUrl}>Verify certificate</a>}
      </div>
    </article>
  )
}

export function CertificateGallery() {
  const [imageStatuses, setImageStatuses] = useState<Partial<Record<string, ImageStatus>>>({})
  const [activeId, setActiveId] = useState<string | null>(null)
  const openerRef = useRef<HTMLButtonElement>(null)
  const viewable = certificates.filter(({ image, id }) => image && imageStatuses[id] !== 'unavailable')
  const index = viewable.findIndex(({ id }) => id === activeId)

  function updateImageStatus(id: string, status: ImageStatus) {
    setImageStatuses((previous) => previous[id] === status ? previous : { ...previous, [id]: status })
  }

  function dismiss() {
    setActiveId(null)
    window.requestAnimationFrame(() => openerRef.current?.focus({ preventScroll: true }))
  }

  function move(offset: number) {
    const next = (index + offset + viewable.length) % viewable.length
    setActiveId(viewable[next].id)
  }

  return (
    <Section
      id="certificates"
      label="Certificates"
      title="Certificate gallery."
      intro="Competition awards and coursework. Certificate scans will be added here as they become available."
    >
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            status={imageStatuses[certificate.id]}
            onStatusChange={(status) => {
              if (status === 'unavailable' && certificate.id === activeId) dismiss()
              updateImageStatus(certificate.id, status)
            }}
            onOpen={(opener) => {
              openerRef.current = opener
              setActiveId(certificate.id)
            }}
          />
        ))}
      </div>
      {index >= 0 && <CertificateLightbox
        certificate={viewable[index]}
        index={index}
        count={viewable.length}
        onDismiss={dismiss}
        onMove={move}
        onImageError={() => {
          const failed = viewable[index]
          if (viewable.length > 1) move(1)
          else dismiss()
          updateImageStatus(failed.id, 'unavailable')
        }}
      />}
    </Section>
  )
}
