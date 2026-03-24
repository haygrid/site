import './globals.css'

export const metadata = {
  title: 'Haygrid Systems',
  description: 'IT consultation for businesses and homes — built to be reliable, secure, and simple.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/haygrid-logo.svg" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
