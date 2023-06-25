<template>


    <section class="report">

        <p class="text-lg font-semibold mb-3">This month:</p>

        <div class="flex mb-10">

            <div class="days w-32">
                <div class="stat-title">Days</div>
                <div class="stat-value">{{ monthlyReport.days }}</div>
            </div>

            <div class="hours w-32">
                <div class="stat-title">Hours</div>
                <div class="stat-value">{{ monthlyReport.hours }}</div>
            </div>

        </div>

        <a-table v-if="showRecords && timeRecords.records.length"
                 :columns="['date', 'hours']"
                 :items="timeRecords.records"
                 class="records"
        >
            <template #tbody="{ items: records }">

                <tr v-for="(record) in records as TEmployeeTimeRecords"
                    :key="record.id"
                    class="hover:bg-base-100 hover:bg-opacity-50 cursor-pointer"
                >
                    <td>{{ formatDate( record.start.date ) }}</td>
                    <td>{{ TimeClockModule.countHoursForRecord( record ) }}</td>
                </tr>

            </template>

        </a-table>

    </section>

</template>

<script setup lang="ts">

    import { TimeClockModule } from '@modules/time-clock/time-clock.module'
    import { formatDate }      from '@utils/date'

    const props = defineProps<{ employeeId: string; showRecords?: boolean; }>()

    const monthlyReport = computed( () => TimeClockModule.getEmployeeMonthlyReport( props.employeeId ) )
    const timeRecords = computed( () => TimeClockModule.getEmployeeTimeRecords( props.employeeId ) )

</script>
