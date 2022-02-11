<template>
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
                    hover:-translate-y-3
                "
                :src="`${testimonial.imageUrl}`"
                alt=""
            />
        </div>
        <div class="col-span-6 row-span-2 flex flex-col">
            <h1 class="mt-24 text-2xl text-primary font-medium">
                {{ testimonial.name }}
            </h1>
            <Rating :stars="`${testimonial.rate}`" :maxStars="5" />
            <p class="text-primary text-2xl font-normal">
                {{ testimonial.content }}
            </p>
            <span class="flex flex-row font-light text-secondary text-lg"
                >{{ testimonial.familyName }},
                <h4 class="ml-1">{{ testimonial.familyOccupation }}</h4>
            </span>
            <button class="btn" type="button">Read Their Story</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Rating from './Rating.vue'

export default {
    components: { Rating },
    computed: {
        ...mapState(['testimonial']),
    },
}
</script>

<style></style>
