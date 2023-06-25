<style scoped lang="scss">

</style>

<template>

    <div class="clock-input join">

        <a-input type="number"
                 name="hour"
                 :value="time.hour"
                 max="23"
                 min="0"
                 class="w-16 input-xs rounded join-item"
                 @change="handleChange"
        />

        <a-input type="number"
                 name="minutes"
                 :value="time.minutes"
                 max="59"
                 min="0"
                 class="w-16 input-xs rounded join-item"
                 @change="handleChange"
        />

    </div>

</template>

<script setup lang="ts">

    const emit = defineEmits( [ 'change' ] )
    defineProps<{ time: { hour: number; minutes: number; }; }>()

    function handleChange( e ) {
        const { value, name } = e.target
        emit( 'change', Number( value ), name )
    }

</script>
