import { InputHTMLAttributes } from 'react'

import { Input } from './styles'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

export const InputField: React.FC<InputFieldProps> = ({ ...rest }) => {
  return <Input {...rest} />
}
