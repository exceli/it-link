import { CounterProvider } from '../components/organisms/Counter'
import CounterView from '../components/views/CounterView'

export default function Home() {
	return (
		<CounterProvider>
			<div>
				<h1>Counter</h1>
				<CounterView />
			</div>
		</CounterProvider>
	)
}
