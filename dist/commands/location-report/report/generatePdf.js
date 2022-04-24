import PDFDocument from 'pdfkit';
import fs from 'fs';
const generatePdf = () => {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('reports/output.pdf'));
    doc.fontSize(18).text('Location Report - Name of location', 100, 100);
    doc.end();
};
export default generatePdf;
//# sourceMappingURL=generatePdf.js.map