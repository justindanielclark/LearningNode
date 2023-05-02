import { appendFile } from "fs";

const content = "appended data from async.js";
async function example() {
  try {
    appendFile("./File System/ExampleFiles/async.js", content, {
      encoding: "utf-8",
    });
  } catch (err) {
    console.log(err);
  }
}
example();
