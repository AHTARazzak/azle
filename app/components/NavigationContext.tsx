'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type NavigationContextType = {
  activeSection: string
  activeProjectSubsection: string
  setActiveSection: (section: string) => void
  setActiveProjectSubsection: (subsection: string) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('PROJECTS')
  const [activeProjectSubsection, setActiveProjectSubsection] = useState('Graduate research')

  return (
    <NavigationContext.Provider value={{ activeSection, activeProjectSubsection, setActiveSection, setActiveProjectSubsection }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}