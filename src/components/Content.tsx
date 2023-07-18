'use client'
import dynamic from 'next/dynamic'
import Form from './Form'
import { QRProvider } from '@/context/QRContext'

function Content() {
	const QR = dynamic(() => import('@/components/QR'), {
		loading: () => <p>Loading...</p>,
		ssr: false
	})
	return (
		<QRProvider>
			<div className="flex justify-center flex-col gap-4 lg:flex-row-reverse items-center">
				<QR />
				<Form />
			</div>
		</QRProvider>
	)
}

export default Content
