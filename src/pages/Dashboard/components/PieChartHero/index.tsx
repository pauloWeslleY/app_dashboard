import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import {
  Container,
  SideRight,
  SideLeft,
  Legend,
  LegendsContainer,
} from './styles'

interface IPieChartHeroProps {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

const PieChartHero: React.FC<IPieChartHeroProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
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
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="percent">
            {data.map((props, i) => (
              <Cell key={i} fill={props.color}>
                <div>{props.percent}</div>
                <span>{props.name}</span>
              </Cell>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
)

export { PieChartHero }
