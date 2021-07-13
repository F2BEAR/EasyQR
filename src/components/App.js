import Home from './content/Home'
import Header from './content/Header'

function App() {
  return (
    <div className="dark w-screen h-full md:h-screen bg-primary text-primary flex flex-col items-center">
      <Header />
      <Home />
    </div>
  )
}

export default App
