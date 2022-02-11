<template>
    <footer class="border-t">
        <div
            class="
                flex flex-wrap
                md:flex-row
                flex-col
                justify-between
                ml-8
                md:mx-36
            "
        >
            <div class="hidden md:block">
                <!-- Website Logo -->
                <router-link
                    to="#"
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
                <p class="w-60 h-10 ml-2 text-left text-sm text-secondary">
                    We kaboom your beauty holiday instantly and memorable.
                </p>
            </div>
            <div class="text-left">
                <h1 class="text-primary text-lg font-medium mt-4">
                    For Beginners
                </h1>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >New Account</router-link
                    >
                </div>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >Start Booking a Room</router-link
                    >
                </div>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >Use Payment</router-link
                    >
                </div>
            </div>
            <div class="text-left">
                <h1 class="text-primary text-lg font-medium mt-4">
                    Explore Us
                </h1>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >Our Careers</router-link
                    >
                </div>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >Privacy</router-link
                    >
                </div>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >Terms & Conditions</router-link
                    >
                </div>
            </div>
            <div class="text-left">
                <h1 class="text-primary text-lg font-medium mt-4">
                    Connect Us
                </h1>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >support@staycation.id</router-link
                    >
                </div>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >021-2208-7966</router-link
                    >
                </div>
                <div>
                    <router-link class="text-secondary text-sm" to=""
                        >Staycation, Kemang, Jakarta</router-link
                    >
                </div>
            </div>
        </div>
        <div class="mt-12">
            <h1 class="text-secondary text-center mb-12">
                Copyright {{ new Date().getFullYear() }} • All rights reserved •
                Staycation
            </h1>
        </div>
    </footer>
</template>
