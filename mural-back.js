const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api");

const app = express();
    
app.use("/api", apiRoute);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen("https://vitorpatzlaff-integration.netlify.app", () => {
    console.log("Server running");
});