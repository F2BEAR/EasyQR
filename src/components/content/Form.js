import {
  updateQrData,
  updateQrImg,
  updateQrColor,
  updateQrType
} from '../utils/qr'

function Form() {
  return (
    <form className="bg-secondary rounded-lg shadow-lg p-10 h-2xl w-xl border-white m-3">
      <div className="rounded-lg text-center m-3 w-80 h-16 p-6">
        <label for="dataInput">Data</label>

        <input
          type="text"
          onchange="updateQrData();"
          className="rounded-md p-2 bg-tertiary text-center"
          name="dataInput"
          id="dataInput"
          placeholder="https://example.com"
          required
        />
      </div>

      <div className="rounded-lg text-center m-3 w-80 h-16 p-6">
        <label for="imageInput">Image</label>

        <input
          type="file"
          onchange="updateQrImg();"
          className="rounded-md p-2 bg-tertiary text-center"
          name="imageInput"
          id="imageInput"
          accept="image/*"
        />
      </div>

      <div className="rounded-lg text-center m-3 w-80 h-16 p-6">
        <label for="colorInput">Color</label>

        <input
          type="color"
          onchange="updateQrColor();"
          className="rounded-md p-2 bg-tertiary text-center"
          name="colorInput"
          id="colorInput"
        />
      </div>

      <div className="rounded-lg text-center m-3 w-80 h-16 p-6">
        <label for="typeInput">QR Type</label>

        <select
          name="typeInput"
          className="rounded-md p-2 bg-tertiary text-center"
          id="typeInput"
          onchange="updateQrType();"
        >
          <option value="square">Square</option>

          <option value="rounded">Rounded</option>

          <option value="dots">Dots</option>
        </select>
      </div>

      <div className="rounded-lg text-center m-3 w-80 h-16 p-6">
        <label for="typeInput">Download Type</label>

        <select
          name="typeInput"
          className="rounded-md p-2 bg-tertiary text-center"
          id="typeInput"
          onchange="updateQrType();"
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
