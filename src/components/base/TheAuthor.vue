<template>
  <div class="author">
    <img :src="blog.image" alt="blogger and publisher photo" />
    <div>
      published by
      <a
        target="_blank"
        class="author__link"
        href="https://uichroma.netlify.app/about"
        >{{ blog.author }}</a
      >
      on <time>{{ blog.publishingDate }}</time> | read time
      <time>{{ blog.time }}</time>
    </div>
  </div>
</template>
<script>
export default {
  props: ["blog"],
};
</script>
<style lang="scss" scoped>
.author {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  color: rgba(128, 128, 128, 0.781);
  img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
  }
  @media only screen and (max-width: 29rem) {
    flex-direction: column;
    justify-content: center;
    line-height: 150%;
    font-size: 1rem;
  }
}
</style>
