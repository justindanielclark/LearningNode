import { appendFileSync } from "fs";

const content = "Some content!";

appendFileSync("./File System/ExampleFiles/sync.txt", content, (err) => {
  if (err) {
    console.log(err);
  }
});
