<template>
<div class="container">
<h1>Testimonials-Hear what they have to say</h1>
</div>
</template>

<script>
    export default {
        computed: {
        Testimonials() {
            return this.$store.state.testimonials
        }
    }
    }
</script>

<style scoped>
.container {
    margin: 0 auto;
}

h1 {
    font-family: "Playfair Display";
    font-size: 80px;
    letter-spacing: 3px;
}
</style>