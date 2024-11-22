const http = require("http");
const mongodb = require("mongodb");

let db;
const connecttionString = "mongodb+srv://mirzohidmurodov77:p2EiDQwLC3zKX4wH@mirzokhid.l4zky.mongodb.net/"
mongodb.connect(
  connecttionString,
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MOngo DB connection succeed");
      const app = require("./app");
      module.exports = client;

      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port:${PORT}`);
      });
    }
  }
);
