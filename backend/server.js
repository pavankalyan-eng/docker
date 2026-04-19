const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy user (for testing)
const USER = {
    username: "admin",
    password: "1234"
};

// Route: Handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === USER.username && password === USER.password) {
        res.send("<h2>Login Successful ✅</h2>");
    } else {
        res.send("<h2>Invalid Credentials ❌</h2>");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});