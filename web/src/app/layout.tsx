import { Hero } from '@/components/Hero'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJam = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description: 'A time capsule built with React, Next.js, TailwindCSS and TS',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJam.variable} scrollbar-track-black-700 overflow-x-hidden overflow-y-scroll bg-gray-900 font-sans text-gray-100 scrollbar-thin scrollbar-thumb-purple-800 scrollbar-thumb-rounded-md`}
      >
        <main className="flex">
          <div className="fixed flex h-[100vh]  w-[50%] flex-col items-start justify-between border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-10">
            {/** Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            {/** Stripes */}
            <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes pr-2" />

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          <div className="ml-[50%] flex h-[100vh] w-[100vh] flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
