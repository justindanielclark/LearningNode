import { createServer } from "http";
import url from "node:url";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const q = url.parse(req.url, true).query;
  const text = q.year + " " + q.month;
  res.write(text);
});

server.listen(8080);
