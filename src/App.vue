<template>
    <Navbar class="fixed" />
    <div class="md:mx-36 mx-8">
        <router-view />
    </div>
    <Footer />
</template>
<script>
import Navbar from './components/Navigation.vue'
import Footer from './components/Footer.vue'
export default {
    components: {
        Navbar,
        Footer,
    },
}
</script>
