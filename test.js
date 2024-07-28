async function sendDataToServer(data) {
    const response = await fetch('http://18.222.68.130/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    if (response.ok) {
        const processedData = await response.json();
        console.log(processedData);
    } else {
        console.error('Error:', response.statusText);
    }
}

// Example usage:
const data = { list:[ "this is good", "This sucks", "ew", "nice", "this is sick"] };
sendDataToServer(data);
