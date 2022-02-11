<template>
    <!-- mostpicked -->
    <section>
        <h1 class="text-2xl font-medium mb-6">Most Picked</h1>
        <div class="md:grid md:grid-cols-12 md:gap-4">
            <div
                v-for="(item, index) in mostPicked"
                :key="index"
                :class="[
                    'col-span-4',
                    `${index == 0 ? 'row-span-2' : 'row-span-1'}`,
                ]"
            >
                <router-link
                    class="
                        mb-4
                        md:mb-0
                        after:absolute after:inset-0 after:contents
                        hover:text-accent
                        block
                    "
                    :to="'/detail-page/' + item._id"
                >
                    <div class="card relative card__feature">
                        <div class="tag">
                            $ {{ item.price }}
                            <span class="font-light ml-1">
                                per {{ item.unit }}</span
                            >
                        </div>
                        <figure class="h-full mb-0 rounde-xl overflow-hidden">
                            <img
                                class="w-full h-full"
                                :src="`${item.imageId[0].imageUrl}`"
                                :alt="`${item.title}`"
                            />
                        </figure>
                        <div class="meta-wrapper">
                            <h5 class="text-lg mb-[2px]">{{ item.title }}</h5>
                            <span class="text-sm"
                                >{{ item.city }}, {{ item.country }}
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['mostPicked']),
    },
}
</script>

<style></style>
