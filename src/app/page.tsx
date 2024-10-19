"use client"
import React from 'react'
import About from '../components/Section/About'
import ReactPageScroller, { SectionContainer } from 'react-page-scroller'
import Experience from '@/components/Section/Experience'

const Home = () => {
  return (
    <div>
      <ReactPageScroller>
        <SectionContainer height={100}>
          <About />
        </SectionContainer>
        <SectionContainer height={100}>
          <Experience />
        </SectionContainer>
        <SectionContainer height={100}>
          page 3
        </SectionContainer>
      </ReactPageScroller>
    </div>
  )
}

export default Home

