import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'next/router';

function Header(props) {
  return (
    <HeaderWrapper>
      <div className="header">
        <HeaderNav>
          <a href="/" className={props.router.pathname == '/' ? 'active' : ''}>Home</a>
          <a href="mailto:benjpatt48@gmail.com">Contact</a>
        </HeaderNav>
      </div>
    </HeaderWrapper>
  )
}

export default withRouter(Header)

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  margin: 40px 0px;
  padding: 20px 0px;

  .header {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
      img {
        height: 25px;
        margin-right: 8px;
      }
    }
  }
`

const HeaderNav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 45px;
    margin: 0 15px 0 0;
  }

  a {
    color: inherit;
    opacity: 0.7;
    font-size: 1.25rem;
    margin: 0px 15px 0 0;
    text-decoration: none;
    transition: all 0.2s ease-out 0s;

    &.active {
      color: #4A90E2;
      opacity: 1;
      font-weight: 700;
    }

    &:hover {
      color: #4A90E2;
      opacity: 1;
      transition: all 0.2s ease-out 0s;
    }

    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
  }
`
