'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Headers from '../components/Headerlans'
import SupabaseProvider from '../components/providers/supabase-provider'
import supabase from '../utils/supabase/supabase-client'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          <SupabaseProvider session={supabase}>
            <ThemeProvider attribute='class'>
              <Headers></Headers>
              {children}
            </ThemeProvider>
          </SupabaseProvider>
        </body>
    </html>
  )
}
