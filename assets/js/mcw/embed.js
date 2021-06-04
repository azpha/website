async function postEmbed() {
    const link = document.getElementById("cliplink").value
    console.log('Link:', link)
    const webhook = document.getElementById("webhookURL").value
    console.log('Webhook:', webhook)
    const caption = document.getElementById("caption").value
    console.log('Caption:', caption)
    const username = document.getElementById("medalUsername").value
    console.log('Username:', username)

    const embedUrl = `https://mcwapi.herokuapp.com/clip-check?clipLink=${link}&webhookURL=${webhook}&medalUsername=${username}&caption=${caption}`

    const { response } = await fetch(embedUrl).then(response => response.json());
    
    window.location.replace("https://awexxx.xyz/mcw?status=success");
}