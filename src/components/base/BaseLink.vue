<template>
  <router-link v-if="typ === 'routerLin'" :class="mode" :to="path"
    ><slot>{{ content }}</slot></router-link
  >
  <a target="_blank" :href="path" :class="mode" v-else-if="typ === 'lin'"
    ><slot>{{ content }}</slot></a
  >
  <button :type="type" v-else class="btn-style">
    <slot>{{ content }}</slot>
  </button>
</template>
<script>
export default {
  props: ["content", "path", "mode", "state", "typ", "type"],
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}

.standard-white {
  color: rgb(248, 230, 170);
  border-bottom: 2px solid rgb(248, 230, 170);
}
.standard-black {
  color: rgb(252, 14, 14);
  border-bottom: 2px solid rgb(252, 14, 14);
}
.btn-style {
  outline: none;
  border: none;
  cursor: pointer;
  color: rgba(0, 26, 255, 0.719);
  background-color: transparent;
  border-bottom: 2px solid rgba(0, 26, 255, 0.719);
  padding: 0.5rem;
  border-radius: 4px;
}
.standard-black,
.standard-white,
.btn-style {
  font-weight: 700;
}
</style>
