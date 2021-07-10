import Form from './Form'
import QR from '../utils/qr'

function Home() {
  return (
    <div className="content w-full flex justify-center flex-row items-center">
      <Form />
      <QR />
    </div>
  )
}

export default Home
