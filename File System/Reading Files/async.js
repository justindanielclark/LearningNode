import { readFile } from "fs";

readFile("./File System/ExampleFiles/someText.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
