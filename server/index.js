const express = require("express");
const next = require("next");
require("dotenv").config();
const useragent = require("express-useragent");

const PORT = process.env.PORT || 8080;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(useragent.express());
  server.use(express.json());
  server.use(express.text());
  server.use(express.urlencoded({ extended: true }));

  server.get("*", (req, res) => handle(req, res));
  server.post("*", (req, res) => handle(req, res));
  server.put("*", (req, res) => handle(req, res));
  server.patch("*", (req, res) => handle(req, res));
  await server.listen(
    PORT,
    process.env.HOST === undefined ? "0.0.0.0" : process.env.HOST
  );
  console.log(`> Ready on http://${process.env.HOST}:${PORT}`);
})();
