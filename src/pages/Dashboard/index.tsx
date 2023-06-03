import React from 'react'
import { NavHeader } from '../../components/NavHeader'
import { SelectInput } from '../../components/SelectInput'

import { Container } from './styles'

export const Dashboard: React.FC = () => {
  const options = [
    { value: '01', label: 'Month1' },
    { value: '02', label: 'Month2' },
  ]

  const days = [
    { value: '01', label: 'Day1' },
    { value: '02', label: 'Day2' },
  ]

  return (
    <Container>
      <NavHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} onHandleChange={() => {}} />
        <SelectInput options={days} onHandleChange={() => {}} />
      </NavHeader>
    </Container>
  )
}
