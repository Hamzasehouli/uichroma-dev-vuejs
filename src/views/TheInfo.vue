<template>
  <the-content>
    <li>
      <h2>What is Uiflare?</h2>
      <p>
        Uiflare is built for designers and everbody who obsessed with colors, so
        focus on your creativity and your core business and let us make the
        color palette for you. Just pick color you like and we will do the rest.
        So with uiflare, you can pick a color from our variety, or pick two
        colors, merge them together and get a fancy gradient that works for you.
      </p>
    </li>
    <li>
      <h2>Who created Uiflare?</h2>
      <p>
        Uiflare was created by Hamza Sehouli. sorry who? Hamza Sehouli is a
        fullstack web developer, enjoys creating things from scratch. He droped
        out of college to persue his passion for programming and coding in
        general. My skills are: html, css, lovely javascript ES6, node.js and
        vue3.js. If you have any question, comment or you need help, feel free
        to ask me, you can reach me by sending me an email:
        sehoulihamza@yahoo.com or browse my website where you can use the
        contact form:
        <base-link
          :mode="getDisplayState ? 'standard-black' : 'standard-white'"
          typ="lin"
          content="hamzasehouli.ma"
          path="http://hamzasehouli.ma"
        ></base-link>
      </p>
    </li>
  </the-content>
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
li {
  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }
}
</style>
