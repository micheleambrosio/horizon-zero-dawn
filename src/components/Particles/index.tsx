"use client";

import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import styles from "./particles.module.css";

export default function ParticlesContainer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        className={styles.particles}
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: false,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#E8B412",
            },
            links: {
              color: "#448BF8",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outMode: "bounce",
              speed: 1.5,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "triangle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}
