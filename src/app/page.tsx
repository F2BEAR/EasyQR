import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<main className="w-full min-h-screen text-purple-100 p-12 flex justify-center content-center">
			<section className="flex flex-col justify-between gap-8">
				<Header />
				<Content />
				<Footer />
			</section>
		</main>
	)
}
