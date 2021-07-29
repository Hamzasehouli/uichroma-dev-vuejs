<template>
  <the-content>
    <li>
      <h2>Support this project</h2>
      <div class="contai">
        <p>
          This online tool is build to be for free and it will always be, but
          your support will keep it alive and will be highly appreciated.
        </p>
        <ul class="sub-list">
          <li>
            <base-link
              typ="lin"
              content="Buy Me a Coffee"
              path="https://www.buymeacoffee.com/hasehou"
              :mode="getDisplayState ? 'standard-black' : 'standard-white'"
            ></base-link>
          </li>
          <!-- <li>
            <base-link
              typ="lin"
              content="venmo"
              path="https://venmo.com"
              :mode="getDisplayState ? 'standard-black' : 'standard-white'"
            ></base-link>
          </li> -->
          <li>
            <base-link
              typ="lin"
              content="paypal"
              path="https://www.paypal.com/paypalme/hasehou"
              :mode="getDisplayState ? 'standard-black' : 'standard-white'"
            ></base-link>
          </li>
        </ul>
      </div>
    </li>
    <!-- <li>
      <h2>Feedback and contributing</h2>
      <p>
        Feedback and contributing If you notice a problem or want a feature
        added please file an issue on GitHub. You can also just
        <base-link
          type="button"
          content="email me"
          @click="$store.dispatch('sendMailTo')"
        ></base-link>
        the details. If you're a developer and want to help with the project,
        please comment on open issues or create a new one. Once we agree on a
        path forward you can just make a pull request and take it to the finish
        line. No big whoop.
      </p>
    </li> -->
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
.contai {
  // min-height: 100vh;
  // width: 100%;
}
.sub-list {
  width: 100%;
  margin: 2rem 0;
  li {
    margin-bottom: 1rem;
  }
}
li {
  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }
}
</style>
