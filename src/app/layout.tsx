import Styled from '@/lib/styled'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Next Example',
    description: 'DOWON-SEO',
}

export default function RootLayout({children}:typeChildren) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Styled>
                    <div>
                        {children}
                    </div>
                </Styled>
            </body>
        </html>
    )
}
