import { BaseVueModule }              from '@core/base/base-vue-module'
import { getDate, getHourAndMinutes } from '@utils/time'
import { UUIDTimeBasedGenerator }     from '@utils/crypto'
import { EmployerModule }             from '@modules/employer/employer.module'

export const TimeClockModule = new class TimeClockModule extends BaseVueModule<TTimeClockState> {
    constructor() {
        super( 'time_clock', {} )
    }

    public clockIn( employeeId: string ) {

        const { hour, minutes, timestamp } = getHourAndMinutes()

        const employee = EmployerModule.getEmployee( employeeId )

        employee.timeRecords.unshift( {
            id: UUIDTimeBasedGenerator(),
            start: { hour, minutes, date: timestamp },
            end: { hour: 0, minutes: 0, date: 0 },
            isCompleted: false,
        } )
    }

    public clockOut( employeeId: string ) {

        const { lastRecord } = this.getEmployeeTimeRecords( employeeId )
        const { hour, minutes } = getHourAndMinutes()

        lastRecord.end.hour = hour
        lastRecord.end.minutes = minutes
        lastRecord.end.date = Date.now()
        lastRecord.isCompleted = true

    }

    public getIsClockedIn( employeeId: string ) {

        const { lastRecord } = this.getEmployeeTimeRecords( employeeId )

        if ( !lastRecord ) {
            return false
        }

        return !lastRecord.isCompleted
    }

    public getEmployeeMonthlyReport( employeeId: string ) {

        const { records } = this.getEmployeeTimeRecords( employeeId )

        const totalDays = new Set()
        let totalHours = 0

        records
            .filter( record => record.end.hour || record.end.minutes )
            .forEach( record => {
                totalDays.add( getDate( record.start.date ) )
                totalHours = totalHours + this.countHoursForRecord( record )
            } )

        return {
            days: totalDays.size,
            hours: Number( totalHours.toFixed( 1 ) ),
        }
    }

    public updateEmployeeTimeRecord( args: TUpdateRecordArg ) {

        const { recordId, employeeId, value, clockPart, phase } = args
        const { records } = this.getEmployeeTimeRecords( employeeId )

        const record = records.find( record => record.id === recordId ) as TEmployeeTimeRecord

        record[ phase ][ clockPart ] = value
    }

    public getEmployeeTimeRecords( employeeId: string, currentMonthOnly = true ) {

        const { timeRecords } = EmployerModule.getEmployee( employeeId )

        const date = new Date()
        let records = timeRecords

        if ( currentMonthOnly ) {
            records = records.filter( record => {
                const startDate = new Date( record.start.date )
                return startDate.getMonth() === date.getMonth()
            } )
        }

        return {
            records,
            lastRecord: timeRecords[ 0 ] as TEmployeeTimeRecord,
        }
    }

    public countHoursForRecord( record: TEmployeeTimeRecord ) {

        if ( !record.isCompleted ) {
            return 0
        }

        const startHour = record.start.hour + record.start.minutes / 60
        const endHour = record.end.hour + record.end.minutes / 60

        return Number( ( endHour - startHour ).toFixed( 1 ) )
    }
}






