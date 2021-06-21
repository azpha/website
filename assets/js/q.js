function checkparam() {
    const params = new URLSearchParams(window.location.search)
    // console.log(params) Only uncomment this for testing purposes.

    if(!params) {
        const embed = document.getElementById("embed");
        embed.style.display = "block"
    }

    if (params.get('type') === 'pt') {
        const pt = document.getElementById("pt");
        pt.style.display = "block";
        const embed = document.getElementById("embed");
        embed.style.display = "none";
    }

    if(params.get('type') === 'embed') {
        const pt = document.getElementById("pt");
        pt.style.display = "none";
        const embed = document.getElementById("embed");
        embed.style.display = "block";
        const success = document.getElementById("success");
        success.style.display = "none";
    }

    if (params.get('status') === 'success') {
        const pt = document.getElementById("pt");
        pt.style.display = "none";
        const embed = document.getElementById("embed");
        embed.style.display = "none";
        const success = document.getElementById("success");
        success.style.display = "block";
    }

    if(params.get('ref') === 'added') {
        const gen = document.getElementById("gen");
        gen.style.display = "none";
        const success = document.getElementById("success");
        success.style.display = "block";
    }

    if (params.get('ref') === 'ee') {
        const ee = document.getElementById("easteregg")
        ee.style.display = "block";
        }

    if (params.get('ref') === 'demi') {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
    }

    window.addEventListener ? 
    window.addEventListener("load",checkparam,false) 
    : 
    window.attachEvent && window.attachEvent("onload",checkparam);