<template>
  <div class="upper-container">
    <transition
      ><div
        :style="{ backgroundColor: getActiveness.color }"
        v-if="getActiveness.state"
        class="copy__notif"
      >
        {{ getActiveness.color }} copied!!
      </div></transition
    >

    <form @submit.prevent class="filter">
      <input
        ref="filterVal"
        @input="getVal"
        placeholder="filter by name, color or hex code"
        class="filter__input"
        type="text"
      />
    </form>
    <div class="container">
      <div
        :style="{ backgroundColor: color.code }"
        :key="color.name"
        v-for="color in colors"
        class="box"
      >
        <span class="color__name">{{ color.name }}</span>
        <button
          type="button"
          @click="copyColor(color.code)"
          class="color__copy"
        >
          copy
        </button>
        <base-link
          content="see more"
          :path="'/edit-color/' + color.code.slice(1)"
          typ="routerLin"
          class="color__more"
        >
        </base-link>
      </div>
    </div>
    <div @click="scrollUp" class="up">
      <svg><use :href="getSprite"></use></svg>
    </div>
  </div>
</template>
<script>
import sprite from '../../../public/sprite.svg' 
export default {
  data() {
    return { colorsCopy2: [], active: { state: false, color: "" } };
  },
  computed: {
    pat(val) {
      return `/edit-color/${val}`;
    },
    colors() {
      return this.$store.getters.getColors;
    },
    getActiveness() {
      return this.active;
    },
    getSprite(){
      return `${sprite}#icon-arrow-up`
    }
  },

  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
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
        let audio = new Audio("tone.wav");
        audio.play();
        audio.volume = 0.2;
        setTimeout(() => {
          this.active.state = false;
        }, 800);
      } catch (err) {
        console.log(err);
      }
    },
    getVal() {
      if (this.$refs.filterVal.value.toLowerCase().trim().startsWith("#")) {
        return this.$store.dispatch(
          "setColors",
          this.colorsCopy2.filter((c) =>
            c.code.includes(this.$refs.filterVal.value.toLowerCase().trim())
          )
        );
      }
      this.$store.dispatch(
        "setColors",
        this.colorsCopy2.filter(
          (c) =>
            c.name.includes(this.$refs.filterVal.value.toLowerCase().trim()) ||
            c.close.includes(this.$refs.filterVal.value.toLowerCase().trim())
        )
      );
    },
  },
  created() {
    this.colorsCopy2 = JSON.parse(
      JSON.stringify(this.$store.getters.getColors)
    );
  },
};
</script>

<style lang="scss" scoped>
.copy__notif {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999999999;
  font-size: 12rem;
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
.filter {
  &__input {
    width: 100%;
    padding: 2rem;
    border-radius: 100px;
    outline: none;
    border: none;
    border: 3px solid rgba(0, 0, 255, 0.26);
    transition: all 0.3s;
    &:focus {
      border: 3px solid blueviolet;
      transform: scale(1.05);
    }
  }
}
.upper-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  padding: 5rem;
  //   grid-gap: 1rem;
}
.box {
  overflow: hidden;
  position: relative;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: white !important;
  padding: 0.3rem;
  & > * {
    background-color: rgba(255, 255, 255, 0.315) !important;
    padding: 0.5rem;
  }
  cursor: pointer;
}
.color__name {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: black !important;
  transform: translateX(100%);
  //   visibility: hidden;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box:hover .color__name {
  transform: translateX(0);
}
.color {
  &__copy,
  &__more {
    z-index: 999;
    outline: none;
    border: none;
    cursor: pointer;
    &:active {
      transform: scale(1.1);
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.747) !important;
    }
  }
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
.up {
  position: fixed;
  left: 5rem;
  bottom: 3rem;
  background-color: blue;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.342);
  border-radius: 50%;
  color: white;
  z-index: 999;
  height: 6rem;
  width: 6rem;
  padding: 1rem;
  display: inline-block;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > * {
    fill: white;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 42rem) {
    height: 4rem;
    width: 4rem;
    left: 3rem;
    bottom: 1.4rem;
    font-size: 1.3rem;
    padding: 1.3rem;
  }
}
</style>
