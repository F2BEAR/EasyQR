import Home from './content/Home'
import Header from './content/Header'
import Footer from './content/Footer'

function App() {
  return (
    <div className="dark w-full h-full bg-primary text-primary flex flex-col items-center">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
