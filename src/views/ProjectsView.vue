<template>
  <div>
    <div class="bg"></div>
    <div
      class="section"
      v-for="(section, index) in sections"
      :key="index"
      :class="{ active: index === activeSection }"
      :ref="`section-${index}`"
    >
      <div class="section-img">
        <div
          class="section-img-inner"
          :style="'background-image: url(' + section.image + ');'"
        ></div>
      </div>
      <div class="section-body">
        <div class="section-text text-start">
          <h2>{{ section.title }}</h2>
          <div class="icons">
            <i :class="section.html" style="color: #74c69d"></i>
            <i :class="section.css" style="color: #74c69d"></i>
            <i :class="section.javascript" style="color: #74c69d"></i>
            <i :class="section.bootstrap" style="color: #74c69d"></i>
            <i :class="section.vue" style="color: #74c69d"></i>
            <i :class="section.node" style="color: #74c69d"></i>
            <i :class="section.mysql" style="color: #74c69d"></i>
            <i :class="section.wordpress" style="color: #74c69d"></i>
          </div>

          <!-- <h6>{{ section.tools }}</h6> -->
          <p>{{ section.description }}</p>
          <h6>{{ section.duration }}</h6>
          <a :href="section.links.live" target="_blank" class="a-live">
            <button class="live">Preview</button></a
          >

          <a :href="section.links.github" target="_blank" class="a-github">
            <button class="github">Github</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 0,
    };
  },
  computed: {
    sections() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scroll = window.scrollY + window.innerHeight / 3;
      this.activeSection = this.sections.findIndex((section, index) => {
        const sectionTop = this.$refs[`section-${index}`][0].offsetTop;
        const sectionHeight = this.$refs[`section-${index}`][0].offsetHeight;
        return sectionTop <= scroll && sectionTop + sectionHeight > scroll;
      });
    },
  },
};
</script>
<style>
html {
  height: 1.618;
}

body {
  font-family: sans-serif;
}

.icon {
  display: flex;
}

.bg {
  background: #1b4332;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  z-index: 1;
}
i {
  margin-right: 0.2em;
}
.section {
  display: flex;
  min-height: 93vh;
  position: relative;
  top: 3em;
  z-index: 2;
}

.section > * {
  width: 50%;
}

.section-img {
  position: relative;
  display: flex;
}

.section-img-inner {
  height: 100vh;
  position: fixed;
  left: 5%;
  width: 40%;
  top: 0;
  mix-blend-mode: multiply;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: blur(30px);
  opacity: 0;
  background-position: 50% 40%;
  transition: 0.6s ease, opacity 0.6s ease, background-position 0.8s ease;
}

.section-body {
  display: flex;
  align-items: center;
  height: fit-content;
  inset: 0;
  margin: auto;
}

.section-text {
  padding: 5vw;
}

.section.active .section-img-inner {
  opacity: 1;
  background-position: 50% 50%;
  filter: blur(0);
}

h2 {
  font-size: 3vw;
  margin-bottom: 0.5em;
  margin-top: 0;
  font-family: "Playfair Display";
}

h6 {
  font-family: "Mulish";
  padding-bottom: 1em;
}

p {
  font-family: "Poppins";
  padding-top: 1em;
}

.live {
  padding: 0.5em 2em;
  background: #1b4332;
  margin-right: 1em;
  color: white;
  border: none;
}

.github {
  padding: 0.5em 2em;
  background: transparent;
  text-decoration: none;
}

.a-github {
  color: #1b4332;
  text-decoration: none;
}
</style>
