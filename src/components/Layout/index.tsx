import { ReactNode } from 'react'
import { MainHeader } from '../MainHeader'
import { Aside } from '../Aside'
import { ContentHero } from '../ContentHero'

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
