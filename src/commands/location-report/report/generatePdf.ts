import PDFDocument from 'pdfkit'
import fs from 'fs'
const generatePdf = () => {
  const doc = new PDFDocument()

  // Pipe its output somewhere, like to a file or HTTP response
  doc.pipe(fs.createWriteStream('reports/output.pdf'))

  // Embed a font, set the font size, and render some text
  doc.fontSize(18).text('Location Report - Name of location', 100, 100)

  doc.end()
}

export default generatePdf
