<template>

<header class="page-header">
  <div class="container flow">
    <p class="page-subtitle text-start">Hear what they have to say!</p>
    <h1 class="page-title text-start">Testimonials</h1>
    </div>
</header>
    <div class="contain">
        <div class="container">


<div class="container">
  <div class="row">
    <div class="col-6" v-for="testimonial in Testimonials" :key="testimonial">
      
  <div class="card">
    <img :src="testimonial.image" alt="" class="profile-img">
    
    <h2 class="profile-name text-start">{{ testimonial.name }}</h2>
    <p class="profile-position text-start">{{ testimonial.relation }}</p>
    <p class="profile-info text-start">{{ testimonial.testimonial }}</p>
    <ul class="social-list">
      <li><a :href="testimonial.links.linkden" target="_blank" class="social-link"><i class="fa-brands fa-linkedin fa-sm"></i></a></li>
      <li><a :href="testimonial.links.github" target="_blank" class="social-link"><i class="fa-brands fa-github"></i></a></li>
      <!-- <li><a href="#" class="social-link"><i class="fab fa-twitter-square"></i></a></li> -->
    </ul>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
    export default {
    computed: {
        Testimonials() {
            return this.$store.state.testimonials;
        }
    },
    components: { FooterComponent }
}
</script>

<style scoped>
@import "https://unpkg.com/open-props";
.page-header {
  padding-block: var(--size-9);
  /* margin-block-end: var(--size-9); */
  background: linear-gradient(90deg, #081C15,#1B4332, #2D6A4F, #40916C, #52B788);
  color: var(--gray-0);
  box-shadow: var(--shadow-2);
  font-family: "Playfair Display";
}

h1 {
    font-family: "Playfair Display";
}
img {
width: 100%;
aspect-ratio: 1/1;
}

/* 
.contain {
    background: #D8F3DC;
} */
.container {
    inset: 0;
    margin: 4em auto;
    width: 95%;
}
.card {
  display: grid;
  grid-column-gap: 2em;
  grid-template-areas: 
    "name"
    "image"
    "social"
    "position"
    "description";
    height: 92%;
   border: solid 1px #081C15;
}

@media (min-width: 600px) {
  .card {
    text-align: left;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "image name"
      "image position"
      "social description";
  } 
}

.profile-name     { grid-area: name; }
.profile-position { grid-area: position; }
.profile-info     { grid-area: description; }
.profile-img      { grid-area: image; }
.social-list      { grid-area: social; }

/* general stylings */

.card {
  max-width: 600px;
  background: transparent;
  padding: 2em;
  color: black;
  margin: 1em 0;
}


.page-title {
  letter-spacing: 4px;
}
.profile-info {
  font-weight: 300;
  opacity: .7;
  font-family: "Mulish";
}

.profile-name {
  grid-area: name;
  letter-spacing: 1px;
  font-size: 2rem;
  margin: .75em 0 0;
  line-height: 1;
  font-family: "Playfair Display";
  color: #40916C;
}

.profile-name::after {
  content: '';
  display: block;
  width: 2em;
  height: 1px;
  background: #5bcbf0;
  margin: .5em auto .65em;
  opacity: .25;
}

.profile-position {
  text-transform: uppercase;
  font-size: .875rem;
  letter-spacing: 3px;
  margin: 0 0 .5vem;
  line-height: 1;
  font-family: "Poppins";
}

.profile-img {
  justify-self: center;
  max-width: 100%;
  border-radius: 50%;
  border: 2px solid #1B4332;
  border-image: url(https://i.postimg.cc/yx22w2TZ/ezgif-com-webp-to-jpg-removebg-preview.png);
  border-image-repeat: none;

}

.social-list {
  justify-self: center;
  list-style: none;
  justify-content: space-between;
  display: flex;
  width: 75px;
  margin: .5em 0 0;
  padding: 0;
}

.social-link {
  color: #2D6A4F;
  opacity: .5;
}

.social-link:hover,
.social-link:focus {
  opacity: 1;
}

</style>