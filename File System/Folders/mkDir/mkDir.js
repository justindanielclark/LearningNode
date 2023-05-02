#!/usr/bin/env node
import { mkdir } from "fs";

mkdir("./File System/ExampleFiles/Test Folder", () => {
  console.log("cool");
});
