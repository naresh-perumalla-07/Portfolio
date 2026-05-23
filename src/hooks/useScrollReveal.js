import { useEffect, useRef } from 'react'

/**
 * Custom hook that adds an 'in-view' class to elements with the '.reveal'
 * class when they enter the viewport. Used for scroll-triggered animations.
 *
 * @param {number} [threshold=0.08] — percentage of element visible before triggering
 * @returns {React.RefObject} ref to attach to the section container
 */
export function useScrollReveal(threshold = 0.08) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold }
    )

    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
