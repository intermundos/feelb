<template>

    <section class="punch-clock">
        
        <button v-if="isClockedIn"
                class="btn btn-sm btn-error rounded"
                @click="TimeClockModule.clockOut( employeeId )"
        >
            Clock out
        </button>

        <button v-else
                class="btn btn-sm btn-success rounded"
                @click="TimeClockModule.clockIn( employeeId )"
        >
            Clock in
        </button>

    </section>

</template>

<script setup lang="ts">

    import { TimeClockModule } from '@modules/time-clock/time-clock.module'

    const props = defineProps<{ employeeId: string; }>()

    const isClockedIn = computed( () => TimeClockModule.getIsClockedIn( props.employeeId ) )

</script>
