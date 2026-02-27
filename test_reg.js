async function testRegister() {
    const u = {
        id: "TEST_" + Date.now(),
        name: "Test User",
        phone: "010" + Math.floor(10000000 + Math.random() * 90000000),
        email: "test@example.com",
        password: "password123"
    };
    
    try {
        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(u)
        });
        const data = await res.json();
        console.log('Response:', data);
    } catch (err) {
        console.error('Test failed:', err);
    }
}

testRegister();
