<template>
  <section class="gradient">
    <div class="gradient__header">
      <input v-model.trim="val1" type="text" placeholder="#fff" />
      <input v-model.trim="val2" type="text" placeholder="#fff" />
    </div>
    <div class="gradient__part">
      <div :style="{ background: getValue }" class="gradient__box"></div>
      <div class="gradient___btns">
        <base-link
          content="Linear"
          type="button"
          @click="state('linear')"
          :class="{ active: getRadius === 'linear' }"
        ></base-link>
        <base-link
          :class="{ btn: true, active: getRadius === 'radial' }"
          content="Radial"
          type="button"
          @click="state('radial')"
          class="btn btn-radial"
        ></base-link>
      </div>
      <div class="gradient__slider"></div>
      <transition name="ranger"
        ><div v-show="getRadius === 'linear'" class="slidecontainer">
          <input
            type="range"
            min="-180"
            max="180"
            value="50"
            class="slider"
            id="myRange"
            @input="getSliderRange($event)"
          /></div
      ></transition>
      <div id="susu">
        <p>background : {{ getValue }};</p>
        <div class="value__btns">
          <!-- <base-link @click="select" content="Select" type="button"></base-link> -->
          <base-link
            :class="{ copied: copied }"
            @click="copy"
            :content="copied ? 'Copied' : 'Copy'"
            type="button"
          ></base-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseLink from "../base/BaseLink.vue";
// import GradientInput from "../GradientInput.vue";
export default {
  components: { BaseLink },
  data() {
    return {
      val1: "",
      val2: "",
      radius: "",
      degree: null,
      myVal: "50",
      copied: false,
    };
  },
  methods: {
    state(val) {
     
      this.radius = val;
    },
    getSliderRange(e) {
      this.degree = e.target.value;
    },
    async copy() {
      try {
        
        const copyToClipboard = function (text) {
          const elem = document.createElement("textarea");
          elem.value = text;
          document.body.appendChild(elem);
          elem.select();
          document.execCommand("copy");
          document.body.removeChild(elem);
        };
        await copyToClipboard(this.getValue);
        let audio = new Audio("tone.wav");
        audio.play();
        audio.volume = 0.2;
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 800);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    getDegree() {
      return this.degree;
    },
    getValue() {
      return this.radius === "linear"
        ? `linear-gradient(${this.getDegree}deg, ${this.val1}, ${this.val2})`
        : `radial-gradient(${this.val1}, ${this.val2})`;
    },
    getRadius() {
      return this.radius;
    },
  },
  created() {
    this.radius = "linear";
    this.degree = "45";
    this.val1 = "rgb(255, 38, 0)";
    this.val2 = "rgb(128, 0, 128)";
  },
  // component: { GradientInput },
};
</script>

<style lang="scss" scoped>
.gradient {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-bottom: 6rem;
  }
  &__header {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 29rem) {
      flex-direction: column;
      & > * {
        margin-bottom: 1rem;
      }
    }
  }
  &__part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > * {
      margin-bottom: 2rem;
    }
  }
  &__box {
    width: 40rem;
    height: 40rem;
    // background: radial-gradient(45deg, blue, red);
    background: linear-gradient(45deg, rgb(255, 38, 0), rgb(128, 0, 128));
    border-radius: 10px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.37);

    @media only screen and (max-width: 29rem) {
      flex-direction: column;
      width: 30rem;
      height: 30rem;
    }
    @media only screen and (max-width: 24rem) {
      width: 20rem;
      height: 20rem;
    }
  }
}
input {
  padding: 1.3rem;
  outline: none;
  border: none;
  height: 5rem;
  border: 2px solid rgba(128, 0, 128, 0.288);
  width: 30rem;
  border-radius: 6px;
  @media only screen and (max-width: 24rem) {
    width: 20rem;
    height: 3rem;
    padding: 1rem;
  }
}
.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #0423aa; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04aa6d; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
.ranger-enter-from,
.ranger-leave-to {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-5rem);
  z-index: -99;
}
.ranger-enter-active,
.ranger-leave-active {
  transition: all 0.4s;
}

.ranger-enter-to,
.ranger-leave-from {
  z-index: -99;
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}
.gradient___btns {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.active,
.copied {
  background-color: blue;
  color: white;
}
#susu {
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.363);
  display: flex;
  flex-direction: column;
}
.value__btns {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
