//Task1

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the new Server!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is a simple http Node.js server.");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact us at contact@newserver.com");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on http://127.0.0.1:5000");
});

//Task2
const path = require("path");
const fs = require("fs");

const server2 = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/file") {
    const fileName = url.searchParams.get("name"); // Get the file name from query params

    if (!fileName) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Bad Request: File name is required");
      return;
    }

    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          // File not found
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("File not found!");
        } else {
          // Other file system errors
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        }
      } else {
        // File successfully read
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  } else {
    // Invalid route
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid route!");
  }
});

// Start the server on port 5000
server2.listen(5050, () => {
  console.log("Server is running on http://localhost:5050");
});
