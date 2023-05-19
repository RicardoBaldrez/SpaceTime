import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJam = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW SpaceTime',
  description: 'A time capsule built with React, Next.js, TailwindCSS and TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJam.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
