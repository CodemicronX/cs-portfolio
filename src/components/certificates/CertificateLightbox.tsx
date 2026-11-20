import { ChevronLeft, ChevronRight, Maximize, X, ZoomIn, ZoomOut } from 'lucide-react'
import { useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { type Certificate } from '../../data/certificates'
import { certificateAlt, publicAsset } from '../../lib/assets'

interface LightboxProps {
  certificate: Certificate
  index: number
  count: number
  onDismiss: () => void
  onMove: (offset: number) => void
  onImageError: () => void
}

const minimumZoom = 1
const maximumZoom = 3
const zoomStep = 0.5

export function CertificateLightbox({ certificate, index, count, onDismiss, onMove, onImageError }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [zoomState, setZoomState] = useState({ id: certificate.id, value: minimumZoom })
  const zoom = zoomState.id === certificate.id ? zoomState.value : minimumZoom

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.showModal()
    closeRef.current?.focus()
    return () => dialog.close()
  }, [])

  useLayoutEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2
    viewport.scrollTop = (viewport.scrollHeight - viewport.clientHeight) / 2
  }, [certificate.id, zoom])

  function changeZoom(value: number) {
    setZoomState({ id: certificate.id, value: Math.min(maximumZoom, Math.max(minimumZoom, value)) })
  }

  function navigate(offset: number) {
    changeZoom(minimumZoom)
    onMove(offset)
  }

  function handleKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Tab') {
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), [tabindex="0"]'))
      const first = controls[0]
      const last = controls.at(-1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    const offset = event.key === 'ArrowLeft' ? -1 : event.key === 'ArrowRight' ? 1 : 0
    if (offset && count > 1 && (zoom === 1 || event.target !== viewportRef.current)) {
      event.preventDefault()
      navigate(offset)
    }
  }

  return (
    <dialog
      className="lightbox"
      ref={dialogRef}
      aria-labelledby="certificate-viewer-title"
      onCancel={(event) => {
        event.preventDefault()
        onDismiss()
      }}
      onKeyDown={handleKeys}
    >
      <header className="lightbox-header">
        <div>
          <h2 id="certificate-viewer-title">{certificate.title}</h2>
          <p>{certificate.award ?? certificate.issuer}</p>
        </div>
        <button ref={closeRef} type="button" className="icon-button" aria-label="Close certificate viewer" onClick={onDismiss}>
          <X aria-hidden="true" size={23} />
        </button>
      </header>
      <div
        className="lightbox-viewport"
        ref={viewportRef}
        tabIndex={zoom > minimumZoom ? 0 : -1}
        role="region"
        aria-label="Certificate image"
      >
        <div className="lightbox-canvas" style={{ '--zoom': zoom } as CSSProperties}>
          <img
            key={certificate.id}
            src={publicAsset(certificate.image ?? '')}
            alt={certificateAlt(certificate.title, certificate.award)}
            onError={onImageError}
          />
        </div>
      </div>
      <div className="lightbox-controls">
        <div role="group" aria-label="Browse certificates">
          <button type="button" className="icon-button" aria-label="Previous certificate" aria-disabled={count < 2} onClick={() => count > 1 && navigate(-1)}>
            <ChevronLeft aria-hidden="true" />
          </button>
          <span aria-live="polite" aria-atomic="true">{index + 1} / {count}</span>
          <button type="button" className="icon-button" aria-label="Next certificate" aria-disabled={count < 2} onClick={() => count > 1 && navigate(1)}>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div role="group" aria-label="Certificate zoom">
          <button type="button" className="icon-button" aria-label="Zoom out" aria-disabled={zoom <= minimumZoom} onClick={() => changeZoom(zoom - zoomStep)}>
            <ZoomOut aria-hidden="true" size={20} />
          </button>
          <button type="button" className="icon-button" aria-label="Reset zoom" onClick={() => changeZoom(minimumZoom)}>
            <Maximize aria-hidden="true" size={19} />
          </button>
          <button type="button" className="icon-button" aria-label="Zoom in" aria-disabled={zoom >= maximumZoom} onClick={() => changeZoom(zoom + zoomStep)}>
            <ZoomIn aria-hidden="true" size={20} />
          </button>
          <span className="zoom-readout" aria-live="polite">{Math.round(zoom * 100)}%</span>
        </div>
      </div>
    </dialog>
  )
}
