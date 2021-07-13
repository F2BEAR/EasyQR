import QRCodeStyling from 'qr-code-styling'
import store from '../../redux/store'

let states = store.getState()

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  type: 'svg',
  data: states.url,
  image: states.image,
  dotsOptions: {
    color: states.color,
    type: states.type
  },
  backgroundOptions: {
    color: states.background
  }
})

export default qrCode
