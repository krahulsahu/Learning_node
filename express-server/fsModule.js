const fs = require("fs");
// fs.writeFileSync("test.txt", "Hello Rahul how rare you!!!");

// fs.writeFile("example.txt", "Hello, this is Node.js!", (err) => {
//   if (err) throw err;
//   console.log("File written successfully");
// });

// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

// fs.unlinkSync("example.txt");
// console.log("File deleted");

// fs.renameSync("example.txt", "newfile.txt");

// if (fs.existsSync("example.txt")) {
//   console.log("File exists!");
// } else {
//   console.log("File does not exist!");
// }

fs.mkdirSync("myFolder");

fs.rmdirSync("myFolder");


