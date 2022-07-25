import easyQR from '../assets/easyqr.svg'
export default function Header() {
  return (
    <header className="flex flex-row justify-center lg:justify-start items-center text-center gap-2 lg:ml-64 lg:pl-4">
      <img src={easyQR} alt="Logo" className="w-7 h-7" />
      <h1 className="text-4xl font-bold">EasyQR</h1>
    </header>
  )
}
