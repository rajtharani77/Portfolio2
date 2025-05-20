import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#1a1a1a", // Dark background for contrast
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
            value: ["#ff5733", "#33ff57", "#3380ff"], // Vibrant colors
          },
          shape: {
            type: "triangle",
          },
          opacity: {
            value: 0.7,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.3,
            },
          },
          size: {
            value: 6,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
