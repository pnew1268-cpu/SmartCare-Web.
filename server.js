const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const sequelize = require('./db');

// ────────────────────────────────────────────────
// CORS — must be the very first middleware
// 'null' origin covers requests from file:// pages
// ────────────────────────────────────────────────
const corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle all pre-flight OPTIONS requests

// ────────────────────────────────────────────────
// Body parsers — before routes
// ────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ────────────────────────────────────────────────
// Request logger
// ────────────────────────────────────────────────
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// ────────────────────────────────────────────────
// API Routes — registered BEFORE static serving
// ────────────────────────────────────────────────
app.use('/api/auth',     require('./routes/auth'));
app.use('/api/users',    require('./routes/users'));
app.use('/api/clinical', require('./routes/clinical'));
app.use('/api/admin',    require('./routes/admin'));
app.use('/api/messages',      require('./routes/messages'));
app.use('/api/notifications', require('./routes/notifications'));

// ────────────────────────────────────────────────
// Static files
// ────────────────────────────────────────────────
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname)));

// ────────────────────────────────────────────────
// SPA fallback & API 404
// ────────────────────────────────────────────────

// 1. If it's an API request that didn't match above, always return JSON 404
app.use('/api', (req, res) => {
    res.status(404).json({ msg: 'API endpoint not found' });
});

// 2. For everything else, if it's a GET request, serve index.html (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. For non-GET non-API requests, return a generic error
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// ────────────────────────────────────────────────
// Global error handler
// ────────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error('SERVER ERROR:', err.stack);
    res.status(500).json({ msg: 'Server error', details: err.message });
});

// Sync database then start server
const User = require('./models/User');
const Notification = require('./models/Notification');

sequelize.authenticate()
    .then(() => sequelize.sync()) // Fresh DB, sync normally

    .then(async () => {
        // Seed simple users for development if missing
        const seedAdmin = await User.findByPk('admin001');
        if (!seedAdmin) {
            await User.create({ id: 'admin001', name: 'Admin User', phone: '0000000000', email: 'admin@medrecord.com', password: 'admin123', roles: ['admin'], activeRole: 'admin' });
            console.log('[SEED] Created admin user: admin001 / admin123');
        }
        const seedPatient = await User.findByPk('12345678901234');
        if (!seedPatient) {
            await User.create({ id: '12345678901234', name: 'Test Patient', phone: '01012345678', email: 'patient@test.com', password: 'test123', roles: ['patient'], activeRole: 'patient' });
            console.log('[SEED] Created test patient: 12345678901234 / test123');
        }

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`✅  Server running on http://localhost:${PORT}`);
            console.log(`   Internal Address: http://0.0.0.0:${PORT}`);
            console.log(`   Database: SQLite (${process.env.NODE_ENV || 'development'})`);
        });
    })
    .catch(err => {
        console.error('Failed to start server - DB error:', err);
        process.exit(1);
    });
