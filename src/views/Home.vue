<template>
  <section class="main-section">
    <header>
      <base-link
        :class="{ active: btn.sort === 'the-colors' }"
        @click="colorsGradientBtn($event, btn.sort)"
        :mode="getDisplayState ? 'standard-black' : 'standard-white'"
        :content="btn.content"
        :key="btn"
        v-for="btn in btns"
      ></base-link>
    </header>
    <div class="main-content">
      <transition name="fade">
        <keep-alive>
          <component :is="cmp" />
        </keep-alive>
      </transition>
    </div>
  </section>
</template>
<script>
import TheColors from "../components/home-cmp/TheColors.vue";
import TheGradient from "../components/home-cmp/TheGradient.vue";
export default {
  components: {
    TheColors,
    TheGradient,
  },
  data() {
    return {
      btns: [
        { content: "Colors", sort: "the-colors" },
        { content: "Gradient", sort: "the-gradient" },
      ],
      cmp: "the-colors",
    };
  },
  methods: {
    colorsGradientBtn(e, val) {
      

      Array.from(document.querySelectorAll(".btn-style")).forEach((e) =>
        e.classList.remove("active")
      );

      e.target.classList.toggle("active");

      this.cmp = val;
    },
  },
  computed: {
    getDisplayState() {
      return this.$store.getters.getDisplayState;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  flex-direction: column;
  justify-content: center;
}
.main-section,
header {
  display: flex;
  align-items: center;
}
header {
  margin-bottom: 5rem;
  & > * {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
}
.main-content {
  width: 80%;
}

.active {
  opacity: 0.8;
  color: white !important;
  background-color: blue !important;
  border-bottom: 2px solid yellow;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-20rem);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
