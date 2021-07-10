import React, { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: 'https://github.com/F2BEAR',
  image: '',
  type: 'svg',
  dotsOptions: {
    color: '#000',
    type: 'square'
  }
})

const QR = () => {
  const ref = useRef(null)

  useEffect(() => {
    qrCode.append(ref.current)
  }, [])

  const onDownloadClick = () => {
    qrCode.download({
      extension: 'jpeg'
    })
  }

  return (
    <div className="h-2xl w-xl flex flex-col">
      <div ref={ref} />
      <button
        className="p-3 m-3 bg-secondary text-primary hover:text-accent rounded-lg"
        onClick={onDownloadClick}
      >
        Download
      </button>
    </div>
  )
}

export default QR

// module.exports.updateQrData = () => {
//   newQrData = qrData.value
//   qrCode.update({
//     data: newQrData
//   })
// }

// module.exports.updateQrImg = () => {
//   newQrImage = URL.createObjectURL(qrImage.files[0])
//   console.log(newQrImage)
//   qrCode.update({
//     image: newQrImage
//   })
// }

// module.exports.updateQrColor = () => {
//   newQrColor = qrColor.value
//   qrCode.update({
//     dotsOptions: {
//       color: newQrColor
//     }
//   })
// }

// module.exports.updateQrType = () => {
//   newQrType = qrType.value
//   qrCode.update({
//     dotsOptions: {
//       type: newQrType
//     }
//   })
// }

// module.exports.download = () => qrCode.download('jpeg')
