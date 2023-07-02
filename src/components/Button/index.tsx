import { ButtonHTMLAttributes } from 'react'
import { Btn } from './styles'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return <Btn {...rest}>{children}</Btn>
}
