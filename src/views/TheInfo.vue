<template>
  <the-content>
    <li>
      <h2>What is Uichroma?</h2>
      <p>
        Uichroma is built for web / mobile developers, designers and everbody
        who is obsessed with colors. Many color tools out there, lack
        performance, they are slow, pages reload all the timea dn are
        monofunctional. This is why uichroma comes into play, it is fast, no
        page reload and multifunctional. With uichroma you can pick colors that
        fit you better for your next project, get tints shades and also
        complementary colors set, in addition a nice gradient generator waits
        for you, yo can create fancy gradients linear or radial ones, all in one
        resource.
      </p>
    </li>
    <li>
      <h2>Who created Uichroma?</h2>
      <p>
        Uichroma developed by Hamza Sehouli, a fullstack web developer, enjoys
        creating things from scratch and has passion for web design. I speak
        these languages: html, css, lovely javascript ES6, node.js and vue.js.
        If you have any question, comment or you need help, feel free to ask me,
        you can reach me out by sending me an email: sehoulihamza@yahoo.com or
        browse my website where you can use the contact form:
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
