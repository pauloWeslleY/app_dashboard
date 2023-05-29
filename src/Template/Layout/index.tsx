import React from 'react'
import { Grid } from './styles'

import { MainHeader } from '../../components/MainHeader'
import { Aside } from '../../components/Aside'
import { Content } from '../../components/Content'

export const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content />
    </Grid>
  )
}
