import { appendFile } from "fs/promises";

const content = "appended from promise.js in Writing_Files/Append/promise.js";

appendFile("./File System/ExampleFiles/promises.txt", content, {
  encoding: "utf-8",
})
  .then(console.log("appended"))
  .catch((err) => console.log(err))
  .finally(console.log("finally step!"));
