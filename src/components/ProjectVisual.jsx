export default function ProjectVisual({ variant }) {
  if (variant === 'reviews') {
    return (
      <div className="project-visual project-visual--reviews" aria-hidden="true">
        <div className="review-rows">
          <span className="review-row">
            <i className="review-dot review-dot--positive" />
            <b />
            <em />
          </span>
          <span className="review-row">
            <i className="review-dot review-dot--positive" />
            <b />
            <em />
          </span>
          <span className="review-row">
            <i className="review-dot review-dot--negative" />
            <b />
            <em />
          </span>
          <span className="review-row">
            <i className="review-dot review-dot--mixed" />
            <b />
            <em />
          </span>
        </div>
        <div className="review-core">RoBERTa</div>
      </div>
    )
  }

  if (variant === 'documents') {
    return (
      <div className="project-visual project-visual--documents" aria-hidden="true">
        <div className="document-stack">
          <span />
          <span />
          <span />
        </div>
        <div className="vector-field">
          {Array.from({ length: 9 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'forecast') {
    return (
      <div className="project-visual project-visual--forecast" aria-hidden="true">
        <svg viewBox="0 0 320 160" preserveAspectRatio="none">
          <path className="forecast-grid" d="M0 40H320M0 80H320M0 120H320" />
          <path className="forecast-band" d="M0 122C40 112 58 124 92 98S150 72 184 84S236 58 270 48S304 36 320 42V160H0Z" />
          <path className="forecast-line" d="M0 122C40 112 58 124 92 98S150 72 184 84S236 58 270 48S304 36 320 42" />
          <circle className="forecast-point" cx="270" cy="48" r="5" />
        </svg>
      </div>
    )
  }

  if (variant === 'analytics') {
    return (
      <div className="project-visual project-visual--analytics" aria-hidden="true">
        <svg viewBox="0 0 320 160">
          <path className="analytics-links" d="M42 108 104 54 176 96 248 44M104 54 176 96 272 120M42 108 176 96" />
          <circle cx="42" cy="108" r="7" />
          <circle cx="104" cy="54" r="6" />
          <circle cx="176" cy="96" r="9" />
          <circle cx="248" cy="44" r="6" />
          <circle cx="272" cy="120" r="7" />
        </svg>
      </div>
    )
  }

  return (
    <div className="project-visual project-visual--tutor" aria-hidden="true">
      <div className="tutor-bubble tutor-bubble--question">Explain retrieval</div>
      <div className="tutor-bubble tutor-bubble--answer">
        <span />
        <span />
        <span />
      </div>
      <div className="tutor-whiteboard">
        <svg viewBox="0 0 120 48">
          <path d="M6 34C28 8 42 42 62 20S94 12 114 30" />
        </svg>
      </div>
    </div>
  )
}
