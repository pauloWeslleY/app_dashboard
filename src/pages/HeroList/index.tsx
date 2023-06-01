import React, { useMemo } from 'react'
import { NavHeader } from '../../components/NavHeader'
import { SelectInput } from '../../components/SelectInput'

import { Container, HeroListContent, Filters } from './styles'
import { HistoryFinanceCard } from '../../components/HistoryOutFinanceCard'

interface IRouteParamsProps {
  match: {
    params: {
      type: string
    }
  }
}

export const HeroList: React.FC<IRouteParamsProps> = ({ match }) => {
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

  const MONTHS = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
  ]

  const YEARS = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ]

  return (
    <Container>
      <NavHeader title={head.title} lineColor={head.lineColor}>
        <SelectInput options={MONTHS} />
        <SelectInput options={YEARS} />
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
        <HistoryFinanceCard
          title="Conta de Luz"
          subtitle="31/07/2020"
          amount="R$ 170,30"
          tagColor="#4E41F0"
        />
        <HistoryFinanceCard
          title="Conta de Luz"
          subtitle="31/07/2020"
          amount="R$ 170,30"
          tagColor="#E44C4E"
        />
      </HeroListContent>
    </Container>
  )
}
