import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'EasyQR',
	description: 'A simple QR code generator',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
	manifest: '/manifest.json',
	keywords: ['QR', 'Code', 'Generator'],
	creator: 'F2BEAR',
	authors: [{ name: 'F2BEAR', url: 'https://github.com/F2BEAR' }],
	openGraph: {
		type: 'website',
		title: 'EasyQR',
		description: 'A simple QR code generator',
		siteName: 'EasyQR',
		images: [
			{
				url: '/logo192.png',
				width: 192,
				height: 192,
				alt: 'Logo'
			},
			{
				url: '/logo512.png',
				width: 512,
				height: 512,
				alt: 'Logo'
			}
		],
		locale: 'en_US'
	},
	robots: {
		index: true,
		follow: true,
		nocache: true
	},
	twitter: {
		card: 'summary',
		title: 'EasyQR',
		description: 'A simple QR code generator',
		creator: '@F2BEAR',
		images: ['/logo512.png']
	},
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
