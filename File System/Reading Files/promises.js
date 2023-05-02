import { readFile } from "fs/promises";

readFile("./File System/ExampleFiles/someText.txt", { encoding: "utf-8" })
  .then((data) => {
    console.log(data);
    throw new Error("I threw an error!");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("finally has run");
  });
