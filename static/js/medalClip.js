const clipSpan = document.getElementById("clip");
fetch("https://developers.medal.tv/v1/latest?userId=215577&limit=1", {
    method: "GET",
    headers: {
        "authorization": "pub_ecEyOlY5G2u9476DMGOxcxiNcaOTEjmq",
        "Content-Type": "application/json"
    }
}).then(async function(response) {
    const data = await response.json();
    if(screen.width < 1920) { clipSpan.innerHTML = `<h3><a href="${data.contentObjects[0].directClipUrl}" target="_blank">${data.contentObjects[0].contentTitle}</a></h3>` }
    else clipSpan.innerHTML = `${data.contentObjects[0].embedIframeCode}<br><hr><h3>${data.contentObjects[0].contentTitle}</h3>`;
});