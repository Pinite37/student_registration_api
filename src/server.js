const express = require("express");
const dotenv = require("dotenv");
//const cors = require('cors');
const { sequelize } = require("./utils/db");
const router = require("./router");

dotenv.config();

const app = express();

app.use(express.json());
//app.use(cors());

app.use("/api", router);

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    const startServer = (port) => {
      const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log("PostreSQL connected");
      });

      server.on("error", (error) => {
        if (error.code === "EADDRINUSE") {
          console.log(
            `Port ${port} is already in use.\nTrying to start server on port ${
              port + 1
            }`,
          );
          startServer(port + 1);
        }
      });
    };

    startServer(+PORT);
  })
  .catch((err) => {
    console.log(error);
  });
