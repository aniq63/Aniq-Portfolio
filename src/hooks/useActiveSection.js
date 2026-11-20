import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const marker = window.innerHeight * 0.38
      let current = sectionIds[0]

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker) {
          current = id
        }
      })

      setActiveId(current)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  return activeId
}
