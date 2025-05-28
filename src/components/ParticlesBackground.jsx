// src/components/ParticlesBackground.jsx
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "#f9fafb",
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 2,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  )
}

export default ParticlesBackground
