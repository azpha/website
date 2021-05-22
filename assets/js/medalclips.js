///////////////////////////////////
//  Fetch Script for Awex Clips  //
//         Medal.tv API          //
///////////////////////////////////

const medalapi = 'https://developers.medal.tv/v1/latest?userId=215577&limit=1'

    async function medalClips() {
        const { contentObjects } = await fetch(medalapi, {
            method: 'GET',
            headers: { 'Authorization': 'pub_x9mjeQnqk07tEK1ge7w2xHYxTpTEbKwN', 'Content-Type': 'application/json' }
        }).then(response => response.json())

        document.querySelector("#clip").innerHTML = contentObjects[0].embedIframeCode
    }