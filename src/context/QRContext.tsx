import { createContext, ReactNode, useContext, useState } from 'react'

type QrProviderProps = {
	children: ReactNode
}

export type QR = {
    url: string,
    img: string,
    color: string,
    type: 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded',
    background: string,
    extension: 'png' | 'jpeg' | 'webp' | 'svg'
}

type QRContext = {
	setQR: (value: QR) => void
	qr: QR
}

const QRContext = createContext({} as QRContext)

export function useQR() {
	return useContext(QRContext)
}

export function QRProvider({ children }: QrProviderProps) {
	const [qr, setNewQR] = useState<QR>({
        url: 'https://facu.dev/',
        img: '',
        color: '#000000',
        type: 'square',
        background: '#ffffff',
        extension: 'png'
    })

	const setQR = (value: QR) => {
		setNewQR((activeQR) => {
			return (activeQR = value)
		})
	}

	return (
		<QRContext.Provider
			value={{
                setQR,
                qr
			}}
		>
			{children}
		</QRContext.Provider>
	)
}