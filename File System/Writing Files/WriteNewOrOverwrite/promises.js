const fs = require("fs/promises");

async function example() {
  try {
    const content =
      "Some content Written By promises.js in the WritingFiles Directory!";
    await fs.writeFile("./File System/ExampleFiles/promises.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();
