import styled, { createGlobalStyle } from 'styled-components'

export default function Layout({ children }) {
  return (
    <PageWrapper>
      <GlobalStyle />
      {children}
    </PageWrapper>
  )
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,900&display=swap');
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background-color: #fff;
    color: #0f0f10;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    text-size-adjust: 100%;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  button, input, select {
    font-family: 'Lato', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
`

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto 50px;
`
