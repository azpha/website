///////////////////////////////////
//  Fetch Script for Awex Clips  //
//         Medal.tv API          //
///////////////////////////////////
        async function medalclips() {
            const medalapi = 'https://developers.medal.tv/v1/latest?userId=215577&limit=1'
            const { contentObjects } = await fetch(medalapi, {
                method: 'GET',
                headers: { 'Authorization': 'pub_94FdmA2SMLm6V53dDykcPB3v4HLak6Db', 'Content-Type': 'application/json' }
            }).then(response => response.json())

            document.querySelector("#clip").innerHTML = contentObjects[0].embedIframeCode
            document.querySelector("#title").innerHTML = "<i>" + contentObjects[0].contentTitle + "</i>"
        }