<template>
    <section class="pt-36 mb-16">
        <Hero />
    </section>
    <section>
        <Mostpicked />
    </section>
    <section>
        <Categories />
    </section>
    <section>
        <Testimonial />
    </section>
</template>

<script>
import Hero from '../components/Hero.vue'
import Mostpicked from '../components/Mostpicked.vue'
import Categories from '../components/Categories.vue'
import Testimonial from '../components/Testimonial.vue'
export default {
    components: {
        Hero,
        Mostpicked,
        Categories,
        Testimonial,
    },

    mounted() {
        this.$store.dispatch('fetchPage')
    },
}
</script>

<style></style>
