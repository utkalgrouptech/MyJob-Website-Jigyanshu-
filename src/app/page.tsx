import BlogPage from '@/components/Home/Blog'
import Breadcrumb from '@/components/Home/Breadcrumb'
import CareerTips from '@/components/Home/CarrerTips'
import CompanyLogoSlider from '@/components/Home/Companies'
import OurCategory from '@/components/Home/Herosection'
import JobsByLocation from '@/components/Home/JobByLocations'
import JobSection from '@/components/Home/JobSection'
import ProcessCompany from '@/components/Home/ProcessCompany'
import Testimonials from '@/components/Home/Testimonials'
import React from 'react'

export default function Home() {
  return (
    <>
    <Breadcrumb/>
    <OurCategory/>
    <CareerTips/>
    <JobSection/>
    <ProcessCompany/>
    <JobsByLocation/>
    <Testimonials/>
    <BlogPage/>
    <CompanyLogoSlider/>
    </>
  )
}
