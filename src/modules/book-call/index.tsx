'use client'

import { PreQualForm } from './components/PreQualForm'
import { QualificationResult } from './components/QualificationResult'
import { usePreQualForm } from './hooks/usePreQualForm'

const PreQualPage = () => {
  const hookData = usePreQualForm()

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container-main">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-text-primary mb-2">Book Your</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Discovery Call
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary">
            Tell us about your project. We&apos;ll let you know if we&apos;re a good fit.
            <br />
            <span className="text-text-muted text-base">
              (This takes 60 seconds. No commitment required.)
            </span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!hookData.result ? (
            <PreQualForm hookData={hookData} />
          ) : (
            <QualificationResult
              result={hookData.result}
              formData={hookData.formData}
              onReset={hookData.reset}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PreQualPage
