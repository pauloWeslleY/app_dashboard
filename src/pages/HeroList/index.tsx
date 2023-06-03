import { useMemo, useState, useEffect } from 'react'
import { NavHeader } from '../../components/NavHeader'
import { SelectInput } from '../../components/SelectInput'

import { Container, HeroListContent, Filters } from './styles'
import { HistoryFinanceCard } from '../../components/HistoryOutFinanceCard'
import { formatValueCurrency } from '../../utils/formatValueCurrency'
import { dateFormat } from '../../utils/dateFormat'

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

interface IRouteParamsProps {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  id: string
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

export const HeroList: React.FC<IRouteParamsProps> = ({ match }) => {
  const months = new Date().getMonth()
  const years = new Date().getFullYear()
  const currentMonth = String(months + 1)
  const currentYear = String(years)
  const [monthSelected, setMonthSelected] = useState<string>(currentMonth)
  const [isData, setIsData] = useState<IData[]>([])
  const [yearSelected, setYearSelected] = useState<string>(currentYear)
  const { type } = match.params

  const head = useMemo(() => {
    return type === 'entry-balance'
      ? {
          title: 'Entradas',
          lineColor: '#4E41F0',
        }
      : {
          title: 'Saídas',
          lineColor: '#E44C4E',
        }
  }, [type])

  const dataList = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type])

  const MONTHS = [
    { value: 1, label: 'Janeiro' },
    { value: 5, label: 'Maio' },
    { value: 7, label: 'Julho' },
    { value: 6, label: 'Junho' },
  ]

  const YEARS = [
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2023, label: 2023 },
  ]

  useEffect(() => {
    const dateFiltered = dataList.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === monthSelected && year === yearSelected
    })

    const response = dateFiltered.map((item) => {
      return {
        id: String(new Date().getTime()) + item.amount,
        description: item.description,
        amountFormatted: formatValueCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: dateFormat(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      }
    })
    setIsData(response)
  }, [dataList, monthSelected, yearSelected, isData.length])

  return (
    <Container>
      <NavHeader title={head.title} lineColor={head.lineColor}>
        <SelectInput
          options={MONTHS}
          defaultValue={monthSelected}
          onHandleChange={(e) => setMonthSelected(e.target.value)}
        />
        <SelectInput
          options={YEARS}
          defaultValue={yearSelected}
          onHandleChange={(e) => setYearSelected(e.target.value)}
        />
      </NavHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <HeroListContent>
        {isData.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
            tagColor={item.tagColor}
          />
        ))}
      </HeroListContent>
    </Container>
  )
}
