const fs = require("fs");

const content =
  "Some content Written By sync.js in the WritingFiles Directory!";

try {
  fs.writeFileSync("./File System/ExampleFiles/sync.txt", content, {
    encoding: "utf-8",
  });
} catch (err) {
  console.log(err);
}
