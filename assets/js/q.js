function checkparam() {
    const params = new URLSearchParams(window.location.search)
    // console.log(params) Only uncomment this for testing purposes.

    if (params.get('type') === 'pt') {
        const pt = document.getElementById("pt");
        pt.style.display = "block";
        const embed = document.getElementById("embed");
        embed.style.display = "none";
    }

    if (params.get('status') === 'success') {
        const pt = document.getElementById("pt");
        pt.style.display = "none";
        const embed = document.getElementById("embed");
        embed.style.display = "none";
        const success = document.getElementById("success");
        success.style.display = "block";
    }
}