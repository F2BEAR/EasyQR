import Form from './Form'
import QR from './QR'

function Home() {
  return (
    <div className="w-9/12 m-12 flex justify-center flex-col md:flex-row h-auto md:content items-center">
      <QR />
      <Form />
    </div>
  )
}

export default Home
