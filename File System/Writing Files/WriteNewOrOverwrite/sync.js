import { writeFileSync } from "fs";

const content =
  "Some content Written By sync.js in the WritingFiles Directory!";

try {
  writeFileSync("./File System/ExampleFiles/sync.txt", content, {
    encoding: "utf-8",
  });
} catch (err) {
  console.log(err);
}
