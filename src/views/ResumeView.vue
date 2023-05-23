<template>
<header class="page-header">
  <div class="container flow">
    <p class="page-subtitle text-start">Get to know me!</p>
    <h1 class="page-title text-start">Resume</h1>
    </div>
</header>
<h2 class="section-title text-start">Education && Work Experience</h2>

<div class="contain">
<div class="information">
<h2 class="text-start">Experience</h2>
<p class="description text-start">This is my experince over the years.nsvjkzbvksnbvksdbvnbfk vbvncx vn xv nvfjvbsf vsvjsbvkjsjmnvbsjmnvndsvkjbsdmvbksnvksmnjs sdvnmvksn vns dnv snmv ns ndm ksvn vn vnm ndmv sn dskv nsnf nvsj kk sn</p>
<p class="duration text-start">Time Period: January 2020 - May 2023</p>
</div>



<div class="media-scroller snaps-inline">
  <div class="media-element">
    <img src="https://i.postimg.cc/0QM3cdLj/ezgif-com-webp-to-jpg-1.jpg" alt="">
    <h6 class="text-start">REV</h6>
    <p class="title text-start">Rev is an online transcription company. I was a captioner from September 2019 - August 2021</p>
  </div>
  <div class="media-element">
    <img src="https://i.postimg.cc/HscNm2xt/ezgif-com-webp-to-jpg-2.jpg" alt="">
    <h6 class="text-start heading">Mondale High School</h6>
    <p class="title text-start">Subjects were Math, English, Afrikaans, Physics, Life Science, Life Orientation, Geography. Matricukated with a Bachelors Certiificate</p>
  </div>
  <div class="media-element">
    <img src="https://i.postimg.cc/4x5VSYtT/academy.jpg" alt="">
    <h6 class="text-start">Life Choices Academy</h6>
    <p class="title text-start">Participated in a 6 month Programme where I studied html, css, bootstrap, javasript, vue.js, node.js, mysql</p>
  </div>
  <div class="media-element">
    <img src="https://i.postimg.cc/zGbYdg4y/studio.jpg" alt="">
    <h6 class="text-start">Life Choices Studio</h6>
    <p class="title text-start">Currently learning UX/UI Design, Wordpress, Php and SEO</p>
  </div>
</div>
</div>

<h2 class="tech text-start">
  Tech Stack
</h2>
<div class="skills">
  <h2 class="tech text-start">Skills</h2>
<div class="contain">
<div class="technical col-1">
<ul class="text-start">
  <li>Html</li>
  <li>Css</li>
  <li>Bootstrap</li>
  <li>Javascript</li>
  <li>Vue.js</li>
  <li>Node.js</li>
  <li>MySql</li>
  <li>Figma</li>
  <li>UX/UI Design</li>
</ul>
</div>
<div class="soft col-1 text-start">
  <ul>
  <li>Team-Player Attitude</li>
  <li>Adaptability</li>
  <li>Problem-Solving</li>
  <li>Time-Management</li>
  <li>Active-Listener</li>
</ul>
</div>
</div>
</div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import "https://unpkg.com/open-props";
/* @import "https://unpkg.com/open-props/normalize.min.css"; */

.media-scroller {
  --_spacer: var(--size-3);
  display: grid;
  gap: var(--_spacer);
  grid-auto-flow: column;
  grid-auto-columns: 30%;

  padding: 0 var(--_spacer) var(--_spacer);

  overflow-x: auto;
  overscroll-behavior-inline: contain;
}

/* .skills {
  background: linear-gradient(90deg, #081C15,#1B4332, #2D6A4F, #40916C, #52B788);

} */

.contain {
    display: flex;
}

.information {
    width: 50%;
    padding:1em 3em;
    margin: 4.5em 1em;
    background: #2D6A4F;
    color: white;
}

.media-element {
  display: grid;
  grid-template-rows: min-content;
  gap: var(--_spacer);
  padding: var(--_spacer);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
}


.media-element > img {
  inline-size: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
}

h2, .heading {
  font-family: "Playfair Display";
}

.description, ul{
  font-family: "Poppins";
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: 200;
}

.col-1 {
  width: 50%;
}

.duration, .title {
  font-family: "Mulish";
}
.snaps-inline > * {
  scroll-snap-align: start;
}

/* general styling */

.container {
  inline-size: min(100% - 4rem, 70rem);
  margin-inline: auto;
}

.flow {
  display: grid;
  gap: var(--size-3);
}

.page-header {
  padding-block: var(--size-9);
  margin-block-end: var(--size-9);
  background: linear-gradient(90deg, #081C15,#1B4332, #2D6A4F, #40916C, #52B788);
  color: var(--gray-0);
  box-shadow: var(--shadow-2);
  font-family: "Playfair Display";
}


.skills {
  margin-top: 5em;
}
.page-subtitle, .page-title {
  letter-spacing: 4px;
}

.section-title {
  padding-inline-start: var(--size-9);
  font-family: "Playfair Display";
  /* margin-block: var(--size-9) var(--size-3); */
}


.tech {
  padding-inline-start: var(--size-9);
}
ul {
  padding-inline-start: var(--size-10);
  line-height: 2em;
}
</style>