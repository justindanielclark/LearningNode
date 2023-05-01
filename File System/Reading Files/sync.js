const fs = require("fs");

try {
  const data = fs.readFileSync(
    "./File System/ExampleFiles/someText.txt",
    "utf8"
  );
  console.log(data);
} catch (err) {
  console.error(err);
}
