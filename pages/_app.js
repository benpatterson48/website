import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import Header from '../components/Header'

const theme = {
  font: {
    primary: '-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </ThemeProvider>
    )
  }
}
