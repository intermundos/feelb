<template>

    <section :class="['page', name ]">

        <slot></slot>

    </section>

</template>

<script setup lang="ts">

    withDefaults( defineProps<{ name: string; }>(), {} )


</script>

<style scoped lang="scss">

</style>
