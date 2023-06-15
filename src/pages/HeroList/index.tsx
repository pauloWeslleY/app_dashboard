import { useMemo, useState, useEffect } from 'react'
import { NavHeader } from '../../components/NavHeader'
import { SelectInput } from '../../components/SelectInput'
import { HistoryFinanceCard } from './components/HistoryOutFinanceCard'
import { formatValueCurrency } from '../../utils/formatValueCurrency'
import { dateFormat } from '../../utils/dateFormat'
import { Container, HeroListContent, Filters } from './styles'

import listOfMonths from '../../utils/months'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import { currentMonth, currentYear } from '../../constants/yearAndMonth'

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
  const [monthSelected, setMonthSelected] = useState<number>(currentMonth)
  const [yearSelected, setYearSelected] = useState<number>(currentYear)
  const [isData, setIsData] = useState<IData[]>([])
  const [selectedFilterFrequency, setSelectedFilterFrequency] = useState<
    string[]
  >(['recorrente', 'eventual'])
  const { type: paramsType } = match.params

  const pageData = useMemo(() => {
    return paramsType === 'entry-balance'
      ? {
          title: 'Entradas',
          lineColor: '#4E41F0',
          data: gains,
        }
      : {
          title: 'Saídas',
          lineColor: '#E44C4E',
          data: expenses,
        }
  }, [paramsType])
  const { data } = pageData

  const MONTHS = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, [])

  const YEARS = useMemo(() => {
    let uniqueYears: number[] = []

    data.forEach(item => {
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
  }, [data])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFilterFrequency.findIndex(
      item => item === frequency
    )

    if (alreadySelected >= 0) {
      const filtered = selectedFilterFrequency.filter(
        item => item !== frequency
      )
      setSelectedFilterFrequency(filtered)
    } else {
      setSelectedFilterFrequency(prev => [...prev, frequency])
    }
  }

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

  const filterFrequency = (params: string) => {
    return selectedFilterFrequency.includes(params) && 'tag-actived'
  }

  useEffect(() => {
    const dateFiltered = data.filter(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFilterFrequency.includes(item.frequency)
      )
    })

    const response = dateFiltered.map(item => {
      return {
        id: crypto.randomUUID(),
        description: item.description,
        amountFormatted: formatValueCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: dateFormat(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      }
    })
    setIsData(response)
  }, [
    data,
    monthSelected,
    yearSelected,
    isData.length,
    selectedFilterFrequency,
  ])

  return (
    <Container>
      <NavHeader title={pageData.title} lineColor={pageData.lineColor}>
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

      <Filters>
        <button
          type="button"
          className={`
            tag-filter tag-filter-recurrent
            ${filterFrequency('recorrente')}
          `}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`
            tag-filter tag-filter-eventual
            ${filterFrequency('eventual')}
          `}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>

      <HeroListContent>
        {isData.map(item => (
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
