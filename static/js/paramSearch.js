async function paramSearch() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const div = document.getElementById("querydiv");

    if (params.reason) {
        if (params.reason == "old_domain") {
            div.innerHTML = '<p style="color:red;">You have been redirected here from an old domain. Please use this domain.</p>';
        }
    }

    const clipSpan = document.getElementById("clip");
    const response = await fetch("https://developers.medal.tv/v1/latest?userId=215577&limit=1", {
        method: "GET",
        headers: {
            "authorization": "pub_ecEyOlY5G2u9476DMGOxcxiNcaOTEjmq",
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    clipSpan.innerHTML = `${data.contentObjects[0].embedIframeCode}<br>${data.contentObjects[0].contentTitle}`;
}

window.onload = paramSearch();