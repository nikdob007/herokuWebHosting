const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { template, partials } = require("handlebars");
const app = express();
const port = process.env.PORT || 8000;

// public static path
const staticPath = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set("views", templates_path);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath)); 

// routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404", {
        errorMsg : 'Ooops! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`listing to the port ${port}`);
});
