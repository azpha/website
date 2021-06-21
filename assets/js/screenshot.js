async function deleteSS() {
    var secret = document.querySelector("#secret").value
    const delfile = await fetch(url, {
        method: "DELETE",
        headers: { "secret": `${secret}`}
    })
    .then(function(response) {
        console.log(response.status); // Will show you the status
        if(response.status === 200) {
            var error = document.getElementById("error");
            document.querySelector("#success").innerHTML = "<p>Success!</p>"
            error.style.display = "none";
            console.log(delfile)
        } else if (response.status === 403) {
            var success = document.getElementById("success");
            document.querySelector("#error").innerHTML = `<p>Failed to issue DELETE request<br>Response code: ${response.status}.<br>Double check your token.</p>`
            success.style.display = "none";
        }
      })
}

function showForm() {
    var form = document.getElementById("form")
    form.style.display = "block";

    var button = document.getElementById("del")
    button.style.display = "none";
    }