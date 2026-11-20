import { useMemo } from 'react'

const WIDTH = 1440
const HEIGHT = 900
const NODE_COUNT = 34
const MAX_DISTANCE = 245

function createMesh() {
  let seed = 17
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  const nodes = Array.from({ length: NODE_COUNT }, (_, index) => ({
    id: index,
    x: 80 + random() * (WIDTH - 160),
    y: 70 + random() * (HEIGHT - 140),
    radius: 1.6 + random() * 2.2,
  }))

  const edges = []
  nodes.forEach((node, index) => {
    nodes.slice(index + 1).forEach((other) => {
      const distance = Math.hypot(node.x - other.x, node.y - other.y)
      if (distance < MAX_DISTANCE) {
        edges.push({
          id: `${node.id}-${other.id}`,
          x1: node.x,
          y1: node.y,
          x2: other.x,
          y2: other.y,
          opacity: 0.18 + (1 - distance / MAX_DISTANCE) * 0.5,
        })
      }
    })
  })

  return { nodes, edges }
}

export default function NeuralBackground() {
  const { nodes, edges } = useMemo(createMesh, [])

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere__glow atmosphere__glow--blue" />
      <div className="atmosphere__glow atmosphere__glow--violet" />
      <svg
        className="atmosphere__mesh"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="atmosphere__edges">
          {edges.map((edge) => (
            <line
              key={edge.id}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              strokeOpacity={edge.opacity}
            />
          ))}
        </g>
        <g className="atmosphere__nodes">
          {nodes.map((node) => (
            <circle key={node.id} cx={node.x} cy={node.y} r={node.radius} />
          ))}
        </g>
        <circle className="atmosphere__pulse" cx="960" cy="320" r="4" />
      </svg>
    </div>
  )
}
