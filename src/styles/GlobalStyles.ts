import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.tertiary};
    }
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
