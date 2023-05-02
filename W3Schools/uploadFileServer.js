import formidable from "formidable";
import { readFile, rename } from "fs/promises";
import { createServer } from "http";

console.log("Spinning Up Server...");

const page = await readFile("./W3Schools/HTML/formPage.html");

const server = createServer((req, res) => {
  if (req.url === "/fileupload") {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      for (const file in files) {
        if (files[file].originalFilename !== "") {
          rename(
            files[file].filepath,
            `./W3Schools/uploads/${files[file].originalFilename}`
          );
        }
      }
      res.write("File Uploaded");
      res.end();
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(page);
    return res.end();
  }
});

server.listen(8080, () => {
  console.log("Server Listing On Port 8080...");
});
