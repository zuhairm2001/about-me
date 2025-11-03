import fs from "fs";
import { marked } from "marked";
import puppeteer from "puppeteer";

const markdown = fs.readFileSync("resume.md", "utf-8");
const htmlContent = marked(markdown);
const css = fs.readFileSync("resume.css")

const fullHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Styled Markdown PDF</title>
  <style>${css}</style>
</head>
<body class="page">
  ${htmlContent}
</body>
</html>
`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: "load" });
  await page.pdf({
    path: "output.pdf",
    format: "A4",
    printBackground: true
  });
  await browser.close();
  console.log("PDF generated: output.pdf");
})();
