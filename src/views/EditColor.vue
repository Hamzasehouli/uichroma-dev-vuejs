<template>
  <section class="section-edit">
    <transition
      ><div v-if="getActiveness.state" class="copy__notif">
        {{ getActiveness.color }} copied!!
      </div></transition
    >
    <div class="header">
      <base-link
        typ="routerLin"
        content="home page"
        :mode="getDisplayState ? 'standard-black' : 'standard-white'"
        path="/"
      ></base-link>
      <img alt="uichroma black logo" v-if="getDisplayState" src="../../public/logo-black.png" />
      <img alt="uichroma white logo" v-else src="../../public/logo-white.png" />
    </div>
    <div
      :class="{
        sub: true,
        'edit__info-dark': getDisplayState,
        'edit__info-light': !getDisplayState,
      }"
    >
      <div :style="{ backgroundColor: myColor }" class="edit__display"></div>
      <div class="edit__name">{{ getMyColorObj.name }}</div>
      <div class="edit__hex">Hex: {{ getMyColorObj.code }}</div>
      <div class="edit__rgb">RGB: {{ rgbVal }}</div>
      <div class="edit__hsl">HSL: {{ hslVal }}</div>
    </div>
    <div class="edit__op-com">
      <div class="edit__opacity">
        <h2>Main color</h2>
        <div
          :style="{
            backgroundColor: vali('main', i),
          }"
          :key="fade"
          v-for="(fade, i) in 31"
          class="edit__opacity__item"
          @click="copyColor(vali('main', i))"
        >
          <div>+{{ i }}</div>
          <div>#{{ vali("main", i) }}</div>
          <div>{{ Math.ceil(i * 3.3) }}%</div>
        </div>
      </div>
      <div class="edit__opacity">
        <h2>Complementary color</h2>
        <div
          :style="{
            backgroundColor: vali('cmpl', w),
          }"
          :key="fading"
          v-for="(fading, w) in 31"
          class="edit__opacity__item"
          @click="copyColor(vali('cmpl', w))"
        >
          <div>+{{ w }}</div>
          <div>#{{ vali("cmpl", w) }}</div>
          <div>{{ Math.ceil(w * 3.3) }}%</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import TheColors from "../components/home-cmp/TheColors.vue";
import tone from "../../public/tone.wav";
export default {
  name: "Edit",
  // components: { TheColors },
  props: ["cl"],
  data() {
    return {
      myColorObj: "",
      rgbVal: "",
      hexVal: "",
      hslVal: "",
      complColor: "",
      complColorHslVal: "",
      active: { state: false, color: "" },
    };
  },
  mounted() {
    const getComplementaryColor = (color = "") => {
      const colorPart = color.slice(1);
      const ind = parseInt(colorPart, 16);
      let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(16);
      while (iter.length < colorPart.length) {
        iter = "0" + iter;
      }
      return "#" + iter;
    };

    this.complColor = getComplementaryColor("#" + this.cl);

    /////////////////////////////////////////////
    const selectedCo = `#${this.cl}`;
    this.hexVal = selectedCo;
    const colorsArr = this.$store.getters.getColors;
    const foundColorObj = colorsArr.find((c) => c.code === selectedCo);

    this.myColorObj = foundColorObj;
    // function componentToHex(c) {
    //   var hex = c.toString(16);
    //   return hex.length == 1 ? "0" + hex : hex;
    // }

    // function rgbToHex(r, g, b) {
    //   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }

    // alert(rgbToHex(0, 142, 189)); // #0033ff

    const hexToRgb = (hex) =>
      hex
        .replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          (m, r, g, b) => "#" + r + r + g + g + b + b
        )
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));

    this.rgbVal = hexToRgb(this.hexVal); // [0, 51, 255]

    function hexToHSL(H) {
      // Convert hex to RGB first
      let r = 0,
        g = 0,
        b = 0;
      if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
      } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
      }
      // Then to HSL
      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

      if (delta == 0) h = 0;
      else if (cmax == r) h = ((g - b) / delta) % 6;
      else if (cmax == g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;

      h = Math.round(h * 60);

      if (h < 0) h += 360;

      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);

      return `${h}% , ${s}% , ${l}%`;
    }

    this.hslVal = hexToHSL(this.hexVal);
    this.complColorHslVal = hexToHSL(this.complColor);

    let myArr = this.hslVal
      .trim()
      .split(",")
      .map((a) => a);
    myArr.push("0.5");
    // const myArr2 = myArr.join(",").trim();
  },
  computed: {
    myColor() {
      return `#${this.cl}`;
    },
    getDisplayState() {
      return this.$store.getters.getDisplayState;
    },
    getActiveness() {
      return this.active;
    },
    getMyColorObj() {
      return this.myColorObj;
    },
  },
  methods: {
    vali(state, val) {
      let bruteArr = state === "main" ? this.hslVal : this.complColorHslVal;
      let myArr = bruteArr
        .trim()
        .split(",")
        .map((a) => a);
      let myVal = val * 3;

      myArr.push(myVal / 100);
      const h = myArr[0].split("%")[0];

      const tata = myArr.slice(1);
      tata.unshift(h);
      const sasa = tata.join(", ");
      // const myArr2 = myArr.join(",").trim();

      return `hsla(${sasa})`;
    },
    async copyColor(val) {
      try {
        const copyToClipboard = function (text) {
          const elem = document.createElement("textarea");
          elem.value = text;
          document.body.appendChild(elem);
          elem.select();
          document.execCommand("copy");
          document.body.removeChild(elem);
        };
        await copyToClipboard(val);
        this.active.color = val;
        this.active.state = true;

        let audio = new Audio(tone);
        audio.play();
        audio.volume = 0.2;
        setTimeout(() => {
          this.active.state = false;
        }, 800);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.copy__notif {
  background-color: hsl(226, 82.4%, 35.7%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999999999;
  font-size: 50px;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.973);
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 60.5rem) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 24rem) {
    font-size: 3rem;
  }
}
.section-edit {
  padding: 5rem;
  margin: 10px;
}
.header {
  z-index: 999;
  margin-bottom: 4rem;
  display: flex;
  height: 10rem;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 29rem) {
    img {
      width: 40%;
      height: auto;
    }
  }
  // @media only screen and (max-width: 24rem) {
  //   img {
  //     width: 40%;
  //     height: auto;
  //   }
  // }
}
.edit {
  &__display {
    height: 3rem;
    width: 5.2rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.219);
    border-radius: 3px;
  }
  &__info-light,
  &__info-dark {
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin-bottom: 4rem;
    display: flex;
  }
  &__info-light {
    box-shadow: 2px 2px 20px hsla(0, 0%, 100%, 0.233);
  }
  &__info-dark {
    box-shadow: 2px 2px 20px hsla(0, 0%, 0%, 0.233);
  }
  &__op-com {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    justify-content: center;
  }
  &__opacity {
    // background-color: hsla(44, 100%, 50%, 0.644);
    padding: 2rem;
    @media only screen and (max-width: 24rem) {
      padding: 4rem;
    }
    &__item {
      background-color: rgba(255, 255, 0, 0.199);
      padding: 1.5rem;
      border-radius: 5px;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.1);
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.267);
      }
    }
  }
  &__compl {
    height: 4rem;
  }
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
.sub {
  @media only screen and (max-width: 34rem) {
    flex-direction: column;
    & > * {
      margin-bottom: 1rem;
    }
  }
}
</style>
