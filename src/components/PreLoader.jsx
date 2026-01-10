import StaticBackground from "./StaticBackground"
import { useState, useEffect } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)

  // Hide scrollbar during preloader and scroll to top
  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (loading) {
      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
      // Scroll to top immediately when preloader is active
      window.scrollTo(0, 0)
    } else {
      html.style.overflow = ''
      body.style.overflow = ''
      // Position is already at top since scroll was blocked during preloader
    }

    // Cleanup on unmount
    return () => {
      html.style.overflow = ''
      body.style.overflow = ''
    }
  }, [loading]);

  // Ensure scroll is at top after preloader finishes
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  // Initial scroll to top on mount (catches browser auto-scroll restoration)
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    // Force scroll to top immediately
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (countDone) {
      // Fade teks - reduced from 3000ms to 800ms
      const fadeTextTimer = setTimeout(() => setFadeText(true), 300)

      // Scroll to top BEFORE fade starts (while preloader still covers screen)
      const scrollTimer = setTimeout(() => {
        window.scrollTo(0, 0)
      }, 500)

      // Fade seluruh screen - reduced from 2000ms to 600ms
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 600)

      // Unmount preloader setelah animasi fade selesai - reduced from 3000ms to 1200ms
      const hideTimer = setTimeout(() => setLoading(false), 1200)

      return () => {
        clearTimeout(fadeTextTimer)
        clearTimeout(scrollTimer)
        clearTimeout(fadeScreenTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [countDone])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${fadeScreen ? "opacity-0" : "opacity-100"
          }`}
      >
        {/* Using lightweight StaticBackground instead of Aurora for faster initial load */}
        <StaticBackground />
        <div
          className={`absolute text-white text-6xl font-bold transition-all duration-1000 ${fadeText ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
            }`}
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
            onEnd={() => setCountDone(true)}
          />
        </div>
      </div>
    )
  )
}

export default PreLoader
