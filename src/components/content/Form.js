import qrCode from '../utils/qr.config'
import {
  updateData,
  updateImage,
  updateColor,
  updateType,
  updateBackground,
  updateExtension
} from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'

function Form() {
  const dispatch = useDispatch()
  const updateQrData = (value) => {
    if (value === '' || value === null || value === undefined) {
      value = 'https://github.com/F2BEAR'
    }
    dispatch(updateData(value))
    qrCode.update({
      data: value
    })
  }

  const updateQrImg = (files) => {
    let newQrImage = URL.createObjectURL(files)
    dispatch(updateImage(newQrImage))
    qrCode.update({
      image: newQrImage
    })
  }

  const updateQrColor = (value) => {
    dispatch(updateColor(value))
    qrCode.update({
      dotsOptions: {
        color: value
      }
    })
  }

  const updateQrBackground = (value) => {
    dispatch(updateBackground(value))
    qrCode.update({
      backgroundOptions: {
        color: value
      }
    })
  }

  const updateQrType = (value) => {
    dispatch(updateType(value))
    qrCode.update({
      dotsOptions: {
        type: value
      }
    })
  }

  const updateQrExt = (value) => {
    dispatch(updateExtension(value))
  }

  return (
    <form className="rounded-lg shadow-lg p-10 h-2xl w-max m-3 flex flex-col justify-center items-center bg-secondary">
      <div className="rounded-lg flex flex-col items-center text-center m-3 w-80">
        <label htmlFor="dataInput">Data</label>

        <input
          type="text"
          className="rounded-md p-2 bg-tertiary text-center"
          name="urlInput"
          onChange={(e) => updateQrData(e.target.value)}
          id="urlInput"
          placeholder="https://example.com"
          required
        />
      </div>

      <div className="rounded-lg flex flex-col items-center text-center m-3 w-80">
        <label htmlFor="imageInput">Image</label>

        <input
          type="file"
          onChange={(e) => updateQrImg(e.target.files[0])}
          className="rounded-md p-2 bg-tertiary text-center"
          name="imageInput"
          id="imageInput"
          accept="image/*"
        />
      </div>

      <div className="rounded-lg flex flex-col items-center text-center m-3 w-80">
        <label htmlFor="colorInput">Color</label>

        <input
          type="color"
          onChange={(e) => updateQrColor(e.target.value)}
          className="rounded-md bg-tertiary text-center"
          name="colorInput"
          id="colorInput"
        />
      </div>

      <div className="rounded-lg flex flex-col items-center text-center m-3 w-80">
        <label htmlFor="BackgroundColorInput">Background</label>

        <input
          type="color"
          onChange={(e) => updateQrBackground(e.target.value)}
          className="rounded-md bg-tertiary text-center"
          name="BackgroundColorInput"
          id="BackgroundColorInput"
        />
      </div>

      <div className="rounded-lg flex flex-col items-center text-center m-3 w-80">
        <label htmlFor="typeInput">QR Type</label>

        <select
          name="typeInput"
          className="rounded-md p-2 bg-tertiary text-center"
          id="typeInput"
          onChange={(e) => updateQrType(e.target.value)}
        >
          <option value="square">Square</option>

          <option value="rounded">Rounded</option>

          <option value="dots">Dots</option>
        </select>
      </div>

      <div className="rounded-lg flex flex-col items-center text-center m-3 w-80">
        <label htmlFor="extInput">Download Type</label>

        <select
          name="extInput"
          className="rounded-md p-2 bg-tertiary text-center"
          id="extInput"
          onChange={(e) => updateQrExt(e.target.value)}
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
          <option value="svg">SVG</option>
        </select>
      </div>
    </form>
  )
}

export default Form
