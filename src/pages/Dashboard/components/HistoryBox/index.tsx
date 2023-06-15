import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

import {
  Container,
  ChartGraphicContainer,
  Header,
  LegendContainer,
  Legend,
} from './styles'
import { formatValueCurrency } from '../../../../utils/formatValueCurrency'

interface HistoryBoxProps {
  data: {
    month: string
    amountEntry: number
    amountOutput: number
  }[]
  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

const HistoryBox: React.FC<HistoryBoxProps> = props => {
  const { data, lineColorAmountEntry, lineColorAmountOutput } = props

  return (
    <Container>
      <Header>
        <h2>Histórico de saldo</h2>

        <LegendContainer>
          <Legend color={lineColorAmountEntry}>
            <div></div>
            <span>Entradas</span>
          </Legend>
          <Legend color={lineColorAmountOutput}>
            <div></div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </Header>

      <ChartGraphicContainer>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
            <XAxis dataKey="month" stroke="#cecece" />
            <Line
              type="monotone"
              dataKey="amountEntry"
              name="Entradas"
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="amountOutput"
              name="Saídas"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 5 }}
            />

            <Tooltip formatter={value => formatValueCurrency(Number(value))} />
          </LineChart>
        </ResponsiveContainer>
      </ChartGraphicContainer>
    </Container>
  )
}

export { HistoryBox }
