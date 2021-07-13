import easyQR from '../easyqr.svg'
function Header() {
  return (
    <div className="bg-primary w-full h-20 flex justify-center items-center flex-row bg-secondary shadow-lg">
      <img src={easyQR} alt="Logo" className="w-7 h-7" />
      <h1 className="text-4xl font-bold m-1">EasyQR</h1>
    </div>
  )
}

export default Header
