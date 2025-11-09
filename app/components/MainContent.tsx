'use client'

import { useNavigation } from './NavigationContext'
import Projects from '../projects/page'
import About from '../about/page'
import Cloud from '../cloud/page'

const SectionHeader = ({ title, left }: { title: string, left: string }) => (
  <div className="fixed top-0 z-10 bg-white w-full" style={{ left, right: 0 }}>
    <div className="p-6 pt-12 pb-0">
      <h1 className="text-base font-bold text-gray-900">{title}</h1>
      <div className="border-b border-gray-300 mx-[-24px]"></div>
    </div>
  </div>
)

export function MainContent() {
  const { activeSection, activeProjectSubsection } = useNavigation()
  const showSubNav = activeSection === 'PROJECTS'

  const leftOffset = showSubNav ? '28rem' : '12rem'
  const contentWidth = showSubNav ? 'calc(100vw - 28rem)' : 'calc(100vw - 12rem)'

  const renderContent = () => {
    switch (activeSection) {
      case 'PROJECTS':
        return <Projects />
      case 'ABOUT':
        return <About />
      case 'CLOUD':
        return <Cloud />
      default:
        return <Projects />
    }
  }

  const hasHeader = activeSection === 'ABOUT' || (activeSection === 'PROJECTS' && activeProjectSubsection) || activeSection === 'CLOUD'

  return (
    <div 
      className="fixed top-0 h-full overflow-y-auto" 
      style={{ left: leftOffset, width: contentWidth }}
    >
      {activeSection === 'ABOUT' && (
        <SectionHeader title="ABOUT" left={leftOffset} />
      )}
      {activeSection === 'PROJECTS' && activeProjectSubsection && (
        <SectionHeader title={activeProjectSubsection} left="28rem" />
      )}
      {activeSection === 'CLOUD' && (
        <SectionHeader title="CLOUD" left={leftOffset} />
      )}
      <div className={`p-6 ${hasHeader ? 'pt-20' : ''}`}>
        {renderContent()}
      </div>
    </div>
  )
}