'use client'
import { QRProvider } from '@/context/QRContext'
import Form from './Form'
import QR from './QR'

function Content() {
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
