import { useEffect, useRef } from 'react'
import { useQR } from '../context/QRContext'
import QRCodeStyling from "qr-code-styling"

export const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  imageOptions: {
    crossOrigin: "anonymous"
  },
  margin: 1
})

export default function QR() {
  const { qr } = useQR()
  const ref:any = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, [])

  useEffect(() => {
    qrCode.update({
      data: qr.url,
      image: qr.img,
      dotsOptions: {
          color: qr.color,
          type: qr.type
      },
      backgroundOptions: {color: qr.background}
    })
  }, [qr])

  const onDownloadClick = () => {
    qrCode.download({
      extension: qr.extension
    })
  }

  return (
    <div className='text-center'>
      <div ref={ref} />
      <button
        className="py-3 px-12 mt-6 bg-purple-600 hover:bg-purple-500 hover:drop-shadow-sm rounded-3xl"
        onClick={onDownloadClick}
      >
        Download
      </button>
    </div>
  )
}
