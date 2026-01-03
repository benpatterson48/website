import React from 'react'
import styled from 'styled-components'

export default function Homepage() {
  return (
    <Intro>
      <IntroDescription>
        <h1>Ben Patterson</h1>
        <a href="https://github.com/benpatterson48" target="_blank" rel="no-follow"><img src="/static/github.svg" alt="Github Logo Icon" /></a><a href="https://www.linkedin.com/in/benpatterson01/" target="_blank" rel="no-follow"><img src="/static/linkedin.svg" alt="LinkedIn Logo Icon" /></a><a href="https://x.com/bennpatt_" target="_blank" rel="no-follow"><img src="/static/x.svg" alt="X Logo Icon" /></a>
        <p>Hey <span role="img" aria-label="Wave Emoji">👋</span>, I'm a Staff Engineer at Underdog, I have 10 years of experience building apps and consumer first products.</p>
        <p>At heart I'm a product builder, from Legos as a kid to software now, and I love making things that feel useful, thoughtful, and a pleasure to use <span role="img" aria-label="Hammer and Wrench Emoji">🛠️</span>.</p>
        <p>I'm sharing learnings as a young engineering leader navigating this new, wild, AI-led world <span role="img" aria-label="Rocket Emoji">🚀</span>, how to be effective, lead well, and build great products.</p>
      </IntroDescription>
    </Intro>
  )
}

const Intro = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 414px) {
    margin-top: 0;
  }
`
const IntroDescription = styled.div`
  position: relative;
  width: auto;
  max-width: 820px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.16rem;
    line-height: 1.4;

    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
  }

  img {
    height: 25px;
    margin: 0 10px;
    transition: all 200ms ease-in-out;

    &:hover {
      transform: translateY(-3px);
      transition: all 250ms ease-in-out;
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
