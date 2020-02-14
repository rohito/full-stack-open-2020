const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("./utils/logger");
const db = require("./utils/db_helper");
const middleware = require("./utils/middleware");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const blogsRouter = require("./controllers/blogs");

const app = express();

db.connect().catch(err => {
  logger.error(err);
});

app.use(cors());
app.use(bodyParser.json());
app.use(middleware.morganLogger());

app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/blogs", blogsRouter);
app.use(middleware.unknownRouteHandler);

app.use(middleware.errorHandler);

module.exports = app;
