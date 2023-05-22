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
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="twitter:description"
        content="Deliver your todos to your followers with a single link"
      />

      <head />
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
