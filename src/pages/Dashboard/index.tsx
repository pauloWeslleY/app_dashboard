import { useMemo, useState } from 'react'
import { NavHeader } from '../../components/NavHeader'
import { SelectInput } from '../../components/SelectInput'
import { CardWalletHero } from './components/CardWalletHero'
import { MessageHero } from './components/MessageHero'
import { PieChartHero } from './components/PieChartHero'
import { HistoryBox } from './components/HistoryBox'
import { currentMonth, currentYear } from '../../constants/yearAndMonth'
import { Container, ContentHero } from './styles'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'
import HappyIcon from '../../assets/happy.svg'
import SadIcon from '../../assets/sad.svg'
import GrinningIcon from '../../assets/grinning.svg'

export const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(currentMonth)
  const [yearSelected, setYearSelected] = useState<number>(currentYear)

  const YEARS = useMemo(() => {
    let uniqueYears: number[] = []
    const dataList = [...expenses, ...gains]

    dataList.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map(year => {
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

    gains.forEach(item => {
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

    expenses.forEach(item => {
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

  const relationExpensesAndGains = useMemo(() => {
    const all = allGains + allExpenses

    const percentGains = (allGains / all) * 100
    const percentExpenses = (allExpenses / all) * 100

    const data = [
      {
        name: 'Entradas',
        value: allGains,
        percent: Number(percentGains.toFixed(1)),
        color: '#F7931B',
      },
      {
        name: 'Saídas',
        value: allExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: '#E44C4E',
      },
    ]

    return data
  }, [allGains, allExpenses])

  const historyDataGraphics = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountEntry = 0
        gains.forEach(gain => {
          const date = new Date(gain.date)
          const gainMonth = date.getMonth()
          const gainYear = date.getFullYear()

          if (gainMonth === month && gainYear === yearSelected) {
            try {
              amountEntry += Number(gain.amount)
            } catch (err) {
              throw new Error(`Amount entry is invalid: ${err}`)
            }
          }
        })

        let amountOutput = 0
        expenses.forEach(expense => {
          const date = new Date(expense.date)
          const expenseMonth = date.getMonth()
          const expenseYear = date.getFullYear()

          if (expenseMonth === month && expenseYear === yearSelected) {
            try {
              amountOutput += Number(expense.amount)
            } catch (err) {
              throw new Error(`Amount output is invalid: ${err}`)
            }
          }
        })

        return {
          monthNumber: month,
          month: listOfMonths[month].slice(0, 3),
          amountEntry,
          amountOutput,
        }
      })
      .filter(item => {
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()

        const filteredYears =
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear

        return filteredYears
      })
  }, [yearSelected])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      console.error('Invalid Month value')
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
          onHandleChange={e => handleMonthSelected(e.target.value)}
        />
        <SelectInput
          options={YEARS}
          defaultValue={yearSelected}
          onHandleChange={e => handleYearSelected(e.target.value)}
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

        <PieChartHero data={relationExpensesAndGains} />

        <HistoryBox
          data={historyDataGraphics}
          lineColorAmountEntry="#F7931B"
          lineColorAmountOutput="#E44C4E"
        />
      </ContentHero>
    </Container>
  )
}
