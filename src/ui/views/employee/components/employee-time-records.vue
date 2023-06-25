<template>

    <section>

        <a-table :columns="['date', 'start (hh:mm)', 'end (hh:mm)']"
                 :items="timeRecords.records"
        >

            <template #tbody="{items: records}">

                <tr v-for="(record, index) in records as TEmployeeTimeRecords"
                    :key="index"
                    class="hover:bg-gray-300 hover:bg-opacity-50 cursor-pointer"
                >

                    <td class="font-semibold w-64">
                        {{ formatDate( record.start.date, 'dd MMM yyyy' ) }}
                    </td>

                    <td>
                        <clock-input :time="record.start"
                                     @change="(value, clockPart) => updateRecord(record, value, clockPart, 'start')"
                        />
                    </td>

                    <td>
                        <clock-input :time="record.end"
                                     @change="(value, clockPart) => updateRecord(record, value, clockPart, 'end')"
                        />
                    </td>

                </tr>

            </template>

        </a-table>

    </section>

</template>

<script setup lang="ts">

    import { formatDate }      from '@utils/date'
    import { TimeClockModule } from '@modules/time-clock/time-clock.module'

    const props = defineProps<{ employeeId: string; }>()

    const timeRecords = computed( () => TimeClockModule.getEmployeeTimeRecords( props.employeeId ) )

    function updateRecord( record: TEmployeeTimeRecord, value: number, clockPart: TClockPart, phase: TClockPhase ) {

        TimeClockModule.updateEmployeeTimeRecord( {
            recordId: record.id,
            employeeId: props.employeeId,
            value,
            clockPart,
            phase,
        } )
    }

</script>
