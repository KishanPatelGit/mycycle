const express = require("express");
const app = express();
const connectDB = require("./config/db");

//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

//DEFINE ROUTES
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/cycle", require("./routes/cycle"));
app.use("/api/bookcycle", require("./routes/bookcycle"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port on ${PORT}`));
