import { TimeClockModule } from '@modules/time-clock/time-clock.module'
import { EmployerModule }  from '@modules/employer/employer.module'

describe( 'TimeClockModule', () => {

    let employee

    beforeEach( () => {
        employee = Object.values( EmployerModule.state.employees )[ 0 ] as TEmployee
    } )

    test( 'TimeClockModule.clockIn', async () => {

        TimeClockModule.clockIn( employee.id )

        expect( employee.timeRecords ).toHaveLength( 2 )
        expect( employee.timeRecords[ 0 ] ).toHaveProperty( 'isCompleted', false )
    } )

    test( 'TimeClockModule.clockOut', async () => {

        TimeClockModule.clockOut( employee.id )

        expect( employee.timeRecords ).toHaveLength( 2 )
        expect( employee.timeRecords[ 0 ] ).toHaveProperty( 'isCompleted', true )
    } )


    test( 'TimeClockModule.getEmployeeMonthlyReport before update', async () => {

        const report = TimeClockModule.getEmployeeMonthlyReport( employee.id )

        expect( report ).toHaveProperty( 'hours', 1 )
    } )

    test( 'TimeClockModule.updateEmployeeTimeRecord & TimeClockModule.countHoursForRecord', async () => {

        const record = employee.timeRecords[ 0 ]

        expect( TimeClockModule.countHoursForRecord( record ) ).toBe( 0 )

        // update start hour
        TimeClockModule.updateEmployeeTimeRecord( {
            recordId: record.id,
            employeeId: employee.id,
            phase: 'start',
            clockPart: 'hour',
            value: 10,
        } )

        // update start minutes
        TimeClockModule.updateEmployeeTimeRecord( {
            recordId: record.id,
            employeeId: employee.id,
            phase: 'start',
            clockPart: 'minutes',
            value: 0,
        } )

        // update end hour
        TimeClockModule.updateEmployeeTimeRecord( {
            recordId: record.id,
            employeeId: employee.id,
            phase: 'end',
            clockPart: 'hour',
            value: 22,
        } )

        // update end minutes
        TimeClockModule.updateEmployeeTimeRecord( {
            recordId: record.id,
            employeeId: employee.id,
            phase: 'end',
            clockPart: 'minutes',
            value: 0,
        } )

        expect( TimeClockModule.countHoursForRecord( record ) ).toBe( 12 )

    } )

    test( 'TimeClockModule.getEmployeeMonthlyReport after update', async () => {

        const report = TimeClockModule.getEmployeeMonthlyReport( employee.id )

        expect( report ).toHaveProperty( 'hours', 13 )
    } )

    test( 'TimeClockModule.getEmployeeTimeRecords', async () => {

        const { records } = TimeClockModule.getEmployeeTimeRecords( employee.id )

        expect( records ).toHaveLength( 2 )

    } )

} )
