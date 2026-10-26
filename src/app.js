import express from "express";

const App = express();

App.get("/api/users", function (req, res) {
  res.send(["Shwetali", "Shraddha", "Abhishek"]);
});

App.post("/api/users/add", function (req, res) {
  res.send({ msg: "User added in DB" });
});

App.put("/api/users/update", function (req, res) {
  res.send({ msg: "User updated in DB" });
});

App.delete("/api/users/delete", function (req, res) {
  res.send({ msg: "User deleted from DB" });
});

App.listen(3002, function () {
  console.log("Application Started");
});
