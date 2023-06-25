import { mount }  from '@vue/test-utils'
import ClockInput from './clock-input.vue'  // Replace with your component path

describe( 'ClockInput.vue', () => {
    let wrapper

    beforeEach( () => {
        wrapper = mount( ClockInput, {
            props: {
                time: { hour: 12, minutes: 30 },
            },
        } )
    } )

    test( 'renders correct initial values', () => {
        const inputs = wrapper.findAll( 'input' )
        expect( inputs[ 0 ].element.value ).toBe( 12 )
        expect( inputs[ 1 ].element.value ).toBe( 30 )
    } )

    test( 'emits change event with correct payload values change', async () => {
        const inputs = wrapper.findAll( 'input' )
        await inputs[ 0 ].setValue( 13 )
        await inputs[ 1 ].setValue( 45 )
        expect( wrapper.emitted() ).toHaveProperty( 'change' )
        expect( wrapper.emitted().change ).toEqual( [
            [ 13, 'hour' ],
            [ 45, 'minutes' ],
        ] )
    } )

} )
