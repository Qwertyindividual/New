<template>
  <!-- <div class="overall"> -->
    <div class="container">
      <!-- <h1 class="text-center">
        UNVEILING THE TAPESTRY OF KAUTHAR: A JOUNEY INTO MY WORLD
      </h1> -->
      <div class="columns">
        <div class="col col-1 image">
          <div class="item">
            <div class="polaroid">
              <img src="https://i.postimg.cc/25dCJ5qx/DSC-3607.jpg" alt="" />
              <div class="caption">&#10047; Kauthar Brandt &#10047;</div>
            </div>
          </div>
        </div>
        <div class="col col-2">
            <h5 class="text-start main-heading fw-bold">Biography</h5>
            <p class="text-start paragraph">
          Greetings! I'm Kauthar, a 19-year-old residing in Mitchell's Plain.
          Recently, I accomplished a significant milestone in my life as I
          graduated from Life Choices Academy, earning the title of a certified
          Full-Stack Developer. My passion lies in the realms of creative
          thinking and design, particularly in the fascinating realm of UI/UX
          development.
        </p>
        <p class="text-start paragraph">
          Driven by my goals, I embody determination and organization in all
          aspects of my life. Assisting others, especially in troubleshooting
          code-related challenges, brings me immense joy. I thrive when faced
          with complex errors that require innovative solutions. While I am
          proficient at working independently, I also relish collaborating
          within a team. Occasionally, I take the lead in projects, utilizing my
          skills in planning and delivering compelling presentations.
        </p>
        <p class="text-start paragraph">
          Overall, I am an individual who possesses a fervor for continuous
          growth, fueled by my dedication to helping others and my affinity for
          exploring the limitless possibilities of coding and design.
        </p>
        </div>
      </div>
      <div class="columns text-start">
        <div class="col col-1 Interests">
            <p class="text-start">Interests</p>
            <ul v-for="id in Interests" :key="id">
                <li>{{ id.name }}</li>
                <hr>
            </ul>
        </div>
        <div class="col col-2 goals">
           <div class="columns text-start">
            <div class="short-term">
                <p class="title fw-bold">Short-Term</p>
               <ul v-for="id in Short" :key="id">
                 <li>{{ id.goal }}</li>
               </ul>
            </div>
            <div class="long-term">
                <p class="title fw-bold">Long-Term</p>
                <ul v-for="id in Long" :key="id">
                   <li>{{ id.goal }}</li>
                </ul>
            </div>
           </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
    computed: {
        Interests() {
            return this.$store.state.interests
        },
        Short() {
            return this.$store.state.short
        },
        Long() {
            return this.$store.state.long
        }
    },
};
</script>

<style scoped>
/* html {
    margin: 0;
} */

.overall {
  background-image: url(https://i.postimg.cc/NFz3rLb6/monochrome-gray-floral-vertical-border-with-flowers-chicory-leaves-white-528213-955.jpg);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  height: 100vh;
}
.container {
  width: 95%;
  margin: 2em auto;
  /* border: solid 1px black; */
}

.columns {
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */
    /* margin: 1em 0; */
}

.col {
    padding: 0 1.5em;
}

.col-1 {
    width: 30%;
    background: #D8F3DC;
}

.col-2 {
    width: 70%;
}

h1 {
  font-size: 1.5rem;
}


.main-heading {
    font-family: "Playfair Display";
    font-size: 2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    /* color: #95D5B2; */
    color: #2D6A4F;
}

.title {
    font-family: "Playfair Display";
    font-size: 1.2em;
    /* color: #95D5B2; */
    color: #2D6A4F;
}


.paragraph, ul > li {
    font-family: "Mulish";
    margin: 1em 0;
}



.polaroid {
  background: #fff;
  padding-top: 1rem;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
}

.polaroid > img {
  width: 80%;
  height: 30vh;
}
.caption {
  font-size: 1rem;
  text-align: center;
  line-height: 2.5em;
  font-family: "Lucida Handwriting";
  padding: 10px 0 10px 0;
}

.item {
  /* width: 100%; */
  margin-top: 1rem;
  filter: grayscale(100%);
}

.item .polaroid:before {
  content: "";
  transition: all 0.35s;
}

.item {
  transform: scale(0.8, 0.8) rotate(5deg);
  transition: all 0.35s;
}

.item:hover {
  filter: none;
  transform: scale(1, 1) rotate(0deg);
  transition: all 0.35s;
}
.item:hover .polaroid:before {
  content: "";
  transform: rotate(0deg);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  transition: all 0.35s;
}

@media (max-width: 600px) {
.col-1, .col-2 {
    width: 100%;
    flex-direction: column;
}
}
</style>
