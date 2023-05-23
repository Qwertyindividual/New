<template>
  <div class="container">
    <h1>"Connecting <span>possibilities </span>, one message at a time."</h1>
    <!-- <img src="https://i.postimg.cc/3RyDsYrS/My-project.jpg" alt="Cute baby elephant and its mother"> -->

    <div class="columns">
      <div class="col col-4 text-start info">
        <h6 class="sub-heading">Contact Me</h6>
        <h2 class="main-heading">Get in touch with me!</h2>
        <div class="columns">
          <a
            href="https://github.com/Qwertyindividual"
            target="_blank"
            class="col-1"
            ><i
              class="fa-brands fa-github fa-xl social"
              style="color: #635f5f"
            ></i
          ></a>
          <a
            href="https://www.linkedin.com/in/kauthar-brandt-6a3838219/"
            class="col-3 fw-bold"
            ><i
              class="fa-brands fa-linkedin fa-xl social"
              style="color: #635f5f"
            ></i
          ></a>
        </div>
      </div>
      <div class="col col-5 col-bg">
        <div class="contact">
          <div class="inputbox text-start name">
            <input type="text" for="name" required />
            <span>Name</span>
            <i></i>
          </div>
          <div class="inputbox surname">
            <input type="text" for="surname" required />
            <span>Surname</span>
            <i></i>
          </div>
        </div>

        <div class="contact">
          <div class="inputbox">
          <input type="text" for="email" required />
          <span>Email Address</span>
          <i></i>
        </div>
        <div class="inputbox">
          <input type="number" for="number" required />
          <span>Phone Number</span>
          <i></i>
        </div>
        </div>

        <div class="inputbox email">
          <input type="text" for="subject" required />
          <span>Subject</span>
          <i></i>
        </div>
        <div class="inputbox email">
          <input type="text" for="message" required />
          <span>Message</span>
          <i></i>
        </div>
      </div>
    </div>
    <div class="columns meta">
      <div class="col col-6">
        <div class="columns text-center">
          <i class="fa-solid fa-phone fa-lg icon" style="color: #ffffff"></i>
          <div class="info">073-6164-107</div>
        </div>
      </div>
      <div class="col col-6">
        <div class="columns text-center">
          <i class="fa-solid fa-envelope fa-lg icon" style="color: #ffffff"></i>
          <div class="info">brandtkauthar@gmail.com</div>
          <i class="fa-solid fa-clipboard fa-lg icon" style="color: #ffffff;"></i>
        </div>
      </div>
      <div class="col col-6">
        <div class="columns text-center">
          <i
            class="fa-solid fa-location-pin fa-lg icon"
            style="color: #ffffff"
          ></i>
          <div class="info">Mitchells Plain</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*Typography*/

h1 {
  font-size: 2rem;
  color: black;
  text-align: center;
  font-family: "Playfair Display";
  margin-top: 1em;
}

.sub-heading {
  font-family: "Mulish";
}

.main-heading {
  font-family: "Playfair Display";
  font-size: 2.5rem;
  color: #52b788;
}

h2 {
  font-size: 1.5rem;
}

h1 span {
  color: #40916c;
}


img {
  max-width: 100%;
}
.container {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

.meta {
  padding-top: 8em;
}

.icon {
  background: #2d6a4f;
  padding: 1rem;
  border: none;
}

.contact {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.name, .surname{
  margin-top: 2em;
}

.columns {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2em 0;
}

.info {
  margin-top: 12%;
}

@media (max-width: 600px) {
  .columns {
    flex-direction: column;
  }
}

.col-1 {
  width: 20%;
}

.col-2 {
  width: 45%;
}

.col-3 {
  width: 70%;
}

.col-4 {
  width: 35%;
}

.col-5 {
  width: 55%;
}

.col-6 {
  width: 28.33%;
}

@media (max-width: 600px) {
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6 {
    width: 100%;
  }
}

.col-bg {
  background: #1b4332;
  padding: 1em;
  color: white;
}

.inputbox {
  position: relative;
  width: 45%;
  margin-bottom: 2.5em;
}

.email {
  width: 100%;
}

.inputbox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

.inputbox span {
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: white;
  letter-spacing: 00.05em;
  transition: 0.5s;
  pointer-events: none;
  font-family: "Playfair Display";
}

.inputbox input:valid ~ span,
.inputbox input:focus ~ span {
  color: #52b788;
  transform: translateX(-10px) translateY(-34px);
  font-size: 0, 75em;
}
/* line */
.inputbox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #52b788;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.inputbox input:valid ~ i,
.inputbox input:focus ~ i {
  height: 44px;
}
</style>
