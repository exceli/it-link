import { FC } from 'react'
import Text from '../atoms/Text'
import {
	DecrementButton,
	IncrementButton,
	useCounter,
} from '../organisms/Counter'
import style from './CounterView.module.scss'

const CounterView: FC = () => {
	const { index } = useCounter()

	return (
		<div className={style.container}>
			<div className={style.counter}>
				<DecrementButton />
				<Text>{index}</Text>
				<IncrementButton />
			</div>
		</div>
	)
}

export default CounterView
