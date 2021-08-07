<template>
  <section>
    <h1 class="kaka">Blog and web references</h1>
    <ul class="article__list">
      <the-article
        :blog="blog"
        :key="blog.id"
        v-for="blog in getBlogs"
      ></the-article>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TheArticle from "../components/TheArticle.vue";
export default {
  components: { TheArticle },
  data() {
    return {
      rangeWidth: 0,
    };
  },
  computed: {
    getRangeWidth() {
      return this.rangeWidth;
    },
    ...mapGetters(["getBlogs"]),
  },
};
</script>

<style lang="scss" scoped>
.article {
  &__item {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.24);
    border-radius: 6px;
    padding: 2rem;
    @media only screen and (max-width: 30rem) {
      padding: 0.7rem;
    }
  }
  &__list {
    list-style: none;
    width: 80%;
    margin-top: 5rem;
    @media only screen and (max-width: 55rem) {
      width: 80%;
    }
    @media only screen and (max-width: 42rem) {
      width: 90%;
    }
    @media only screen and (max-width: 30rem) {
      width: 100%;
    }
  }
}
section {
  padding: 5rem;
  position: relative;
  @media only screen and (max-width: 25rem) {
    padding: 2rem;
  }
}
</style>
