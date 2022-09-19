import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{   
        fps_limit: 60,     
        particles: {
          fullScreen: false,
          number: {
            value: 0,
            density: {
              enable: true,
              value_area: 15000,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "",
            stroke: {
              width: 1,
              color: "#d0d0d0",
            },
            polygon: {
              nb_sides: 5
            }
          },
          image: {
            enable: true,
            src: "../Assets/avatar.svg",
            width: 100,
            height: 100,
          },
          line_linked: {
            enable: false,
            opacity: 1,
            color: "rgba(150,150,150)",
            distance: 200,
            width: 1,
          },
          move: {
            enable: true,
            direction: "none",
            speed: .5,
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            }
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: .1,
              sync: false
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: true,
                force: 2000,
                smooth: 10,
              }
            }
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            
            }
          },
        },
        
        retina_detect: true,
        
      }}
    />
  );
}

export default Particle;
