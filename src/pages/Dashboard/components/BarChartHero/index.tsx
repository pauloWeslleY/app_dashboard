import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'

import {
  Container,
  SideLeft,
  SideRight,
  LegendsContainer,
  Legend,
} from './styles'
import { formatValueCurrency } from '../../../../utils/formatValueCurrency'

interface IBarChartProps {
  title: string
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

export const BarChartHero: React.FC<IBarChartProps> = ({ title, data }) => (
  <Container>
    <SideLeft>
      <h2>{title}</h2>
      <LegendsContainer>
        {data.map((props, i) => (
          <Legend key={i} color={props.color}>
            <div>{props.percent}%</div>
            <span>{props.name}</span>
          </Legend>
        ))}
      </LegendsContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {data.map(indicator => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Bar>
          <Tooltip
            formatter={value => formatValueCurrency(Number(value))}
            cursor={{ fill: 'none' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
)
