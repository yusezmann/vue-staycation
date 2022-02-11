<template>
    <div class="md:grid md:grid-cols-12 gap-4 pt-20 mb-12">
        <nav class="col-span-3 bg-grey-light rounded font-sans w-full mb-4">
            <ul class="flex flex-row md:text-sm text-xs text-secondary">
                <li><a href="/" class="font-semibold">Home</a></li>
                <li><span class="mx-2">/</span></li>
                <li>
                    <a href="#" class="font-semibold text-primary">{{
                        detailpage.title
                    }}</a>
                </li>
            </ul>
        </nav>
        <div class="col-span-6 text-center">
            <h1 class="text-2xl text-primary font-semibold">
                {{ detailpage.title }}
            </h1>
            <p class="text-sm text-secondary font-light">
                {{ detailpage.city }}, {{ detailpage.country }}
            </p>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-4 mb-12">
        <div
            v-for="(images, index) in detailpage.imageId"
            :key="index"
            :class="[
                `${index == 0 ? 'col-span-7' : 'col-span-5'}`,
                `${index == 0 ? 'row-span-2' : 'row-span-1'}`,
            ]"
        >
            <div class="card">
                <img
                    class="h-full w-full"
                    :src="`../${images.imageUrl}`"
                    :alt="`${images._id}`"
                />
            </div>
        </div>
    </div>
    <div class="md:grid md:grid-cols-12 gap-4 mb-16">
        <div class="col-span-7 row-span-1 mb-16">
            <h1 class="text-xl text-primary font-medium">About the place</h1>
            <p
                class="
                    mb-8
                    text-secondary
                    font-light
                    text-base text-justify
                    mt-2
                "
            >
                {{ detailpage.description }}
            </p>
            <div class="grid grid-cols-12 gap-4">
                <div
                    v-for="(item, index1) in detailpage.featureId"
                    :key="index1"
                    class="col-span-3 row-span-1"
                >
                    <img
                        class="mb-1 w-[38px] h-[38px]"
                        :src="`../${item.imageUrl}`"
                        :alt="`${item.name}`"
                    />
                    <h5 class="text-base text-primary">
                        {{ item.qty }}
                        <span class="text-secondary font-light">
                            {{ item.name }}
                        </span>
                    </h5>
                </div>
            </div>
        </div>
        <div class="col-span-5 row-span-1 mb-16">
            <div class="card">
                <div class="mx-10 md:mx-14 my-10 md:my-20">
                    <h2 class="text-lg text-primary font-medium mb-1">
                        Start Booking
                    </h2>
                    <h1 class="text-success text-4xl font-semibold mb-4">
                        ${{ detailpage.price }}
                        <span class="text-secondary font-light">per night</span>
                    </h1>
                    <p class="text-primary text-sm font-medium mb-4">
                        How long you will stay?
                    </p>
                    <InputNumber size="large" :min="1" :max="30" />
                    <p class="text-primary text-sm font-medium mt-4">
                        Pick a date
                    </p>
                    <div
                        class="
                            relative
                            mb-3
                            pt-0
                            mt-2
                            bg-gray-100
                            rounded
                            border border-gray-100
                        "
                    >
                        <input
                            type="date"
                            class="
                                h-[45px]
                                w-[45px]
                                text-gray-600
                                relative
                                rounded
                                text-sm
                                bg-gray-200
                                outline-none
                                focus:outline-none focus:ring
                            "
                        />
                        <svg
                            class="
                                absolute
                                top-0
                                left-0
                                h-[45px]
                                w-[45px]
                                mr-8
                                text-white
                                bg-primary
                            "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <p class="text-secondary font-light text-sm md:text-base">
                        You will pay
                        <span class="text-primary font-semibold">$480 USD</span>
                        <span class="text-secondary ml-2">per</span>
                        <span class="text-primary font-semibold ml-2"
                            >2 nights</span
                        >
                    </p>
                    <button
                        class="
                            bg-accent
                            capitalize
                            text-white
                            mt-5
                            w-[45px]
                            md:w-80
                            h-[45px]
                            rounded
                            shadow-md
                        "
                    >
                        Continue to book
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h1 class="text-xl text-primary font-medium">Treasure to Choose</h1>
        <div class="md:grid md:grid-cols-12 gap-4">
            <div
                v-for="(item, index2) in detailpage.activityId"
                :key="index2"
                class="col-span-3 row-span-1 mb-[70px]"
            >
                <router-link
                    class="
                        mt-4
                        after:absolute after:inset-0 after:contents
                        hover:text-accent
                        block
                    "
                    :to="'/detail-page/' + item._id"
                >
                    <div class="card relative card__feature mb-4">
                        <div
                            :class="[
                                'font-bold',
                                `${item.isPopular == true ? 'tag' : 'hidden'}`,
                            ]"
                        >
                            Popular <span class="font-light ml-1"> Choice</span>
                        </div>
                        <figure class="h-full mb-0 rounde-xl overflow-hidden">
                            <img
                                class="object-cover w-full h-full"
                                :src="`../${item.imageUrl}`"
                                :alt="`${item.name}`"
                            />
                        </figure>
                    </div>
                    <div>
                        <h5 class="text-lg mb-[2px]">{{ item.name }}</h5>
                        <span class="text-sm text-secondary font-light"
                            >{{ item.type }}
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="md:grid md:grid-cols-12 gap-20 mb-28">
        <div class="col-span-4 row-span-2 relative">
            <img class="w-81 h-83" src="../assets/img/happy-frame.png" alt="" />
            <img
                class="
                    absolute
                    top-7
                    left-7
                    -mt-83
                    w-81
                    h-83
                    rounded-larges
                    hover:-translate-y-3
                "
                :src="`../${detailtestimoni.imageUrl}`"
                alt="No image"
            />
        </div>
        <div class="col-span-6 row-span-2 flex flex-col">
            <h1 class="mt-24 text-2xl text-primary font-medium">
                {{ detailtestimoni.name }}
            </h1>
            <Rating :stars="`${detailtestimoni.rate}`" :maxStars="5" />
            <p class="text-primary text-2xl font-normal">
                {{ detailtestimoni.content }}
            </p>
            <span class="flex flex-row font-light text-secondary text-lg"
                >{{ detailtestimoni.familyName }},
                <h4 class="ml-1">
                    {{ detailtestimoni.familyOccupation }}
                </h4>
            </span>
            <button class="btn" type="button">Read Their Story</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Rating from '../components/Rating.vue'
import InputNumber from '../components/InputNumber.vue'
export default {
    components: { Rating, InputNumber },
    computed: {
        ...mapState(['detailpage', 'detailtestimoni']),
    },
    mounted() {
        this.getDetailPage()
    },
    methods: {
        getDetailPage() {
            const routeId = this.$route.params.id
            this.$store.dispatch('detailPage', routeId)
        },
    },
}
</script>

<style></style>
