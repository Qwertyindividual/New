<template>
    <div class="master">
        <div class="position-absolute bottom-0 start-0 main">
    <h1 class="text-start"> <span class="text">Web</span> Developer <span class="symbol">&amp;</span></h1>
    <h1 class="text-start">An Aspiring <span class="text">UX/UI</span> Designer</h1>
    <p class="text-start">
      Allow me to introduce myself: My name is Kauthar Brandt, I a Full-Stack
      Developer intern at Life Choices Academy  - 
    </p>
    <hr />
    <div class="columns text-start">
      <div class="col">
        <i class="fa-brands fa-html5 fa-xl" style="color: #000000"></i>
      </div>
      <div class="col">
        <i class="fa-brands fa-css3-alt fa-xl" style="color: #000000"></i>
      </div>
      <div class="col">
        <i class="fa-brands fa-js fa-xl" style="color: #000000"></i>
      </div>
      <div class="col">
        <i class="fa-brands fa-bootstrap fa-xl" style="color: #000000"></i>
      </div>
      <div class="col">
        <i class="fa-brands fa-vuejs fa-xl" style="color: #000000"></i>
      </div>
      <div class="col">
        <i class="fa-solid fa-database fa-xl" style="color: #000000"></i>
      </div>
      <div class="col">
        <i class="fa-brands fa-node-js fa-xl" style="color: #000000"></i>
      </div>
      <div class="col">
        <i class="fa-brands fa-wordpress fa-xl" style="color: #000000"></i>
      </div>
    </div>
    <hr />
    <div class="columns">
      <button class="learn">
        <router-link to="/about" class="nav-link learn">Learn More</router-link>
      </button>
      <button class="bg-transparent contact">
        <router-link to="/contact" class="nav-link contact">Contact Me</router-link>
      </button>
    </div>
  </div>
    </div>
 
</template>

<script>
export default {};
</script>

<style scoped>

.master {
    background-image: url(https://i.postimg.cc/9QHXbB3R/background.jpg);
    height: 100vh;
    background-repeat: no-repeat;
    background-position: right;
    background-blend-mode:soft-light;
}
.main {
  padding: 3em;
}
h1 {
  font-size: 4.8rem;
  font-family: "Playfair Display";
  font-weight: 300;
  letter-spacing: 3px;
}

.symbol {
  border: solid 2px #40916C;
  border-radius: 50%;
  padding: 0.25em 0.4em;
}

p {
  width: 80%;
}

.columns {
  display: flex;
}

button {
    margin-right: 1em;
}

.text {
  color: #2D6A4F;
}

.learn {
  background: #2D6A4F;
  color: white;
  border: none;

}

.contact {
  color:#2D6A4F ;
}
</style>
