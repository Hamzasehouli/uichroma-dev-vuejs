<template>
  <div class="header">
    <a class="header__link" href="/">
      <img
        alt="uichroma black logo"
        v-if="state"
        class="header__logo"
        src="../../public/logo-black.png"
      />
      <img
        alt="uichroma white logo"
        v-else
        class="header__logo"
        src="../../public/logo-white.png"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ["state"],
};
</script>

<style lang="scss" scoped>
a {
  height: 10rem;
  display: inline-block;
}
.header {
  width: 100%;
  padding: 1rem;
  &__logo {
    width: 10rem;
    height: 100%;
    object-fit: cover;
  }
}
</style>
