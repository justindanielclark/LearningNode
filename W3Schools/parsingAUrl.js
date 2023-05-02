import url from "node:url";

const address = "http://localhost:8080/default.html?year=2017&month=february";
const q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
