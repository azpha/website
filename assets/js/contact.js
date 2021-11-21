async function sendContact() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Start of checks

    if(!email || !message || !subject) {
        document.getElementById('notification').innerHTML = `<p>Sorry, a field wasn't provided!</p>`
    } else {
        const data = {
            "username": "Site Contact",
            "content": "Someone sent a request from the website contact page!",
            "embeds": [
                {
                    "author": {
                        "name": email,
                        "url": "https://awexxx.xyz"
                    },
                    "title": subject,
                    "description": message
                }
            ]
        }

        await fetch(`https://api.awexxx.xyz/website/webhook`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            if(response.status === 204) {
                document.getElementById(`notification`).innerHTML = `<p style="color:azure;">Success! That message was successfully sent!</p>`
            } else if (response.status === 500) {
                document.getElementById(`notification`).innerHTML = `<p style="color:red;">Uh oh! Something went wrong sending that message.</p>`
            }
        })
    }
}