const express = require("express");
const dbConnection = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
// require("./config.env")
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
//database connection
dbConnection();

app.use("/api", require("./routers/auth.routes"));
app.use("/api", require("./routers/location.routes"));
app.use("/api", require("./routers/appoinments.routes"));
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
