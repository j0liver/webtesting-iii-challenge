// Test away!
import React from 'react'
import Display from '../display/Display'
import { render, getByText } from 'react-testing-library'

describe('describe', () => {
    test('does things', () => {
        const props = { closed: true, locked: true}
        const { rerender, getByText } = render(<Display />)
        const DisplayLock = getByText(/Unlocked/)
        const DisplayOpen = getByText(/Open/)
        expect(DisplayLock.classList.value).toContain('green-led')
        rerender(<Display {...props} />)
        expect(DisplayLock.classList.value).toContain('red-led')
    })
})