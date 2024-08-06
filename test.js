async function sendDataToServer(data) {
    const response = await fetch('https://buzz-builder.com//process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    if (response.ok) {
        const processedData = await response.json();
        return(processedData);
    } else {
        console.error('Error:', response.statusText);
    }
}

document.getElementById("button").addEventListener("click", () => {
    const data = { list:[ "this is good", "This is terrible", "i hate it", "i dont like it", "this is a really cool product, i would definetly reccommend to others, and use it every day"]};
    document.getElementById("main").innerText = sendDataToServer(data);
})

// Example usage:
const data = { list:[ "this is good", "This is terrible", "i hate it", "i dont like it", "this is a really cool product, i would definetly reccommend to others, and use it every day"]};
sendDataToServer(data);