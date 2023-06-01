import React from 'react'

import { Container, TagCard } from './styles'

interface IHistoryFinanceCardProps {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container>
      <TagCard color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  )
}

export { HistoryFinanceCard }
