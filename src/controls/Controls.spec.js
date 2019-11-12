// Test away!

import React from 'react'
// import renderer from 'react-test-renderer'
// import * as rtl from '@testing-library/react'

import Controls from '../controls/Controls'
import { render, getByText } from 'react-testing-library'
describe('controls', () => {
    test('Controll button for unLock works', () => {
        const wrapper = render( <Controls/> )
        const closeButton = wrapper.getByText(/Close Gate/)
        expect(closeButton).toBeTruthy();
    })

    test('lock gate ', () => {
        const wrapper = render( <Controls/> )
        const lockGate = wrapper.getByText(/Lock Gate/)
        expect(lockGate).toBeTruthy();
        expect(lockGate.disabled).toBeTruthy();
    })
    })
