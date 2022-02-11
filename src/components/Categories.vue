<template>
    <div v-for="(category, index1) in categories" :key="index1">
        <h1 class="text-2xl font-medium mb-6">{{ category.name }}</h1>
        <div class="md:grid md:grid-cols-12 gap-4">
            <div
                v-for="(itemCategory, index2) in category.itemId"
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
                    :to="'/detail-page/' + itemCategory._id"
                >
                    <div class="card relative card__feature mb-4">
                        <div
                            :class="[
                                `${
                                    itemCategory.isPopular == true
                                        ? 'tag'
                                        : 'hidden'
                                }`,
                                'font-bold',
                            ]"
                        >
                            Popular <span class="font-light ml-1"> Choice</span>
                        </div>
                        <figure class="h-full mb-0 rounde-xl overflow-hidden">
                            <img
                                class="object-cover w-full h-[215px]"
                                :src="`${itemCategory.imageId[0].imageUrl}`"
                                :alt="`${itemCategory.name}`"
                            />
                        </figure>
                    </div>
                    <div>
                        <h5 class="text-lg mb-[2px]">
                            {{ itemCategory.title }}
                        </h5>
                        <span class="text-sm"
                            >{{ itemCategory.city }}, {{ itemCategory.country }}
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['categories']),
    },
}
</script>

<style></style>
