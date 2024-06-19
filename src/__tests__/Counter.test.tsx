import { CounterProvider } from '@/components/organisms/Counter'
import CounterView from '@/components/views/CounterView'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

const TestCounterComponent = () => (
	<CounterProvider>
		<CounterView />
	</CounterProvider>
)

describe('Counter', () => {
	it('renders initial counter value', () => {
		render(<TestCounterComponent />)
		expect(screen.getByText('0')).toBeInTheDocument()
	})

	it('increments counter value', () => {
		render(<TestCounterComponent />)
		const incrementButton = screen.getByText('+')
		fireEvent.click(incrementButton)
		expect(screen.getByText('1')).toBeInTheDocument()
	})

	it('decrements counter value', () => {
		render(<TestCounterComponent />)
		const decrementButton = screen.getByText('-')
		fireEvent.click(decrementButton)
		expect(screen.getByText('-1')).toBeInTheDocument()
	})
})
