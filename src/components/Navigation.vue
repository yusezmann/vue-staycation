<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav class="border-b md:justify-between">
            <!-- Website Logo -->
            <div class="md:ml-36 ml-8">
                <router-link
                    to="/"
                    class="
                        flex
                        items-center
                        py-4
                        px-2
                        text-accent text-2xl
                        font-semibold
                    "
                >
                    Stay<span class="font-semibold text-primary text-2xl"
                        >cation.</span
                    >
                </router-link>
            </div>

            <!-- Primary Nav -->
            <div class="md:flex flex-row mr-36 md:items-center hidden">
                <button>
                    <router-link
                        class="
                            text-base text-primary
                            ml-8
                            bg-violet-500
                            hover:text-accent
                            active:text-accent
                            focus:outline-none focus:ring focus:bg-violet-600
                        "
                        to="/"
                        >Home</router-link
                    >
                </button>
                <button>
                    <router-link
                        class="
                            text-base text-primary
                            ml-8
                            bg-violet-500
                            hover:text-accent
                            active:bg-violet-600
                            focus:outline-none focus:ring focus:ring-violet-300
                        "
                        to="/"
                        >Browse by</router-link
                    >
                </button>
                <button>
                    <router-link
                        class="
                            text-base text-primary
                            ml-8
                            bg-violet-500
                            hover:text-accent
                            active:bg-violet-600
                            focus:outline-none focus:ring focus:ring-violet-300
                        "
                        to="/"
                        >Stories</router-link
                    >
                </button>
                <button>
                    <router-link
                        class="
                            text-base text-primary
                            ml-8
                            bg-violet-500
                            hover:text-accent
                            active:bg-violet-600
                            focus:outline-none focus:ring focus:ring-violet-300
                        "
                        to="/"
                        >Agents</router-link
                    >
                </button>
            </div>

            <!-- Icons menu mobile -->
            <div class="flex mt-2 mr-2 absolute top-0 right-6 rotate-180">
                <i
                    @click="toggleMobileNav"
                    v-show="mobile"
                    class="
                        ri-function-line ri-2x
                        transition
                        duration-150
                        ease-in-out
                    "
                    :class="{ 'icon-active': mobileNav }"
                ></i>
            </div>

            <!-- dropdown menu -->
            <transition name="mobile-nav">
                <div
                    v-show="mobileNav"
                    class="
                        flex flex-col
                        fixed
                        w-65
                        max-w-xs
                        h-full
                        bg-accent
                        text-white text-lg
                        top-0
                        left-0
                    "
                >
                    <button class="text-left mt-6">
                        <router-link
                            class="ml-20 hover:text-primary"
                            exact-active-class="active"
                            :to="{ name: 'Home' }"
                            >Home</router-link
                        >
                    </button>
                    <button class="text-left mt-6">
                        <router-link
                            class="ml-20 hover:text-primary"
                            exact-active-class="active"
                            :to="{ name: '' }"
                            >About</router-link
                        >
                    </button>
                    <button class="text-left mt-6">
                        <router-link
                            class="ml-20 hover:text-primary"
                            exact-active-class="active"
                            :to="{ name: '' }"
                            >Discover</router-link
                        >
                    </button>
                    <button class="text-left mt-6">
                        <router-link
                            class="ml-20 hover:text-primary"
                            exact-active-class="active"
                            :to="{ name: '' }"
                            >Places</router-link
                        >
                    </button>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'navigation',
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },

        updateScroll() {
            const scrollPosition = window.scrollY
            if (scrollPosition > 50) {
                this.scrolledNav = true
                return
            }
            this.scrolledNav = false
        },

        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 750) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        },
    },
}
</script>
