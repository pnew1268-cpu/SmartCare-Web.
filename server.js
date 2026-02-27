const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// prefer explicit default port for clarity (overrides environment when unset)
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

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

// static assets from the public directory (required by user request)
// this must come before any SPA/fallback logic below
app.use(express.static(path.join(__dirname, 'public')));

// NOTE: older code also served the entire project root; leave it after
// uploads/handling just in case other files depend on it.


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
// mount individual routers at both their normal prefixes and directly under /api
app.use('/api/auth',     require('./routes/auth'));
app.use('/api/users',    require('./routes/users'));

// expose same handlers at root to allow paths like /api/login, /api/profile
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/users'));

app.use('/api/clinical', require('./routes/clinical'));
app.use('/api/admin',    require('./routes/admin'));
app.use('/api/messages',      require('./routes/messages'));
app.use('/api/notifications', require('./routes/notifications'));

// informational /api root to avoid plain 404 when user visits it
app.get('/api', (req, res) => {
    res.json({
        msg: 'MedRecord API root. Try /login, /register, /profile, /users/...',
        available: [
            '/api/login', '/api/register', '/api/profile',
            '/api/users/doctors', '/api/clinical/prescriptions',
            '/api/messages', '/api/notifications'
        ]
    });
});

// Ping endpoint to verify server status
app.get('/api/ping', (req, res) => res.json({ status: 'ok', time: new Date() }));

// ────────────────────────────────────────────────
// SPA fallback & API 404
// ────────────────────────────────────────────────

// 1. API 404 — Handle unmatched /api requests BEFORE static/SPA fallback
app.use('/api', (req, res) => {
    res.status(404).json({ 
        msg: 'API endpoint not found',
        url: req.originalUrl,
        method: req.method
    });
});

// 2. Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Specific 404 for missing uploads to prevent SPA fallback
app.use('/uploads', (req, res) => {
    res.status(404).send('File Not Found');
});

// NOTE: A catch‑all static serve of the project root was originally here.
// Keep it for compatibility but it comes _after_ public/ so public files win.
app.use(express.static(path.join(__dirname)));

// 3. SPA Fallback — ONLY for GET requests that are NOT for /api
app.get('*', (req, res, next) => {
    if (req.url.startsWith('/api')) return next();
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 4. Generic 404 handler for non-GET requests or fallthrough
app.use((req, res) => {
    if (req.originalUrl.startsWith('/api') || req.method !== 'GET') {
        return res.status(404).json({ msg: 'Not Found' });
    }
    res.status(404).sendFile(path.join(__dirname, 'index.html')); // Fallback to SPA even on 404 if it's a GET
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
    .then(() => sequelize.sync({ alter: true })) // Force schema updates if columns are missing

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

        // start listening and keep a handle so we can catch errors
        const server = app.listen(PORT, '0.0.0.0', () => {
            console.log(`✅  Server running on http://localhost:${PORT}`);
            console.log(`   Internal Address: http://0.0.0.0:${PORT}`);
            console.log(`   Database: SQLite (${process.env.NODE_ENV || 'development'})`);
        });

        server.on('error', err => {
            if (err.code === 'EADDRINUSE') {
                console.error(`❌  Port ${PORT} already in use. Is another instance running?`);
                process.exit(1);
            }
            console.error('❌  Server error:', err);
        });
    })
    .catch(err => {
        console.error('Failed to start server - DB error:', err);
        process.exit(1);
    });
