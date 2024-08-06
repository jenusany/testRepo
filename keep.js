import React, { useState } from "react";
import "./login.css";

function Main() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    const [buttonLabels, setButtonLabels] = useState([]);

    if (code) {

    fetch(`https://graph.facebook.com/v11.0/oauth/access_token?client_id=803246971960239&redirect_uri=https://jenusany.github.io/testRepo/&client_secret=c19298b4ce75926bf2dc0177b77e5912&code=${code}`)
    .then(response => response.json())
    .then(data => {
    const accessToken = data["access_token"];
    fetch(`https://graph.facebook.com/v20.0/me/businesses?access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            //const businesses = data["data"]
            const businesses = ["main", "other", "wtf"]
            console.log(businesses)
            let arr = []
            for(let i = 0; i < businesses.length; i++){
                arr.push(businesses[i]["name"])
            }
            setButtonLabels(arr)
        })
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <>
    <h1>Select a Meta Business Suite</h1>
    {buttonLabels.map((label, index) => (
        <button key={index}>{label}</button>
      ))}
    </>  
  );
}

export default Main;
