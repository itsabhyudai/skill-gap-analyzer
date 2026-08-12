/**
 * Extract plain text from a PDF buffer using pdf.js (Node-compatible legacy build).
 */
async function extractPdfText(buffer) {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  // pdf.js rejects Node Buffer even though it is a Uint8Array subclass
  const data = Uint8Array.from(buffer);

  const loadingTask = pdfjs.getDocument({
    data,
    useSystemFonts: true,
  });

  const doc = await loadingTask.promise;
  const pages = [];

  for (let i = 1; i <= doc.numPages; i += 1) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const line = content.items.map((item) => ("str" in item ? item.str : "")).join(" ");
    pages.push(line);
  }

  return {
    text: pages.join("\n").trim(),
    numpages: doc.numPages,
  };
}

module.exports = { extractPdfText };
