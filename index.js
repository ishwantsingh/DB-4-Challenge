const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile").development;

const db = knex(knexConfig);
const server = require(express);

server.use(helmet());
server.use(express.json());

server.get("/api/reciepes", (req, res) => {
  res.json({ message: "fleshing out request structure" });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
