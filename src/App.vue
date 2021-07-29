<template>
  <div
    :class="{ container: true, light: getDisplayState, dark: !getDisplayState }"
  >
    <div class="header"><the-header :state="getDisplayState"></the-header></div>
    <nav class="nav">
      <div class="menu">
        <input id="menu-anch" class="menu__input" type="checkbox" />
        <label @click="expandNavMenu" for="menu-anch" class="menu__label"
          ><span></span
        ></label>
      </div>
      <transition name="haha">
        <div v-if="$store.getters.getExpandNav" class="nav-menu">
          <div
            @mouseleave="papa('about')"
            @mouseenter="kaka('about')"
            class="nav__item"
          >
            <router-link to="/about"
              ><svg
                :class="{
                  'dark-svg': getDisplayState,
                  'light-svg': !getDisplayState,
                }"
              >
                <use :href="getSprite + '#icon-info'"></use></svg
            ></router-link>
            <span
              :style="{ color: getDisplayState ? 'black' : 'white' }"
              class="desc"
              v-show="about"
              >About</span
            >
          </div>
          <div
            @mouseleave="papa('switchLight')"
            @mouseenter="kaka('switchLight')"
            class="nav__item"
          >
            <button class="nav__btn" @click="switchLightMode" type="button">
              <svg
                :class="{
                  'dark-svg': getDisplayState,
                  'light-svg': !getDisplayState,
                }"
              >
                <transition name="haha">
                  <use
                    v-if="!getDisplayState"
                    :href="getSprite + '#icon-sun'"
                  ></use>
                </transition>
                <transition name="haha">
                  <use
                    v-if="getDisplayState"
                    :href="getSprite + '#icon-moon'"
                  ></use>
                </transition>
              </svg></button
            ><span
              :style="{ color: getDisplayState ? 'black' : 'white' }"
              class="desc"
              v-if="switchLight"
              >{{ !getDisplayState ? "light mode" : "dark mode" }}
            </span>
          </div>
          <div
            @mouseleave="papa('support')"
            @mouseenter="kaka('support')"
            class="nav__item"
          >
            <router-link to="/support">
              <svg
                :class="{
                  'dark-svg': getDisplayState,
                  'light-svg': !getDisplayState,
                }"
              >
                <use
                  :href="getSprite + '#icon-coffee'"
                ></use></svg></router-link
            ><span
              :style="{ color: getDisplayState ? 'black' : 'white' }"
              class="desc"
              v-show="support"
              >Support the project</span
            >
          </div>
          <div
            @mouseleave="papa('mailTo')"
            @mouseenter="kaka('mailTo')"
            class="nav__item"
          >
            <button
              class="nav__btn"
              @click="$store.dispatch('sendMailTo')"
              type="button"
            >
              <svg :style="{ fill: getDisplayState ? 'black' : 'white' }">
                <use :href="getSprite + '#icon-envelop'"></use>
              </svg></button
            ><span
              :style="{ color: getDisplayState ? 'black' : 'white' }"
              class="desc"
              v-show="mailTo"
              >Contact</span
            >
          </div>
        </div>
      </transition>
    </nav>
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive exclude="Edit">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <footer>
      <p>
        designed and created by
        <base-link
          :mode="getDisplayState ? 'standard-black' : 'standard-white'"
          content="Hamza Sehouli"
          typ="lin"
          path="http://hamzasehouli.ma"
        ></base-link>
      </p>
    </footer>
  </div>
</template>

<script>
import sprite from "../public/sprite.svg";
import BaseLink from "./components/base/BaseLink.vue";
import TheHeader from "./components/TheHeader.vue";
import EditColor from "./views/EditColor.vue";
export default {
  components: {
    TheHeader,
    BaseLink,
    EditColor,
  },
  data() {
    return {
      about: false,
      switchLight: false,
      mailTo: false,
      support: false,
    };
  },
  methods: {
    expandNavMenu() {
      
      this.$store.dispatch("expandNav");
    },
    switchLightMode() {
      this.$store.dispatch("checkDisplayMode");
    },
    kaka(val) {
      
      this[val] = true;
    },
    papa(val) {
      
      this[val] = false;
    },
 
  },
  computed: {
    getDisplayState() {
     
      return this.$store.getters.getDisplayState;
    },
    getSprite() {
      return sprite;
    },
  },

};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,300&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  text-rendering: optimizeLegibility;
}

.container {
  display: grid;
  grid-template-columns: 95% 5%;
  grid-template-rows: max-content max-content min-content;
}
.nav {
  z-index: 99999;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  &__btn {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: block;
  }
  &__item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}

.desc {
  color: black;
  background-color: transparent !important;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-120%);
  // border-bottom: 1px solid black;
  padding: 0.5rem;
  width: max-content;
  overflow: hidden;
  backface-visibility: hidden;
}

svg {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
}

.header {
  // background-color: red;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.menu {
  margin-bottom: auto;
  &__input:checked + &__label span {
    background-color: transparent;
  }
  &__input:checked + &__label span::after {
    transform: rotate(-130deg);
    top: 0;
  }
  &__input:checked + &__label span::before {
    transform: rotate(130deg);
    top: 0;
  }
  &__label:hover span::after {
    top: 0.9rem;
  }
  &__label:hover span::before {
    top: -0.9rem;
  }
  &__input {
    display: hidden;
    visibility: hidden;
  }
  &__label {
    height: min-content;

    cursor: pointer;
    display: block;

    span {
      width: 3rem;
      height: 0.3rem;
      background-color: white;
      border-radius: 1px;
      position: relative;
      display: inline-block;
      &::before,
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: white;
        position: absolute;
        left: 0;
        border-radius: inherit;
        transition: all 0.3s;
      }
      &::before {
        top: -0.6rem;
      }

      &::after {
        top: 0.6rem;
      }
    }
  }
}
.haha-enter-from,
.haha-leave-to {
  transform: translateX(150%);
}
.haha-enter-to,
.haha-leave-from {
  transform: translateX(0);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-20rem);
}

.haha-enter-active,
.haha-leave-active,
.fade-enter-active {
  transition: all 0.3s;
}

.haha-leave-from,
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.dark,
.light {
  transition: all 0.3s;
}
.dark {
  background-color: rgb(36, 35, 35);
  color: rgb(236, 233, 233);

  span {
    background-color: rgb(236, 233, 233);
    &::before,
    &:after {
      background-color: rgb(236, 233, 233);
    }
  }
  a {
    color: rgb(236, 233, 233);
  }
}
.light {
  background-color: rgba(255, 255, 255, 0.63);
  color: rgb(36, 35, 35);

  span {
    background-color: rgb(36, 35, 35);
    &::before,
    &:after {
      background-color: rgb(36, 35, 35);
    }
  }
  a {
    color: rgb(36, 35, 35);
  }
}
.main {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
footer {
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 3 / 4;
  grid-column: 1 / 2;
}
h2 {
  margin-bottom: 1.5rem;
}
.dark-svg {
  display: inline-block;
  position: relative;
  fill: black;
  z-index: 9999999;
}
.light-svg {
  display: inline-block;
  position: relative;
  fill: white;
  z-index: 9999999;
}
</style>
