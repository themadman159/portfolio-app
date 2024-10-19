"use client"
import React from 'react'
import About from '../components/Section/About'
import ReactPageScroller, { SectionContainer } from 'react-page-scroller'
import Experience from '@/components/Section/Experience'
import SkillSection from '@/components/Section/Skill'

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
          <SkillSection />
        </SectionContainer>
      </ReactPageScroller>
    </div>
  )
}

export default Home

