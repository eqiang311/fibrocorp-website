'use client'

import dynamic from 'next/dynamic'
import { useRef, useEffect, useState } from 'react'

const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => <div style={{ height: '260px', background: '#e8f5ed', borderRadius: '2px' }} />,
})

const LOCATIONS = [
  { name: 'South Korea', lat: 37.57, lng: 126.98 },
  { name: 'Saudi Arabia', lat: 23.89, lng: 45.08 },
  { name: 'Egypt', lat: 26.82, lng: 30.80 },
  { name: 'United States', lat: 37.09, lng: -95.71 },
]

export default function GlobeSection() {
  const containerRef = useRef(null)
  const globeRef = useRef(null)
  const [width, setWidth] = useState(300)

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  function handleGlobeReady() {
    if (!globeRef.current) return
    const controls = globeRef.current.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
  }

  return (
    <div style={{
      marginTop: '16px',
      padding: '14px 16px',
      background: '#f0f7f2',
      border: '0.5px solid #c8dece',
      borderRadius: '2px',
    }}>
      <div style={{
        fontSize: '10px',
        fontWeight: '500',
        color: '#2d7a4f',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '10px',
      }}>
        Global presence
      </div>
      <div ref={containerRef} style={{ height: '260px', overflow: 'hidden' }}>
        <Globe
          ref={globeRef}
          width={width}
          height={260}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          atmosphereColor="#6dc98a"
          atmosphereAltitude={0.15}
          pointsData={LOCATIONS}
          pointLat="lat"
          pointLng="lng"
          pointLabel="name"
          pointColor={() => '#2d7a4f'}
          pointAltitude={0.06}
          pointRadius={0.5}
          enablePointerInteraction={true}
          animateIn={true}
          onGlobeReady={handleGlobeReady}
        />
      </div>
    </div>
  )
}
