import { mount }             from '@vue/test-utils'
import EmployeeMonthlyReport from './employee-monthly-report.vue'

describe( 'MonthlyReport.vue', () => {
    let wrapper

    beforeEach( () => {

        vi.mock( '@modules/time-clock/time-clock.module', () => ( {
            TimeClockModule: {
                getEmployeeMonthlyReport: vi.fn( () => ( { days: 30, hours: 160 } ) ),
                getEmployeeTimeRecords: vi.fn( () => ( {
                    records: [
                        { id: 1, start: { date: '2023-06-01' }, end: { date: '2023-06-01' } },
                        { id: 2, start: { date: '2023-06-02' }, end: { date: '2023-06-02' } },
                    ],
                } ) ),
                countHoursForRecord: vi.fn( ( record ) => 8 ),
            },
        } ) )

        vi.mock( '@utils/date', () => ( {
            formatDate: vi.fn( ( date ) => date ),
        } ) )

        wrapper = mount( EmployeeMonthlyReport, {
            props: { employeeId: '123', showRecords: true },
        } )
    } )

    test( 'renders monthly days and hours report', async () => {
        expect( wrapper.find( '.days .stat-value' ).text() ).toBe( '30' )
        expect( wrapper.find( '.hours .stat-value' ).text() ).toBe( '160' )
    } )

    test( 'renders table with time records when showRecords is true', async () => {
        expect( wrapper.find( '.records' ).exists() ).toBe( true )
    } )

    test( 'does not render table with time records when showRecords is false', async () => {
        await wrapper.setProps( { showRecords: false } )
        await nextTick()
        expect( wrapper.find( '.records' ).exists() ).toBe( false )
    } )

} )
