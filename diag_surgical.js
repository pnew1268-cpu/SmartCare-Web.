const User = require('./models/User');
const sequelize = require('./db');

async function diag() {
    try {
        await sequelize.authenticate();
        const u = await User.findByPk('30502232601892');
        if (!u) {
            console.log('User not found');
            return;
        }
        
        console.log('--- USER DATA ---');
        console.log(`ID: ${u.id}`);
        console.log(`Name: ${u.name} (Length: ${u.name.length})`);
        console.log(`Phone: [${u.phone}] (Length: ${u.phone.length})`);
        
        // Check for non-printable characters in phone
        let phoneHex = '';
        for (let i = 0; i < u.phone.length; i++) {
            phoneHex += u.phone.charCodeAt(i).toString(16).padStart(4, '0') + ' ';
        }
        console.log(`Phone Hex: ${phoneHex}`);
        
        const hashValid = u.password.startsWith('$2a$') || u.password.startsWith('$2b$');
        console.log(`Hash Valid: ${hashValid}`);
        console.log(`Hash: ${u.password}`);
        
    } catch (err) {
        console.error('Diag failed:', err);
    } finally {
        process.exit();
    }
}

diag();
