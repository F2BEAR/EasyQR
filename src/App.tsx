import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

export default function App() {
	return (
		<div className="w-full min-h-screen text-purple-100 p-12 flex justify-center content-center">
			<div className='flex flex-col justify-between gap-8'>
				<Header />
				<Home />
				<Footer />
			</div>
		</div>
	)
}
