<template>
  <li class="article__item">
    <router-link class="article__link" :to="blog.path">
      <the-author :blog="blog"> </the-author>
      <h2>{{ blog.title.toUpperCase() }}</h2>
      <p>
        {{ blog.summary }}
      </p>
      <a :href="blog.path" class="author__more">Read more</a>
    </router-link>
  </li>
</template>
<script>
export default {
  props: ["blog"],
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.author__more {
  margin: 2rem 0;
}
.author__link,
.author__more {
  display: inline-block;
  color: orangered;
  transition: all 0.3s;
  &:hover {
    color: purple;
  }
}
.article {
  &__item {
    margin-bottom: 2rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(0.98);
    }
  }
}
</style>
