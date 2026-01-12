import StaticBackground from "./StaticBackground"
import { useState, useEffect, useRef } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)

  // Initial setup: disable scroll restoration, clear hash, and scroll to top
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Clear any hash in URL to prevent auto-scroll to anchors
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }

    // Reset scroll position immediately
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  // Freeze page completely during preloader
  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (loading) {
      // Save current scroll position (should be 0)
      const scrollY = window.scrollY

      // Freeze the page completely - no scroll possible
      html.style.overflow = 'hidden'
      body.style.overflow = 'hidden'
      body.style.position = 'fixed'
      body.style.top = '0'
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'

      // Force scroll to 0
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    } else {
      // Unfreeze - reset body styles first
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''

      // Reset scroll position to top before enabling scroll
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // Small delay before enabling scroll to ensure position is set
      requestAnimationFrame(() => {
        html.style.overflow = ''
        body.style.overflow = ''

        // Final scroll reset
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      })
    }

    // Cleanup on unmount
    return () => {
      html.style.overflow = ''
      body.style.overflow = ''
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
    }
  }, [loading]);

  useEffect(() => {
    if (countDone) {
      // Ensure scroll is at top before any fade animation (instant, no animation)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

      // Fade teks
      const fadeTextTimer = setTimeout(() => setFadeText(true), 300)

      // Fade seluruh screen - start after text fade
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 600)

      // Unmount preloader setelah animasi fade selesai
      const hideTimer = setTimeout(() => setLoading(false), 1200)

      return () => {
        clearTimeout(fadeTextTimer)
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
