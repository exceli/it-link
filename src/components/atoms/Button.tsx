import { FC, ReactNode, memo } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
	onClick: () => void
	children: ReactNode
}

const Button: FC<ButtonProps> = memo(({ children, onClick }) => {
	return (
		<button className={style.button} onClick={onClick}>
			{children}
		</button>
	)
})

export default Button
