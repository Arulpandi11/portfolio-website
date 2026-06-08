const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running 🚀");
});

app.post("/contact", (req, res) => {

    const { name, email, message } = req.body;

    console.log("New Contact Form Submission");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        success: true,
        message: "Message received successfully!"
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});