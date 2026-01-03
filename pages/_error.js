import React from 'react'
import styled from 'styled-components'

export default function Error({ statusCode }) {
  return (
    <section>
      {statusCode == 404
        ? (
          <ErrorWrapper>
            <h1>Oops, we couldn't find that page.</h1>
            <p>Looks like you went to a page that currently isn't available, try navigating back <a href="/">home</a> to find what you are looking for.</p>
          </ErrorWrapper>
        )
        : 'An error occurred on client'}
    </section>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

const ErrorWrapper = styled.div`
  position: relative;
  width: auto;
  max-width: 720px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.16rem;
    line-height: 1.4;

    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
  }

  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }

  a {
    color: #4A90E2;
    line-height: 1.5;
    font-size: 1.1rem;
    text-decoration: none;
  }

`
