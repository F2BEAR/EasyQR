import Form from './Form'
import QR from './QR'

function Home() {
  return (
    <div className="content w-9/12 m-12 flex justify-center flex-row items-center">
      <Form />
      <QR />
    </div>
  )
}

export default Home
