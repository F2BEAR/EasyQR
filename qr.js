qrData = document.getElementById('dataInput');
qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');
qrDownloadType = document.getElementById('downloadAs').value;

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "https://github.com/F2BEAR",
  image: "",
  dotsOptions: { 
    color: "#000",
    type: "square"
  },
});

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};

const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const updateDownloadType = () => {
  newQrDownloadType = qrDownloadType.value;
};

const download = () => qrCode.download(qrDownloadType);

qrCode.append(document.getElementById('canvas'));