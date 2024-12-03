const http = require("http");
const mongodb = require("mongodb");

let db;
const connecttionString = "mongodb+srv://mirzohidmurodov77:p2EiDQwLC3zKX4wH@cluster0.l4zky.mongodb.net/reja"
mongodb.connect(
  connecttionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MOngo DB connection succeed");
      module.exports = client;

      const app = require("./app");
      
      const server = http.createServer(app);
      let PORT = 1901;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port:${PORT}`);
      });
    }
  }
);
