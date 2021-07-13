import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import qrCode from '../utils/qr.config'

const QR = () => {
  const extension = useSelector((state) => state.extension)

  const ref = useRef(null)

  useEffect(() => {
    qrCode.append(ref.current)
  })

  const onDownloadClick = () => {
    qrCode.download({
      extension: extension
    })
  }

  return (
    <div className="h-2xl w-xl flex flex-col">
      <div ref={ref} className="border-2 border-white" />
      <button
        className="p-3 m-3 bg-secondary text-primary hover:text-accent hover:bg-button rounded-lg"
        onClick={onDownloadClick}
      >
        Download
      </button>
    </div>
  )
}

export default QR
