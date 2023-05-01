import { writeFile } from "fs";

const content =
  "Some content Written By async.js in the WritingFiles Directory!";

writeFile("./File System/ExampleFiles/async.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
});
