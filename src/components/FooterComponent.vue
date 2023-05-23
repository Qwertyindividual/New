<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-white text-muted">
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
      © 2023 Copyright | Kauthar Brandt
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding: 10px 0;
  box-shadow: 0px 0 19px rgba(4, 4, 4, 0.9);
}
.single-content {
  text-align: center;
  padding: 115px 0;
}
.single-box p {
  color: #fff;
  line-height: 1.9;
}
.single-box h3 {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
.single-box .card-area i {
  color: #ffffff;
  font-size: 20px;
  margin-right: 10px;
}
.single-box ul {
  list-style: none;
  padding: 0;
}
.single-box ul li a {
  text-decoration: none;
  color: #fff;
  line-height: 2.5;
  font-weight: 100;
}
.single-box h2 {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}
/* #basic-addon2 {
 background: #fe1e4f;
 color: #fff;
} */
.socials i {
  font-size: 18px;
  margin-right: 15px;
}
@media (max-width: 767px) {
  .single-box {
    margin-bottom: 50px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .single-box {
    margin-bottom: 50px;
  }
}
img {
  width: 100px;
  height: 100px;
}
button {
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.9);
}
button:hover {
  background: linear-gradient(to right, #80ed99, #57cc99, #38a3a5);
}

.name {
  font-family: "Playfair Display";
  display: inline-flex;
}
</style>
