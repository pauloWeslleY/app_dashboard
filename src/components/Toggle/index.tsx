import React from 'react'

import { Container, ToggleLabel, SwitchButton } from './styles'

export const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <SwitchButton
      onChange={() => console.log('changed')}
      checked
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
)
