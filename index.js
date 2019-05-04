const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile").development;

const db = knex(knexConfig);
const server = require(express);

server.use(helmet());
server.use(express.json());

// basic get requests with messages just made to flesh out different end point

server.get("/api/reciepes", (req, res) => {
  res.json({ message: "reciepes" });
});
server.get("/api/dishes", (req, res) => {
  res.json({ message: "dishes" });
});
server.get("/api/ingredients", (req, res) => {
  res.json({ message: "ingredients" });
});
server.get("/api/dishes/reciepes", (req, res) => {
  res.json({ message: "reciepes of a particular dish" });
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\nThe Port Number of Local Host is: ${port}\n`)
);
