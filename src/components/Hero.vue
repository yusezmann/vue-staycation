<template>
    <div class="flex flex-col-reverse md:flex-row md:mx-36">
        <div class="flex flex-col md:-ml-36">
            <h1 class="text-primary text-4xl font-bold">
                Forget Busy Work, <br />
                Start Next Vacation
            </h1>
            <p class="font-light text-base w-66 text-secondary mt-5">
                We provide what you need to enjoy your holiday with family. Time
                to make another memorable moments.
            </p>
            <button class="btn" type="button">Show me now</button>
            <!-- <div class="grid grid-cols-6 gap-4 mt-20 md:space-x-4">
                <div
                    v-for="(item, index) in hero"
                    :key="index"
                    class="col-span-2"
                >
                    <img :src="`${item.imageUrl}`" :alt="`${item.name}`" />
                    <div class="flex flex-row">
                        <h5 class="text-primary font-medium">
                            {{ item.qty }}
                            <span class="text-secondary ml-1 font-light">{{
                                item.name
                            }}</span>
                        </h5>
                    </div>
                </div>
            </div> -->
            <div
                class="grid grid-flow-col auto-cols-max md:auto-cols-min mt-28"
            >
                <div>
                    <img
                        class="w-8 h-8"
                        src="../assets/icons/ic_traveler.svg"
                        alt=""
                    />
                    <div class="flex md:flex-row">
                        <h5 class="text-primary font-medium">
                            {{ hero.travelers }}
                        </h5>
                        <p class="text-secondary ml-2">travelers</p>
                    </div>
                </div>
                <div class="ml-20 md:ml-14">
                    <img
                        class="w-8 h-8"
                        src="../assets/icons/ic_treasure.svg"
                        alt=""
                    />
                    <div class="flex md:flex-row">
                        <h5 class="text-primary font-medium">
                            {{ hero.treasures }}
                        </h5>
                        <p class="text-secondary ml-2">treasure</p>
                    </div>
                </div>
                <div class="ml-20 md:ml-14">
                    <img
                        class="w-8 h-8"
                        src="../assets/icons/ic_cities.svg"
                        alt=""
                    />
                    <div class="flex md:flex-row">
                        <h5 class="text-primary font-medium">
                            {{ hero.cities }}
                        </h5>
                        <p class="text-secondary ml-2">cities</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:block hidden">
            <img
                class="
                    absolute
                    md:right-36
                    mt-6
                    md:w-67 md:h-66
                    shadow-lg
                    rounded-xl
                "
                src="../assets/img/frame-hero.png"
                alt=""
            />
            <img
                class="
                    absolute
                    md:right-44
                    hover:-translate-y-3
                    md:w-67 md:h-66
                    rounded-large
                "
                src="../assets/img/hero.png"
                alt=""
            />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['hero']),
    },
}
</script>
