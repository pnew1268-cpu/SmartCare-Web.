const User = require('./models/User');
const sequelize = require('./db');

async function diag() {
    try {
        await sequelize.authenticate();
        const users = await User.findAll();
        console.log(`Total users: ${users.length}`);
        users.forEach(u => {
            const isValidHash = u.password.startsWith('$2a$') || u.password.startsWith('$2b$');
            console.log(`- ID: [${u.id}] | Phone: [${u.phone}] | Name: [${u.name}] | Valid Hash: ${isValidHash} | Hash Start: ${u.password.substring(0, 10)}...`);
        });
    } catch (err) {
        console.error('Diag failed:', err);
    } finally {
        process.exit();
    }
}

diag();
