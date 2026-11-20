const inputs = [
  { y: 128, label: 'reviews' },
  { y: 260, label: 'documents' },
  { y: 392, label: 'demand' },
]

const features = [
  { x: 210, y: 148 },
  { x: 210, y: 216 },
  { x: 210, y: 284 },
  { x: 210, y: 352 },
]

const outputs = [
  { y: 128, label: 'FastAPI' },
  { y: 260, label: 'insights' },
  { y: 392, label: 'monitoring' },
]

export default function HeroGraph() {
  return (
    <div className="hero-graph">
      <svg viewBox="0 0 560 520" role="img" aria-labelledby="hero-graph-title hero-graph-desc">
        <title id="hero-graph-title">From raw signals to deployed machine learning systems</title>
        <desc id="hero-graph-desc">
          A computational diagram connecting reviews, documents, and demand signals through a representation layer into a model runtime, then to an API, insights, and monitoring.
        </desc>

        <g className="hero-graph__grid">
          {[80, 160, 240, 320, 400, 480].map((x) => (
            <line key={`v-${x}`} x1={x} y1="52" x2={x} y2="468" />
          ))}
          {[80, 160, 240, 320, 400, 480].map((y) => (
            <line key={`h-${y}`} x1="52" y1={y} x2="508" y2={y} />
          ))}
        </g>

        <g className="hero-graph__links">
          {inputs.map((input) =>
            features.map((feature) => (
              <line
                key={`${input.label}-${feature.y}`}
                x1="88"
                y1={input.y}
                x2={feature.x - 12}
                y2={feature.y}
              />
            )),
          )}
          <line x1="222" y1="148" x2="278" y2="242" />
          <line x1="222" y1="216" x2="278" y2="248" />
          <line x1="222" y1="284" x2="278" y2="272" />
          <line x1="222" y1="352" x2="278" y2="278" />
          <line x1="402" y1="244" x2="480" y2="128" />
          <line x1="410" y1="260" x2="480" y2="260" />
          <line x1="402" y1="276" x2="480" y2="392" />
        </g>

        <path className="hero-graph__signal" d="M88 260 H198 L278 260 H410 L480 260" />

        <g className="hero-graph__core">
          <polygon points="340,190 404,226 404,294 340,330 276,294 276,226" />
          <text x="340" y="254" textAnchor="middle">
            model
          </text>
          <text x="340" y="276" textAnchor="middle">
            runtime
          </text>
        </g>

        <g className="hero-graph__input-nodes">
          {inputs.map((input) => (
            <g key={input.label}>
              <circle cx="78" cy={input.y} r="8" />
              <text x="100" y={input.y + 4}>
                {input.label}
              </text>
            </g>
          ))}
        </g>

        <g className="hero-graph__feature-nodes">
          {features.map((feature) => (
            <circle key={feature.y} cx={feature.x} cy={feature.y} r="6" />
          ))}
        </g>

        <g className="hero-graph__output-nodes">
          {outputs.map((output) => (
            <g key={output.label}>
              <circle cx="490" cy={output.y} r="8" />
              <text x="472" y={output.y + 4} textAnchor="end">
                {output.label}
              </text>
            </g>
          ))}
        </g>

        <text className="hero-graph__layer-label" x="210" y="432" textAnchor="middle">
          representations
        </text>
        <text className="hero-graph__layer-label" x="340" y="432" textAnchor="middle">
          inference
        </text>
      </svg>
      <p className="hero-graph__caption">Raw signals to deployed inference</p>
    </div>
  )
}
