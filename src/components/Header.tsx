import Image from 'next/image'
export default function Header() {
	return (
		<header className="w-full flex flex-row justify-center lg:justify-start items-center text-center gap-2 lg:mx-3">
			<Image
				src="/easyqr.svg"
				alt="Logo"
				width={180}
				height={37}
				priority
				className="w-7 h-7"
			/>
			<h1 className="text-4xl font-bold">EasyQR</h1>
		</header>
	)
}
