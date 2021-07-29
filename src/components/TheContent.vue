<template>
  <div class="info">
    <base-link
      typ="routerLin"
      content="home page"
      :mode="getDisplayState ? 'standard-black' : 'standard-white'"
      path="/"
    ></base-link>
    <img
      alt="uichroma black logo"
      v-if="getDisplayState"
      src="../../public/logo-black.png"
    />
    <img alt="uichroma white logo" v-else src="../../public/logo-white.png" />
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    getDisplayState() {
      return this.$store.getters.getDisplayState;
    },
  },
};
</script>
<style lang="scss" scoped>
.info {
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 50%;
  min-height: 100vh;
  @media only screen and (max-width: 24rem) {
    width: 80%;
    line-height: 150%;
    img {
      width: 40%;
      height: auto;
    }
  }

  & > * {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
  ul {
    list-style: none;
  }
}
</style>
