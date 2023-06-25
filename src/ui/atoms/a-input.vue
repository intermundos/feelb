<style scoped lang="scss">

</style>

<template>

    <input class="input input-primary input-bordered w-full max-w-xs"
           :value="value"
           @input="(event) => $emit('input', event.target.value)"
    />

</template>

<script setup lang="ts">

    defineProps( [ 'value' ] )
    defineEmits( [ 'input' ] )

</script>
