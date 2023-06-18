import './globals.css'
import Head from 'next/head';
import Header from '../components/Header.js'
import Rodape from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Renato Rodas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ backgroundColor: "#f4f4f4" }}>
        <Header />
        {children}
        <Rodape />
      </body>
    </html>
  )
}