async function testLogin() {
    const loginData = {
        loginId: '01042128480',
        password: 'password123'
    };
    
    try {
        const loginRes = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });
        const data = await loginRes.json();
        console.log('Login Response:', data);
    } catch (err) {
        console.error('Test failed:', err);
    }
}

testLogin();
