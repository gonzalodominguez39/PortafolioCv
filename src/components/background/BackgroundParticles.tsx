import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";
import { useCallback, useEffect, useState, useRef } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Inicializar el motor de partículas
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Tracking del mouse
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    // Actualizar el gradiente directamente en el DOM
    if (overlayRef.current) {
      overlayRef.current.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, transparent 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 0.95) 100%)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles container loaded", container);
  }, []);

  if (!init) {
    return null;
  }

  return (
    <>
      {/* Partículas de fondo */}
      <Particles
        id="tsparticles"
        className="fixed inset-0 -z-10 w-full h-full"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0b0b0b",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#4fc3f7",
            },
            links: {
              color: "#4fc3f7",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Overlay con efecto spotlight */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-0 pointer-events-none spotlight-overlay"
        style={{
          background: 'radial-gradient(circle 300px at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 0.95) 100%)',
        }}
      />
    </>
  );
}