import { readFileSync } from "fs";

try {
  readFileSync("./File System/ExampleFiles/someText.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
