import { Container, ToggleLabel, SwitchButton } from './styles'

interface IToggleProps {
  labelLeft: string
  labelRight: string
  checked: boolean
  onChange: () => void
  value?: string
}

export const Toggle: React.FC<IToggleProps> = props => {
  const { checked, labelLeft, labelRight, onChange } = props

  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <SwitchButton
        onChange={onChange}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  )
}
