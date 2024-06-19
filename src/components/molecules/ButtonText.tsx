import { FC, ReactNode, memo } from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'

interface ButtonTextProps {
	onClick: () => void
	children: ReactNode
}

const ButtonText: FC<ButtonTextProps> = memo(({ onClick, children }) => {
	return (
		<Button onClick={onClick}>
			<Text>{children}</Text>
		</Button>
	)
})

export default ButtonText
