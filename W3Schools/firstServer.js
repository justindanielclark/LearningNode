import { createServer } from "http";
import url from "node:url";
import { readFile } from "fs/promises";
const pages = [
  {
    name: "index",
    location: "./W3Schools/HTML/index.html",
  },
  {
    name: "summer",
    location: "./W3Schools/HTML/summer.html",
  },
  {
    name: "winter",
    location: "./W3Schools/HTML/winter.html",
  },
];

Promise.all(
  pages.map(async (page) => {
    const data = await readFile(page.location, { encoding: "utf-8" });
    return {
      ...page,
      data,
    };
  })
).then((resolvedPages) => {
  const pages = resolvedPages.reduce((acc, cur) => {
    acc.set(cur.name, cur.data);
    return acc;
  }, new Map());
  const server = createServer((req, res) => {
    const q = url.parse(req.url, true);
    res.writeHead("200", { "Content-Type": "text/html" });
    switch (q.path) {
      case "/": {
        res.write(pages.get("index"));
        break;
      }
      case "/winter": {
        res.write(pages.get("winter"));
        break;
      }
      case "/summer": {
        res.write(pages.get("summer"));
        break;
      }
      default: {
        res.write("404");
      }
    }
    return res.end();
  }).listen(8080);
});
