const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Devnex API is running');
});

app.post('/api/contact', (req, res) => {
    const { name, email, phone, service, budget, message } = req.body;

    // Here we would typically save to database or send email
    console.log('Contact Form Submission:', { name, email, phone, service, budget, message });

    // Simulate success
    res.status(200).json({ success: true, message: 'Message received successfully!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
