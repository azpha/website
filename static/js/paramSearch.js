const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const div = document.getElementById("querydiv");

console.log(params)
if (params.reason) {
    if (params.reason == "old_domain") {
        div.innerHTML = '<p style="color:red;">You have been redirected here from an old domain. Please use this domain.</p>';
    }
}