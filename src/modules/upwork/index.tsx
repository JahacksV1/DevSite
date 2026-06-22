'use client'

import {
  UpworkEngineeringStandard,
  UpworkHeader,
  UpworkIntake,
  UpworkEntryPoints,
  UpworkQualityLadder,
  UpworkStack,
  UpworkWorkflows,
} from './components/UpworkSections'
import { UpworkProjectGrid } from './components/UpworkProjectGrid'

export const UpworkPortfolio = () => {
  return (
    <div className="min-h-screen">
      <UpworkHeader />
      <UpworkEntryPoints />
      <UpworkEngineeringStandard />
      <UpworkWorkflows />
      <UpworkStack />
      <UpworkProjectGrid />
      <UpworkQualityLadder />
      <UpworkIntake />
    </div>
  )
}
