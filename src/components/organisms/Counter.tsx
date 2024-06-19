import {
	FC,
	ReactNode,
	createContext,
	memo,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react'
import ButtonText from '../molecules/ButtonText'

export interface CounterContextType {
	index: number
	increment: () => void
	decrement: () => void
}

const CounterContext = createContext<CounterContextType | undefined>(undefined)

interface CounterProviderProps {
	children: ReactNode
}

export const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
	const [index, setIndex] = useState(0)

	const increment = useCallback(() => {
		setIndex(prevIndex => prevIndex + 1)
	}, [])

	const decrement = useCallback(() => {
		setIndex(prevIndex => prevIndex - 1)
	}, [])

	const value = useMemo(
		() => ({
			index,
			increment,
			decrement,
		}),
		[index, increment, decrement]
	)

	return (
		<CounterContext.Provider value={{ index, increment, decrement }}>
			{children}
		</CounterContext.Provider>
	)
}

export const useCounter = () => {
	const context = useContext(CounterContext)
	if (context === undefined) {
		throw new Error('useCounter must be used within a CounterProvider')
	}
	return context
}

export const IncrementButton: FC = memo(() => {
	const { increment } = useCounter()
	return <ButtonText onClick={increment}>+</ButtonText>
})

export const DecrementButton: FC = memo(() => {
	const { decrement } = useCounter()
	return <ButtonText onClick={decrement}>-</ButtonText>
})
