"use client"
import React from 'react'
import About from '../components/Section/About'
import ReactPageScroller, { SectionContainer } from 'react-page-scroller'
const Home = () => {
  return (
    <div>
      <ReactPageScroller>
        <SectionContainer height={85}>
          <About />
        </SectionContainer>
        <SectionContainer height={85}>
          page 2
        </SectionContainer>
      </ReactPageScroller>
    </div>
  )
}

export default Home

