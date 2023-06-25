<style scoped lang="scss">
</style>

<template>

    <section class="modal bg-blue-dark bg-opacity-80" :class="{'modal-open': open}">

        <article class="modal-box top-32 absolute flex flex-col pt-10">

            <header class="relative flex items-center justify-between">

                <div class="title text-red">
                    <slot name="header" v-if="$slots.header"></slot>
                    <h3 v-else-if="title" class="title text-xl">{{ title }}</h3>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                     viewBox="0 0 24 24"
                     class="text-red cursor-pointer"
                     @click="$emit('close')"
                >
                    <path fill="currentColor"
                          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"></path>
                </svg>

            </header>

            <section class="modal-content py-5 flex-grow">
                <slot></slot>
            </section>

            <footer class="modal-action pt-16 pb-5">
                <slot name="footer"></slot>
            </footer>

        </article>

    </section>

</template>

<script setup lang="ts">

    const props = defineProps( {
        open: { type: Boolean, default: false },
        title: { type: String, }
    } )


</script>

