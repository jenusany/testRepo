document.getElementById("test").addEventListener("click", ()=> {
    console.log("clicked")
    console.log(sendData("data"))
})


async function sendData(data) {
    const response = await fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
}