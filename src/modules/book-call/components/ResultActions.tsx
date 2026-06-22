import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui'
import { openCalModal } from '@/lib/integrations/cal'
import type { QualificationResult, PreQualData } from '@/types/preQual'

interface ResultActionsProps {
  result: QualificationResult
  formData: PreQualData
  onReset: () => void
}

export const ResultActions = ({
  result,
  formData,
  onReset,
}: ResultActionsProps) => {
  const handleBookCall = () => {
    localStorage.setItem('prequalData', JSON.stringify(formData))
    openCalModal()
  }

  if (result.fit === 'great') {
    return (
      <div className="space-y-4">
        <div className="bg-bg-tertiary border border-primary/20 rounded-lg p-6">
          <h4 className="font-semibold text-text-primary mb-2">
            What happens next:
          </h4>
          <ol className="space-y-2 text-sm text-text-secondary">
            <li>1. Book a quick intake call (no pressure, no commitment)</li>
            <li>2. We review your current context and constraints</li>
            <li>3. You get a scoped milestone recommendation</li>
            <li>4. If aligned, we begin with the first deliverable</li>
          </ol>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleBookCall}
        >
          Book Intake Call
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <button
          onClick={onReset}
          className="text-sm text-text-muted hover:text-text-secondary underline mx-auto block"
        >
          Start over
        </button>
      </div>
    )
  }

  if (result.fit === 'possible') {
    return (
      <div className="space-y-4">
        <div className="bg-bg-tertiary border border-warning/20 rounded-lg p-6">
          <h4 className="font-semibold text-text-primary mb-2">
            What we recommend:
          </h4>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>→ Book intake anyway so we can scope accurately</li>
            <li>→ We&apos;ll confirm the safest first milestone</li>
            <li>→ We can suggest alternatives if scope/budget mismatch</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleBookCall}
          >
            Book Intake Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={() =>
              (window.location.href = 'mailto:hello@dayonelabs.io')
            }
          >
            Email Us Instead
            <Mail className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <button
          onClick={onReset}
          className="text-sm text-text-muted hover:text-text-secondary underline mx-auto block"
        >
          Start over
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-bg-tertiary border border-warning/20 rounded-lg p-6">
        <h4 className="font-semibold text-text-primary mb-2">
          Based on your responses, alignment may be limited right now.
        </h4>
        <p className="text-sm text-text-secondary mb-4">
          {formData.budget === 'under-3k' && (
            <>
              Your budget likely supports a very small sprint or advisory pass.
              If you want, we can still discuss narrow scope options.
            </>
          )}
          {formData.timeline === 'exploring' &&
            formData.budget !== 'under-3k' && (
              <>
                You appear to still be in exploration mode. We can revisit once
                you are ready to commit to a concrete first milestone.
              </>
            )}
        </p>
        <div className="pt-4 border-t border-border-subtle">
          <p className="text-sm text-text-primary mb-2">
            <strong>Think we&apos;re wrong?</strong> We might be!
          </p>
          <p className="text-sm text-text-secondary mb-4">
            If you believe we&apos;re a good fit and want to work together,
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() =>
                (window.location.href = 'mailto:hello@dayonelabs.io')
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us Anyway
            </Button>
            <button
              onClick={onReset}
              className="text-sm text-text-muted hover:text-text-secondary underline"
            >
              Or start over
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
