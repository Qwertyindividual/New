<template>
  <!-- Nav-1 -->
  <button
    class="btn bg-transparent border-0 shadow-none nav-1 text-start position-absolute top-0 end-0"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <!-- <i class="fa-solid fa-bars fa-xl" style="color: #000000"></i> -->
    <!-- <i class="fa-solid fa-burger fa-xl burger" style="color: #2d6a4f"></i> -->
    <i class="fa-solid fa-bars fa-xl" style="color: #2d6a4f;"></i>
  </button>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="Main" id="offcanvasRightLabel">NAVIGATION</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="container">
        <div class="columns">
          <!-- <div class="col col-1"> -->
            <router-link to="/" class="col col-1 nav-link light">
              <i class="fa-solid fa-house fa-lg" style="color: #000000"></i>
              <span class="nav-item">Home</span>
            </router-link>
          <!-- </div> -->

          <!-- <div class="col col-2"> -->
            <router-link to="/about" class="col col-2 nav-link light">
              <i
                class="fa-solid fa-address-card fa-lg"
                style="color: #000000"
              ></i>
              <span class="nav-item">About</span>
            </router-link>
          <!-- </div> -->
          <!-- <div class="col col-3"> -->
            <router-link to="/resume" class="col col-3 nav-link light">
              <i class="fa-solid fa-file fa-lg" style="color: #000000"></i>
              <span class="nav-item">Resume</span>
            </router-link>
          <!-- </div> -->
        </div>
        <div class="columns">
          <!-- <div class="col col-4"> -->
            <router-link to="/projects" class="col col-4 nav-link dark">
              <i
                class="fa-solid fa-diagram-project fa-lg"
                style="color: #000000"
              ></i>
              <span class="nav-item">Projects</span>
            </router-link>
          <!-- </div> -->
          <!-- <div class="col col-5"> -->
            <router-link to="/testimonials" class="col col-5 nav-link dark">
              <i class="fa-solid fa-comments fa-lg" style="color: #000000"></i>
              <span class="nav-item">Testimonials</span>
            </router-link>
          <!-- </div> -->
          <!-- <div class="col col-6"> -->
            <router-link to="/contact" class="col col-6 nav-link dark">
              <i
                class="fa-solid fa-address-book fa-lg"
                style="color: #000000"
              ></i>
              <span class="nav-item">Contact</span>
            </router-link>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Nav-2 -->
  <nav class="nav-2">
    <router-link to="/" class="nav-link">
      <i class="fa-solid fa-house fa-lg" style="color: #000000"></i>
      <span class="nav-item">Home</span>
    </router-link>

    <router-link to="/about" class="nav-link">
      <i class="fa-solid fa-house fa-lg" style="color: #000000"></i>
      <span class="nav-item">About</span>
    </router-link>

    <router-link to="/resume" class="nav-link">
      <i class="fa-solid fa-house fa-lg" style="color: #000000"></i>
      <span class="nav-item">Resume</span>
    </router-link>

    <router-link to="/projects" class="nav-link">
      <i class="fa-solid fa-house fa-lg" style="color: #000000"></i>
      <span class="nav-item">Projects</span>
    </router-link>

    <router-link to="/testimonials" class="nav-link">
      <i class="fa-solid fa-house fa-lg" style="color: #000000"></i>
      <span class="nav-item">Testimonials</span>
    </router-link>

    <router-link to="/contact" class="nav-link">
      <i class="fa-solid fa-house fa-lg" style="color: #000000"></i>
      <span class="nav-item">Contact</span>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.offcanvas-end {
  width: 60%;
}

.col-1 {
  background: #40916C;
}
.col-2 {
  background: #52B788;
}
.col-3 {
  background: #74C69D;
}
.col-4 {
  background: #95D5B2 ;
}
.col-5 {
  background: #B7E4C7 ;
}
.col-6 {
  background: #D8F3DC;
}

.Main {
  font-family: "Playfair Display";
  letter-spacing: 3px;
}
.container {
  margin: 0 auto;
}
.columns {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.light {
  color: white;
}

.dark {
  color: black;
}

.col {
  width: 33.33%;
  padding: 14%;
  /* border: solid 1px black; */
  gap: 0;
}


i {
  padding: 1em 0.5em;
}
.nav-2 {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* background-color: pink; */
  border-top: solid 1px black;
  overflow-x: auto;
  display: flex;
  background: white;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Playfair Display";
  transition: background-color 0.1s ease-in-out;
}

i {
  padding-bottom: 0.5rem;
}
@media (max-width: 600px) {
  .nav-1 {
    visibility: hidden;
  }
}
@media (min-width: 600px) {
  .nav-2 {
    visibility: hidden;
  }
}
</style>
