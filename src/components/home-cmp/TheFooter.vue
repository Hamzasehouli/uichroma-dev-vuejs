<template>
  <footer>
    <div class="links">
      <div class="links__box">
        <h3>Share</h3>
        <ul>
          <li>
            <a
              href="mailto:''?subject=Check out 🎨 Uichroma 🎨&body=Hello, %0D%0A Here I am presenting to you a useful colors tool, it will definitly help you picking colors for your next project. %0D%0A Check it out here:https://uichroma.netlify.app
"
              >Share via email</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fuichroma.netlify.app%2F&amp;src=sdkpreparse"
              >Share on facebook</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              class="twitter-share-button"
              data-show-count="false"
              >Share on twitter</a
            >
          </li>
        </ul>
      </div>
      <div class="links__box">
        <h3>Trending colors</h3>

        <a
          target="_blank"
          style="color: #edeae0 !important"
          href="https://uichroma.netlify.app/edit-color/EDEAE0"
          >Alabaster</a
        >
        <a
          target="_blank"
          style="color: #15f4ee !important"
          href="https://uichroma.netlify.app/edit-color/15F4EE"
        >
          Fluorescent blue</a
        >
        <a
          target="_blank"
          style="color: #de3163 !important"
          href="https://uichroma.netlify.app/edit-color/DE3163"
          >Cerise</a
        >
        <a
          target="_blank"
          style="color: #8f00ff !important"
          href="https://uichroma.netlify.app/edit-color/8F00FF"
          >Electric purple
        </a>
        <a
          target="_blank"
          style="color: #b284be !important"
          href="https://uichroma.netlify.app/edit-color/B284BE"
          >African violet
        </a>
        <a
          target="_blank"
          style="color: #bfff00 !important"
          href="https://uichroma.netlify.app/edit-color/BFFF00"
          >Bitter lime
        </a>
        <a
          target="_blank"
          style="color: #ff3800 !important"
          href="https://uichroma.netlify.app/edit-color/FF3800"
          >Coquelicot</a
        >
        <a
          target="_blank"
          style="color: #fbec5d !important"
          href="https://uichroma.netlify.app/edit-color/FBEC5D"
          >Corn</a
        >
        <a
          target="_blank"
          style="color: #2c3539 !important"
          href="https://uichroma.netlify.app/edit-color/2c3539"
        >
          Gunmetal grey</a
        >
        <a
          target="_blank"
          style="color: #da1884 !important"
          href="https://uichroma.netlify.app/edit-color/DA1884"
          >Barbie pink
        </a>
        <a
          target="_blank"
          style="color: #f0ead6 !important"
          href="https://uichroma.netlify.app/edit-color/F0EAD6"
          >Eggshell</a
        >
      </div>
      <div class="links__box">
        <h3>More to navigate</h3>
        <router-link to="/about">About me</router-link>
        <router-link to="/support">Support the project </router-link>
        <router-link to="/blog">Blog </router-link>
      </div>
    </div>
    <p>
      designed and developed by
      <base-link
        :mode="getDisplayState ? 'standard-black' : 'standard-white'"
        content="Hamza Sehouli"
        typ="lin"
        path="http://hamzasehouli.ma"
      ></base-link>
    </p>
  </footer>
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
footer {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  margin-top: 7rem;

  p {
    padding: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > * {
      margin-left: 1rem;
    }
  }
}
.links {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-row-gap: 3.5rem;
  padding: 3rem;

  &__box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > *,
    li {
      margin-bottom: 1rem;
    }
  }
  a {
    text-decoration: none;
    display: inline-block;
  }
  ul {
    list-style: none;
  }
  h3 {
    margin-bottom: 1rem;
  }
}
</style>
