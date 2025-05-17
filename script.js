function generateQRCode() {
  const qrInput = document.getElementById("qrInput").value;
  const qrCodeArea = document.getElementById("qrCode");
  const downloadBtn = document.getElementById("downloadBtn");

  // Clear previous QR code and reset the button
  qrCodeArea.innerHTML = "";
  downloadBtn.style.display = "none";

  // Check if input is not empty
  if (qrInput.trim() === "") {
    alert("Please enter some text or URL to generate a QR code.");
    return;
  }

  // Generate QR code
  const qrCode = new QRCode(qrCodeArea, {
    text: qrInput,
    width: 256,
    height: 256,
    colorDark: "#ff8a00",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Show the download button
  downloadBtn.style.display = "inline-block";
}

function downloadQRCode() {
  const qrCodeElement = document.querySelector("#qrCode img");

  if (qrCodeElement) {
    // Create a link element to download the image
    const link = document.createElement("a");
    link.href = qrCodeElement.src;
    link.download = "qr_code.png";
    link.click();
  } else {
    alert("No QR code generated yet!");
  }
}
