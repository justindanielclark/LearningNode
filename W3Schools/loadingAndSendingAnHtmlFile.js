import { readFile } from "fs/promises";
import { createServer } from "http";
import url from "node:url";

const index = await readFile("./W3Schools/HTML/index.html", {
  encoding: "utf-8",
});
const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(index);
  return res.end();
});

server.listen(8080);
