const fs = require("fs");
const http = require("http");
const url = require("url");

// fs.writeFileSync("start.txt", "hello from matan");
// console.log(fs.readFileSync("input.txt", "utf-8"));
fs.readFile("start.txt", "utf-8", (err, data) => {
  if (err) console.log("error!");
  else console.log(data);
});
// creating a server
const server = http.createServer((req, res) => {
  const pathName = req.url.toLowerCase();
  if (pathName === "/") res.end("this is th root");
  else if (pathName === "/overview") {
    const head = "<h1>this is the overview</h1>";
    res.end(this.Date.now);
  } else if (pathName === "/product") res.end("this is product");
  else res.end("page not found!");
});
server.listen(8000, "localhost", () => {
  console.log("listening to localhost");
});
