import { useMemo } from 'react'
import CountUp from 'react-countup'

import { Container } from './styles'
import DollarIcon from '../../../../assets/dollar.svg'
import ArrowUpIcon from '../../../../assets/arrowUp.svg'
import ArrowDownIcon from '../../../../assets/arrowDown.svg'

interface ICardWalletHeroProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dollar' | 'arrowUp' | 'arrowDown'
  color: string
}

const CardWalletHero: React.FC<ICardWalletHeroProps> = props => {
  const { title, amount, footerLabel, icon, color } = props

  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dollar':
        return DollarIcon
      case 'arrowUp':
        return ArrowUpIcon
      case 'arrowDown':
        return ArrowDownIcon
      default:
        return null
    }
  }, [icon])

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={'R$ '}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      {iconSelected && <img src={iconSelected} alt={title} />}
    </Container>
  )
}

export { CardWalletHero }
