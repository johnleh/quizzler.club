import { NextAuthProvider } from '@/app/providers/nextAuthProvider'
import './globals.css'
import siteConstants from "@/utils/globals/siteConstants"

export const metadata = {
  title: siteConstants.title,
  description: siteConstants.description,
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="#" />
      </head>
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
