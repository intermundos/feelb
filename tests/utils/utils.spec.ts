import { getDate, getHourAndMinutes } from '@utils/time'

describe( 'Utils', () => {

    test( 'getDate', async () => {
        // 24/06/2023
        const epoch = 1687636545415
        const date = getDate( epoch )
        expect( date ).toBe( 24 )
    } )

    test( 'getHourAndMinutes', async () => {
        // 24/06/2023 22:55
        const epoch = 1687636545415
        const { hour, minutes, timestamp } = getHourAndMinutes( epoch )
        expect( hour ).toBe( 22 )
        expect( minutes ).toBe( 55 )
        expect( timestamp ).toBe( epoch )
    } )

} )
