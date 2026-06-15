import './globals.css'

export const metadata = {
  title: 'PRO - Where Projects Meet Professionals',
  description: 'Learn. Create. Earn. Join the professional network for creative professionals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
