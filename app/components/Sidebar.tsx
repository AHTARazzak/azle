'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useNavigation } from './NavigationContext'

const ArrowIcon = ({ isActive }: { isActive: boolean }) => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const NavButton = ({ 
  children, 
  isActive, 
  onClick 
}: { 
  children: React.ReactNode
  isActive: boolean
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className={`block text-gray-700 hover:text-gray-900 flex items-center w-full text-left ${isActive ? 'font-semibold' : ''}`}
  >
    {children}
    {isActive && <ArrowIcon isActive={true} />}
  </button>
)

const SocialLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block text-gray-700 hover:text-gray-900">
    {children}
  </a>
)

export function Sidebar() {
  const pathname = usePathname()
  const { activeSection, activeProjectSubsection, setActiveSection, setActiveProjectSubsection } = useNavigation()
  const [expandedSections, setExpandedSections] = useState({
    documentation: true,
    presentation: false,
    objects: false
  })

  const showSubNav = activeSection === 'PROJECTS'

  useEffect(() => {
    if (pathname.startsWith('/projects/documentation')) {
      setExpandedSections(prev => ({ ...prev, documentation: true }))
    }
  }, [pathname])

  const toggleExpanded = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const projectItems = {
    documentation: ['Graduate research', 'Graduate collection'],
    presentation: ['Saurer Halbraum', 'RESORT', 'ESTRICH IM KELLER'],
    objects: ['Flechtung', 'Ärmeltasche', 'Hauchtasche', 'Teig', 'Finken']
  }

  return (
    <>
      {/* Main Sidebar */}
      <div className="fixed left-0 top-0 h-full w-48 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-8">
            <button onClick={() => setActiveSection('PROJECTS')}>
              <h1 className="text-base font-bold text-gray-900 hover:text-gray-700 transition-colors text-left">
                ANNA ZOE<br />LUNA EBERLE
              </h1>
            </button>
            <div className="border-b border-gray-300 mx-[-24px]"></div>
          </div>
          
          <nav className="space-y-4 flex-1">
            <NavButton 
              isActive={activeSection === 'PROJECTS'} 
              onClick={() => setActiveSection('PROJECTS')}
            >
              PROJECTS
            </NavButton>
            <NavButton 
              isActive={activeSection === 'ABOUT'} 
              onClick={() => setActiveSection('ABOUT')}
            >
              ABOUT
            </NavButton>
            <NavButton 
              isActive={activeSection === 'CLOUD'} 
              onClick={() => setActiveSection('CLOUD')}
            >
              CLOUD
            </NavButton>
          </nav>
          
          <div className="mt-auto space-y-4">
            <SocialLink href="https://instagram.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://vimeo.com">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.24 1.807 7.08 1.807c1.46 0 2.966 2.212 4.509 6.632.898 2.554 1.467 4.139 1.699 4.746.398.962.64 1.442.725 1.438.145 0 .323-.065.534-.194.544-.337 1.91-1.14 4.099-2.402 1.697-.983 2.818-1.826 3.364-2.531.31-.384.54-.969.69-1.755.21-1.138.272-1.818.187-2.043-.37-.836-1.143-1.372-2.332-1.605-.93-.168-1.973-.25-3.127-.25-2.28 0-4.016.496-6.22 1.487C6.585 3.784 4.83 4.821 3.236 5.838L1.948 4.583c1.406-1.276 3.394-2.328 5.962-3.152 2.126-.68 4.005-.994 5.628-.94 1.411.06 2.742.343 3.993.852 1.464.596 2.473 1.435 3.027 2.512.225.433.406.948.542 1.544.132.596.179 1.1.139 1.509z"/>
              </svg>
            </SocialLink>
            <SocialLink href="mailto:AZLEBOB@GMAIL.COM">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

      {/* Sub Sidebar */}
      {showSubNav && (
        <div className="fixed top-0 left-48 h-full w-64 bg-gray-50 border-r border-gray-200 p-6 pt-12">
          <div className="mb-8">
            <h2 className="text-base font-bold text-gray-900">PROJECTS</h2>
            <div className="border-b border-gray-300 mx-[-24px]"></div>
          </div>
          
          <nav className="space-y-4">
            {Object.entries(projectItems).map(([category, items]) => (
              <div key={category}>
                <button
                  onClick={() => toggleExpanded(category as keyof typeof expandedSections)}
                  className={`block text-gray-700 hover:text-gray-900 flex items-center w-full text-left capitalize ${pathname.startsWith(`/projects/${category}`) ? 'font-semibold' : ''}`}
                >
                  {category === 'objects' ? 'Objects & Materials' : category}
                  <svg className={`w-4 h-4 ml-2 transition-transform ${expandedSections[category as keyof typeof expandedSections] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {expandedSections[category as keyof typeof expandedSections] && (
                  <div className="ml-4 mt-2 space-y-2">
                    {items.map((item) => (
                      <button 
                        key={item}
                        onClick={() => { setActiveSection('PROJECTS'); setActiveProjectSubsection(item); }}
                        className={`block text-gray-600 hover:text-gray-900 ${activeSection === 'PROJECTS' && activeProjectSubsection === item ? 'font-semibold' : ''}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}