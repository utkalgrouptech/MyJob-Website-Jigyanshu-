'use client'

import Image from 'next/image'
import { Login, Description, Search, Work, LocationOn } from '@mui/icons-material'
import { processSteps, companies } from '@/utils/home'

export default function ProcessCompany() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'login':
        return <Login className="w-8 h-8 text-blue-600" />
      case 'description':
        return <Description className="w-8 h-8 text-blue-600" />
      case 'search':
        return <Search className="w-8 h-8 text-blue-600" />
      case 'work':
        return <Work className="w-8 h-8 text-blue-600" />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
      {/* Process Section */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-medium mb-3 uppercase tracking-wide">Process</h4>
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Find The Type Of Work You Need And Get Started Instantly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step) => (
            <div key={step.id} className="relative p-8 rounded-xl bg-white border shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-lg bg-blue-100 shadow-sm">
                  {getIcon(step.icon)}
                </div>
                <span className="text-5xl font-light text-gray-300">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section>
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-medium mb-3 uppercase tracking-wide">Employers</h4>
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Top Companies</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Work for the best companies around the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="p-6 rounded-xl bg-white border shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg shadow-md ${company.bgColor}`}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">{company.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">{company.openJobs} Open Jobs</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <LocationOn className="w-5 h-5 mr-2 text-blue-600" />
                {company.location}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
