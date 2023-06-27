import { ReactNode } from 'react'
import { MainHeader } from '../../components/MainHeader'
import { Aside } from '../../components/Aside'
import { ContentHero } from '../../components/ContentHero'

import { Grid } from './styles'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Grid>
    <MainHeader />
    <Aside />
    <ContentHero>{children}</ContentHero>
  </Grid>
)
