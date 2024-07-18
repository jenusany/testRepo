document.getElementById("test").addEventListener("click", ()=> {
    const data = { key: document.getElementById("inputText").value };
    sendDataToServer(data);
})

async function sendDataToServer(data) {
    const response = await fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    if (response.ok) {
        const processedData = await response.json();
        console.log('Processed data:', processedData);
    } else {
        console.error('Error:', response.statusText);
    }
}
