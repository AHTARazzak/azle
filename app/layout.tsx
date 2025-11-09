import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { NavigationProvider } from './components/NavigationContext'

export const metadata: Metadata = {
  title: 'ANNA ZOE LUNA EBERLE',
  description: 'Portfolio of ANNA ZOE LUNA EBERLE',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationProvider>
          <Sidebar />
          <MainContent />
        </NavigationProvider>
      </body>
    </html>
  )
}