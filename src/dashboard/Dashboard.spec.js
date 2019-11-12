import React from 'react'
// import renderer from 'react-test-renderer'
// import * as rtl from '@testing-library/react'

import Dashboard from '../dashboard/Dashboard'
import { render, getByText } from 'react-testing-library'
import Controls from '../controls/Controls'
describe('display', () => {
    test('display renders', () => {
        const wrapper = render( <Dashboard /> )
        const DisplayDiv = wrapper.container.querySelector('.display')
        expect(DisplayDiv).toBeTruthy();
    })
    test('Controll renders', () => {
        const wrapper = render( <Dashboard /> )
        const ControlsDiv = wrapper.container.querySelector('.controls')
        expect(ControlsDiv).toBeTruthy();
    })
    
    })