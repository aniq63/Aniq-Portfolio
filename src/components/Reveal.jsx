import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    let done = false

    const cleanup = () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
    }

    const show = () => {
      if (done) return
      done = true
      setVisible(true)
      cleanup()
    }

    const checkPosition = () => {
      if (element.getBoundingClientRect().top < window.innerHeight) show()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) show()
      },
      { threshold: 0, rootMargin: '0px 0px -16px 0px' },
    )

    observer.observe(element)
    window.addEventListener('scroll', checkPosition, { passive: true })
    window.addEventListener('resize', checkPosition)
    checkPosition()

    return cleanup
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
