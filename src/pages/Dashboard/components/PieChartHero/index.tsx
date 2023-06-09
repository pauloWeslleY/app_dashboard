import { PieChart, Pie, ResponsiveContainer } from 'recharts'

import {
  Container,
  SideRight,
  SideLeft,
  Legend,
  LegendsContainer,
} from './styles'

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
]

const PieChartHero: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendsContainer>
        <Legend color="#F7931B">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendsContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            labelLine={false}
            dataKey="percent"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            labelLine={false}
            dataKey="percent"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
)

export { PieChartHero }
