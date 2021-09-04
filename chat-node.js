var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  console.log("app works");
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (evt) => {
    console.log(evt);
    socket.broadcast.emit("message", evt);
  });
});
io.on("disconnect", (evt) => {
  console.log("disconnected");
});

http.listen(port, function () {
  console.log(`server listening on port: ${port}`);
});
