import { useMemo, useState } from 'react'
import { NavHeader } from '../../components/NavHeader'
import { SelectInput } from '../../components/SelectInput'
import { CardWalletHero } from './components/CardWalletHero'
import { MessageHero } from './components/MessageHero'
import { PieChartHero } from './components/PieChartHero'
import { currentMonth, currentYear } from '../../constants/yearAndMonth'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'

import { Container, ContentHero } from './styles'
import HappyIcon from '../../assets/happy.svg'
import SadIcon from '../../assets/sad.svg'
import GrinningIcon from '../../assets/grinning.svg'

export const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(currentMonth)
  const [yearSelected, setYearSelected] = useState<number>(currentYear)

  const YEARS = useMemo(() => {
    let uniqueYears: number[] = []
    const dataList = [...expenses, ...gains]

    dataList.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      }
    })
  }, [])

  const MONTHS = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, [])

  const allGains = useMemo(() => {
    let all: number = 0

    gains.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          all += Number(item.amount)
        } catch (error) {
          throw new Error(`Invalid amount must be number ==> ${error}`)
        }
      }
    })

    return all
  }, [monthSelected, yearSelected])

  const allExpenses = useMemo(() => {
    let all: number = 0

    expenses.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          all += Number(item.amount)
        } catch (error) {
          throw new Error(`Invalid amount must be number ==> ${error}`)
        }
      }
    })

    return all
  }, [monthSelected, yearSelected])

  const allBalance = useMemo(() => {
    return allGains - allExpenses
  }, [allGains, allExpenses])

  const message = useMemo(() => {
    if (allBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria!',
        footerText:
          'Verifique seus gastos e tente cortar algumas algumas coisas desnecessárias.',
        icon: SadIcon,
      }
    } else if (allBalance === 0) {
      return {
        title: 'Ufa...!',
        description: 'Neste mês, você gastou exatamente o que ganhou!',
        footerText: 'Tenha cuidado. No proximo tente poupar o seu dinheiro.',
        icon: GrinningIcon,
      }
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue assim. Considere investir o seu saldo.',
        icon: HappyIcon,
      }
    }
  }, [allBalance])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      console.error('Invalid Month value, Is accept 0 - 24')
      throw new Error(error)
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch (error) {
      console.error('Invalid Month value, Is accept 0 - 24')
      throw new Error(error)
    }
  }

  return (
    <Container>
      <NavHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={MONTHS}
          defaultValue={monthSelected}
          onHandleChange={(e) => handleMonthSelected(e.target.value)}
        />
        <SelectInput
          options={YEARS}
          defaultValue={yearSelected}
          onHandleChange={(e) => handleYearSelected(e.target.value)}
        />
      </NavHeader>

      <ContentHero>
        <CardWalletHero
          title="Saldo"
          amount={allBalance}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4E41F0"
        />
        <CardWalletHero
          title="Entradas"
          amount={allGains}
          footerLabel="última movimentação em 18/07/2020 às 11h40"
          icon="arrowUp"
          color="#F7931B"
        />
        <CardWalletHero
          title="Saídas"
          amount={allExpenses}
          footerLabel="última movimentação em 18/07/2020 às 11h40"
          icon="arrowDown"
          color="#E44C4E"
        />
        <MessageHero
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChartHero />
      </ContentHero>
    </Container>
  )
}
