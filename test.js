document.getElementById("button").addEventListener("click", ()=> {
    const data = {key: document.getElementById("text").value}
    sendDataToServer(data)
})

async function sendDataToServer(data) {
    const response = await fetch('https://jenusan.pythonanywhere.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    if (response.ok) {
        const processedData = await response.json();
        document.getElementById("new").innerText = processedData["processed"]
        console.log('Processed data:', processedData);
    } else {
        console.error('Error:', response.statusText);
    }
}