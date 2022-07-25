import { useQR, QR } from '../context/QRContext'

function Form() {
  const { qr, setQR} = useQR()
  const qrTypes: Array<QR['type']> = ['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded']
  const qrExt: Array<QR['extension']> = ['png', 'jpeg', 'webp', 'svg']

  return (
    <form className="rounded-lg p-10 mx-3 gap-4 flex flex-col justify-center items-start md:items-center bg-zinc-800" >
      <div className="flex flex-col md:flex-row justify-start items-start md:items-center text-center gap-2 md:w-80">
        <label htmlFor="dataInput">Data</label>
        <input
          type="text"
          className="rounded-md rounded-b-none p-2 bg-zinc-900 text-center gap-2 border border-x-0 border-t-0 border-b-purple-500"
          name="urlInput"
          id="urlInput"
          onChange={e => {e.target.value !== '' ? setQR({...qr, url: e.target.value}) : setQR({...qr, url: 'https://facu.dev/'})}}
          placeholder="https://example.com"
        />
      </div>

      <div className="flex flex-col gap-2 md:flex-row justify-start items-start md:items-center text-center md:w-80">
        <label htmlFor="imageInput">Image</label>
        <input
          type="file"
          className="text-sm rounded-lg rounded-b-none border border-x-0 border-t-0 border-b-purple-500 cursor-pointer bg-zinc-900"
          name="imageInput"
          onChange={async e => {
            if (e.target.files && e.target.files.length > 0) {
              const render = new FileReader()
              render.readAsDataURL(e.target.files[0])
              render.onload = (_) => {
                typeof render.result === 'string' ? setQR({...qr, img: render.result}) : setQR({...qr, img: ''})
              }
            } else {
              setQR({...qr, img: ''})
            }
            
          }}
          id="imageInput"
          accept="image/*"
        />
      </div>

      <div className="rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center text-center gap-2 md:w-80">
        <label htmlFor="colorInput">Color</label>
        <input
          type="color"
          value={qr.color}
          className="w-16 bg-transparent"
          name="colorInput"
          onChange={e => {setQR({...qr, color: e.target.value})}}
          id="colorInput"
        />
      </div>

      <div className="rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center text-center gap-2 md:w-80">
        <label htmlFor="BackgroundColorInput">Background</label>
        <input
          type="color"
          value={qr.background}
          onChange={e => {setQR({...qr, background: e.target.value})}}
          className="w-16 bg-transparent"
          name="BackgroundColorInput"
          id="BackgroundColorInput"
        />
      </div>

      <div className="rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center text-center gap-2 md:w-80">
        <label htmlFor="typeInput">QR Type</label>
        <select
          name="typeInput"
          className="rounded-lg rounded-b-none bg-zinc-900 text-center gap-2 border border-x-0 border-t-0 border-b-purple-500"
          id="typeInput"
          onChange={e => {
            let val = e.target.value
            qrTypes.map(type => {
              if (type == val) {
                setQR({...qr, type: val})
              }
            })
          }}
          defaultValue={qr.type}
        >
          <option value="square">Square</option>
          <option value="rounded">Rounded</option>
          <option value="dots">Dots</option>
          <option value="classy">Classy</option>
          <option value="classy-rounded">Classy rounded</option>
          <option value="extra-rounded">Extra rounded</option>
        </select>
      </div>

      <div className="rounded-lg flex flex-col md:flex-row justify-start items-start md:items-center text-center gap-2 md:w-80">
        <label htmlFor="extInput">Download Type</label>
        <select
          name="extInput"
          className="rounded-lg rounded-b-none bg-zinc-900 text-center border border-x-0 border-t-0 border-b-purple-500"
          id="extInput"
          onChange={e => {
            let val = e.target.value
            qrExt.map(ext => {
              if (ext == val) {
                setQR({...qr, extension: val})
              }
            })
          }}
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
