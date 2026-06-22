import { useState, useCallback } from 'react'
import type { PreQualData, QualificationResult } from '@/types/preQual'
import { calculateQualification } from '../lib/qualification'

const INITIAL_FORM_DATA: PreQualData = {
  name: '',
  email: '',
  projectDescription: '',
  budget: '8k-20k',
  pricingModel: 'fixed',
  timeline: '2-4-weeks',
  previousAttempts: [],
}

export const usePreQualForm = () => {
  const [formData, setFormData] = useState<PreQualData>(INITIAL_FORM_DATA)
  const [result, setResult] = useState<QualificationResult | null>(null)
  const [errors, setErrors] = useState<
    Partial<Record<keyof PreQualData, string>>
  >({})

  const handleSubmit = useCallback(() => {
    const newErrors: Partial<Record<keyof PreQualData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project'
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Please provide at least 20 characters'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return false
    }

    const qualificationResult = calculateQualification(formData)
    setResult(qualificationResult)
    return true
  }, [formData])

  const updateField = useCallback(
    <K extends keyof PreQualData>(field: K, value: PreQualData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    },
    []
  )

  const reset = useCallback(() => {
    setFormData(INITIAL_FORM_DATA)
    setResult(null)
    setErrors({})
  }, [])

  return {
    formData,
    errors,
    result,
    updateField,
    handleSubmit,
    reset,
  }
}
