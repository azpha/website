async function deleteSS() {
    var secret = document.querySelector("#secret").value
    const delfile = await fetch(url, {
        method: "DELETE",
        headers: { "secret": `${secret}`}
    })
    console.log(delfile)

    if(delfile.status === 200) {
        var error = document.getElementById("error");
        document.querySelector("#success").innerHTML = "<p>Success!</p>"
        error.style.display = "none";
        window.location.replace("http://localhost:5000");
    } else if (delfile.status === 403) {
        var success = document.getElementById("success");
        document.querySelector("#error").innerHTML = "<p>Failure :(<br>That file either doesn't exist or the secret supplied was incorrect.</p>"
        success.style.display = "none";
    }
}

function showForm() {
    var form = document.getElementById("form")
    form.style.display = "block";

    var button = document.getElementById("del")
    button.style.display = "none";
    }