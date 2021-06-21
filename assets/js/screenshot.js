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
            var success = document.getElementById("success");
            document.querySelector("#success").innerHTML = "<p>Success!</p>"
            success.style.display = "block";
            error.style.display = "none";
        } else if (response.status === 403) {
            var success = document.getElementById("success");
            var error = document.getElementById("error");
            document.querySelector("#error").innerHTML = `<p>Failed to issue DELETE request<br>Response code: ${response.status}.<br>Double check your token.</p>`
            success.style.display = "none";
            error.style.display = "block";
        }
      })
}

function showForm() {
    var form = document.getElementById("form")
    form.style.display = "block";

    var button = document.getElementById("del")
    button.style.display = "none";
    }