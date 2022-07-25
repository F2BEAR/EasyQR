import Form from './Form'
import QR from './QR'

function Home() {
  return (
    <div className="flex justify-center flex-col gap-4 lg:flex-row-reverse items-center">
      <QR />
      <Form />
    </div>
  )
}

export default Home
