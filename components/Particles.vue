<script setup>
import { loadFull } from "tsparticles";
import { ParticlesComponent } from 'vue3-particles';
const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

const options = ref({
  // background: {
  //   color: {
  //     value: '#ACBD92'
  //   }
  // },
  fpsLimit: 120,
  interactivity: {
    // events: {
    //   onClick: {
    //     enable: true,
    //     mode: 'push'
    //   },
    //   onHover: {
    //     enable: true,
    //     mode: 'repulse'
    //   },
    //   resize: true
    // },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: 'bottom',
      enable: true,
      // outMode: 'bounce',
      random: true,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'image',
      image:{
        src:'/img/hart.svg'
      }
    },
    size: {
      random: true,
      value: 15
    }
  },
  detectRetina: true
});
// const options = ref({
  
//   particles: {
//     move: {
//       direction: "bottom",
//       enable: true,
//       random: false,
//       straight: false,
//     },
//     opacity: {
//       value: { min: 0.1, max: 0.5 },
//     },
//     size: {
//       value: { min: 1, max: 10 },
//     },
//     wobble: {
//       distance: 20,
//       enable: true,
//       speed: {
//         min: -5,
//         max: 5,
//       },
//     },
//   },
// })
</script>
<template>
  <ClientOnly>
    <ParticlesComponent id="tsparticles" :options="options" :particles-init="particlesInit" />
  </ClientOnly>
</template>
