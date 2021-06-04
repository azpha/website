async function postPlain() {
    const link = document.getElementById("cliplinkpt").value
    console.log('Link:', link)
    const webhook = document.getElementById("webhookURLpt").value
    console.log('Webhook:', webhook)
    const caption = document.getElementById("captionpt").value
    console.log('Caption:', caption)
    const username = document.getElementById("medalUsernamept").value
    console.log('Username:', username)

    const url = `https://mcwapi.herokuapp.com/clip-check-pt?clipLink=${link}&webhookURL=${webhook}&medalUsername=${username}&caption=${caption}`

    const { response } = await fetch(url).then(response => response.json());

    window.location.replace("https://awexxx.xyz/mcw?status=success");
}