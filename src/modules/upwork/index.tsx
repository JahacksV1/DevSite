'use client'

import {
  UpworkCapabilities,
  UpworkHeader,
  UpworkHowWeWork,
} from './components/UpworkSections'
import { UpworkProjectGrid } from './components/UpworkProjectGrid'

export const UpworkPortfolio = () => {
  return (
    <div className="min-h-screen">
      <UpworkHeader />
      <UpworkProjectGrid />
      <UpworkCapabilities />
      <UpworkHowWeWork />
    </div>
  )
}
