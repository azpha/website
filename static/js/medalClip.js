const clipSpan = document.getElementById("clip");
fetch("https://developers.medal.tv/v1/latest?userId=215577&limit=1", {
    method: "GET",
    headers: {
        "authorization": "pub_ecEyOlY5G2u9476DMGOxcxiNcaOTEjmq",
        "Content-Type": "application/json"
    }
}).then(async function(response) {
    const data = await response.json();
    clipSpan.innerHTML = `${data.contentObjects[0].embedIframeCode}<br>${data.contentObjects[0].contentTitle}`;
});