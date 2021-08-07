<template>
  <the-content>
    <li>
      <h2>{{ article.title }}</h2>
    </li>
    <li :key="cnt.title" v-for="cnt in article.content">
      <h3>{{ cnt.title }}</h3>
      <p>{{ cnt.text }}</p>
    </li>
  </the-content>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      article: "",
    };
  },
  props: ["topic"],
  computed: {
    ...mapGetters(["getBlogs"]),
  },
  methods: {
    updateTheTopic() {
      this.article = this.getBlogs.find((b) => b.id === this.topic);
    },
  },
  watch: {
    topic() {
      this.updateTheTopic();
    },
  },
  mounted() {
    this.updateTheTopic();
  },
};
</script>
<style lang="scss" scoped>
li {
  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }
  h2 {
    margin-top: 7rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
}
</style>
