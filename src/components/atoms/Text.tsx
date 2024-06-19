import { FC, ReactNode, memo } from 'react'
import style from './Text.module.scss'

interface TextProps {
	children: ReactNode
}

const Text: FC<TextProps> = memo(({ children }) => {
	return <span className={style.text}>{children}</span>
})

export default Text
