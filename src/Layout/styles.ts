import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'Aside MainHeader'
    'Aside Main';

  height: 100vh;
  min-width: 325px;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;

    grid-template-areas:
      'MainHeader'
      'Main';
  }
`
