async function getMedalClip() {
    var clip = await fetch(`https://developers.medal.tv/v1/latest?userId=215577&limit=2`, {
        method: 'GET',
        headers: { 'content-type': 'application/json', 'authorization': 'pub_HJcYn9DsxH0iW0N8iCqLPUddAr7hiyo2' }
    }).then (response => response.json());

    document.querySelector('.c1iframe').innerHTML = clip.contentObjects[0].embedIframeCode
    document.querySelector('.c1title').innerHTML = `<p>${clip.contentObjects[0].contentTitle}</p>`


    console.log(clip)
}