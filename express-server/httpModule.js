const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end("<h1 >Welcome to My Node.js Server</h1>");

  //  to respond differently based on the requested URL.
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  } else if (req.url === '/contact') {
      res.end("<h1> HEllo this is contact page </h1>")
  }
  else {
    res.writeHead(404);
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
