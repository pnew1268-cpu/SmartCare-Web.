const User = require('./models/User');
const sequelize = require('./db');

async function diag() {
    try {
        await sequelize.authenticate();
        const users = await User.findAll();
        console.log(`Total users in DB: ${users.length}`);
        
        for (const u of users) {
             const hashValid = u.password.startsWith('$2a$') || u.password.startsWith('$2b$');
             console.log('---');
             console.log(`ID: ${u.id}`);
             console.log(`Name: ${u.name}`);
             console.log(`Phone: [${u.phone}]`);
             console.log(`Hash Valid: ${hashValid}`);
             console.log(`Hash: ${u.password}`);
        }
    } catch (err) {
        console.error('Diag failed:', err);
    } finally {
        process.exit();
    }
}

diag();
