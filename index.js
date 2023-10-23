const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const auth = require("json-server-auth");

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000; //  chose port from here like 8080, 3001

const rules = auth.rewriter({
  auth: 640,
  tasks: 660,
});

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

server.db = router.db;
// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);
server.use(jsonServer.bodyParser); // Required to parse POST requests

server.listen(port);
