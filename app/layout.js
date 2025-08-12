import './globals.css'

export const metadata = {
  title: 'Netlify Integration Complete',
  description: 'Our Netlify integration is now fully implemented\!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
