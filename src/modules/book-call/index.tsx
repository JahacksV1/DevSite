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
            <span className="block text-text-primary mb-2">Start Your</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Milestone Intake
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary">
            Share your project context and goals. We&apos;ll recommend the
            clearest next milestone.
            <br />
            <span className="text-text-muted text-base">
              (This takes about 60 seconds. No commitment required.)
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
