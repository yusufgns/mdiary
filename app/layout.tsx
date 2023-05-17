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
      <meta property="og:image" content="https://www.askanonym.com/api/og" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="askanonym.com" />
      <meta property="twitter:url" content="https://www.askanonym.com" />
      <meta name="twitter:title" content="AskAnonym.com - Anonym to You!" />
      <meta
        name="twitter:description"
        content="You can ask question anonymously or register and create a profile for getting questions!"
      />
      <meta
        name="twitter:image"
        content="https://www.askanonym.com/api/og"
      ></meta>

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
