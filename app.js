// //require express

// const express = require("express");

// //create anexpress application

// const app = express();

// //import middleware

// const cors = require("cors");

// const userRouter = require("./routes/userRoutes");

// //require job router
// const jobRouter = require("./routes/jobRoutes")

// //require morgan for logging
// const morgan = require("morgan");
// //require parsing cookie
// const cookieParser = require("cookie-parser");
// const jobRouter = require("./routes/jobRoutes");

// //middleware
// //user cookie parser
// app.use(cookieParser(""));

// //user morgan for logginf
// app.use(morgan("dev"));

// //use middleware
// app.use(cors());

// //parse the req body as Json
// app.use(express.json());

// //defien endpoints //routes
// app.use("/api/users", userRouter);

// app.use("/api/jobs", jobRouter);

// //export app
// module.exports = app;

// // // Require express
// const express = require("express");

// // Create an express application
// const app = express();

// // Import middleware
// const cors = require("cors");
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");

// // Require user and job routers
// const userRouter = require("./routes/userRoutes");
// const jobRouter = require("./routes/jobRoutes");

// // Middleware
// // Use cookie parser
// app.use(cookieParser());

// // Use morgan for logging
// app.use(morgan("dev"));

// // Use CORS middleware
// app.use(cors());

// // Parse the request body as JSON
// app.use(express.json());

// // Define endpoints/routes
// app.use("/api/users", userRouter);
// app.use("/api/jobs", jobRouter);

// // Export app
// module.exports = app;

const express = require("express");
const cookieParser = require("cookie-parser");
// const auth = require("./middlewares/auth");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const jobRouter = require("./routes/jobRoutes");

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/jobs", jobRouter);

module.exports = app;
