export default function Footer() {
	return (
		<div className="w-full flex flex-row justify-center items-center text-justify">
			<p>
				Made by{' '}
				<a
					href="https://facu.dev"
					rel="noopener noreferrer"
					target="_blank"
					className="text-purple-500"
				>
					@F2BEAR
				</a>{' '}
				, hosted at{' '}
				<a
					href="https://stratus.services"
					rel="noopener noreferrer"
					target="_blank"
					className="text-purple-500"
				>
					Stratus
				</a>
			</p>
		</div>
	)
}
