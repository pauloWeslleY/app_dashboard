import { ChangeEvent } from 'react'

import { Container } from './styles'

interface ISelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
  onHandleChange: (event: ChangeEvent<HTMLSelectElement>) => void | undefined
  defaultValue?: string | number
}

export const SelectInput: React.FC<ISelectInputProps> = (props) => {
  const { options, defaultValue, onHandleChange } = props

  return (
    <Container>
      <select onChange={onHandleChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  )
}
