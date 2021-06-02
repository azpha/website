////////////////////
// Hive Lookup JS //
//  Dvlpr. Awexx  //
////////////////////

console.log(`Initiated the Hive Lookup Script`);
const avatarURL = 'https://minotar.net/avatar/'
const playerName = document.getElementById("inputBox").value;

        if (document.getElementById("gameBox").value === 'sg' || document.getElementById("gameBox").value === 'Survival Games' ) {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/sg`;
        const data = await fetch(apiURL).then(response => response.json());
        document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive SG Stats<hr>Victories:  " + data.victories + "<br>Total Points:  " + data.total_points + "<br> Most Points:  " + data.most_points
        + "<br>Games Played:  " + data.gamesplayed + "<br>Crates Opened:  " + data.cratesopened + "<br>Kills:  " + data.kills + "<br>Deaths:  " + data.kills + "<br>Total Time Alive:  " + data.timealive +
        "<br>Unlock Deathcrate:  " + data.unlock_deathcrate + "<br>Unlock My Sword:  " + data.unlock_mysword + "<br>Vanity Colors:  " + data.vanitycolors + "<br>Active Vanity Color:  " + data.active_vanitycolor +
        "<br>Arrow Trails:  " + data.arrowtrails + "<br>Battle Cries:  " + data.battlecries + "<br>Active Deathcrate:  " + data.active_deathcrate + "<br>First Win Day:  " + data.firstwinday

        var panel = document.getElementById("panel");
        panel.style.display = "block"; 

        document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
        var link = document.getElementById("link");
        link.style.display = "block"; 
        
        } else if (document.getElementById("gameBox").value === "bp" || document.getElementById("gameBox").value === 'Block Party' ) {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/bp`;
            const data = await fetch(apiURL).then(response => response.json());
        document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Block Party Stats<hr>Games Played:  " + data.games_played + "<br>Selected Bling:  " + data.selected_bling + "<br>Death Sound:  " + data.selected_death_sound
        + "<br>Trail:  " + data.selected_trail + "<br>Victory Sound:  " + data.selected_victory_sound + "<br>Eliminations:  " + data.total_eliminations + "<br>Placing:  " + data.total_placing + "<br>Total Points:  " + data.total_points +
        "<br>Unlocked Bling:  " + data.unlocked_bling + "<br>Unlocked Death Sounds:  " + data.unlocked_death_sounds + "<br>Unlocked Trails:  " + data.unlocked_trails + "<br>Victories:  " + data.victories 
        
        var panel = document.getElementById("panel");
        panel.style.display = "block";
        
        document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
        var link = document.getElementById("link");
        link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "cai" || document.getElementById("gameBox").value === 'Cowboys and Indians') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/cai`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Cowboys and Indians Stats<hr>Total Points:  " + data.total_points + "<br>Captured:  " + data.captured + "<br>Captures:  " + data.captures
            + "<br>Catches:  " + data.catches + "<br>Caught:  " + data.caught + "<br>Creeper Firework:  " + data.creeperfirework + "<br>Games Played:  " + data.gamesplayed + "<br>Team Selector:  " + data.teamselector +
            "<br>Victories:  " + data.victories

            var panel = document.getElementById("panel");
            panel.style.display = "block"; 

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "dr" || document.getElementById("gameBox").value === 'Deathrun') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/dr`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive DeathRun Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Kills:  " + data.kills
            + "<br>Deaths:  " + data.deaths + "<br>Games Played:  " + data.games_played
            
            var panel = document.getElementById("panel");
            panel.style.display = "block"; 

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "hb" || document.getElementById("gameBox").value === 'The Herobrine') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/hb`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive The Herobrine Stats<hr>Captures:  " + data.captures + "<br>Kills:  " + data.kills + "<br>Deaths:  " + data.deaths
            + "<br>Points:  " + data.points + "<br>Unlocked Classes:  " + data.unlocked_classes + "<br>Active Class:  " + data.active_class

            var panel = document.getElementById("panel");
            panel.style.display = "block"; 

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "hero" || document.getElementById("gameBox").value === 'SG:Hero') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/hero`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive SG:Hero Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Kills:  " + data.kills
            + "<br>Deaths:  " + data.deaths + "<br>1v1 Wins:  " + data.one_vs_ones_wins + "<br>Deathmatches:  " + data.deathmatches + "<br>TNT Used:  " + data.tnt_used + "<br>Crates Opened:  " + data.crates_opened +
            "<br>Food Consumed:  " + data.food_consumed
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "hide" || document.getElementById("gameBox").value === 'Hide & Seek') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/hide`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Hide & Seek Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Hider Kills:  " + data.hiderkills
            + "<br>Seeker Kills:  " + data.seekerkills + "<br>Deaths:  " + data.deaths + "<br>Games Played:  " + data.gamesplayed + "<br>Blocks:  " + data.blocks + "<br>Book Upgrade:  " + data.bookupgrade +
            "<br>Time Alive:  " + data.timealive
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 
        
        } else if (document.getElementById("gameBox").value === "oitc" || document.getElementById("gameBox").value === 'One in the Chamber') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/oitc`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive One in the Chamber Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Kills:  " + data.kills
            + "<br>Deaths:  " + data.deaths + "<br>Arrows Fired:  " + data.arrowsfired + "<br>Games Played:  " + data.gamesplayed + "<br>Cupid Unlocked:  " + data.cupidunlock + "<br>Rainbow Unlocked:  " + data.rainbowunlock +
            "<br>Music Unlocked:  " + data.musicunlock + "<br>Herobrine Unlock  " + data.herobrineunlock 
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 
        
        } else if (document.getElementById("gameBox").value === "sp" || document.getElementById("gameBox").value === 'Splegg') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/sp`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive One in the Chamber Stats<hr>Victories:  " + data.victories + "<br>Games Played:  " + data.gamesplayed + "<br>Eggs Fired:  " + data.eggsfired
            + "<br>Blocks Destroyed:  " + data.blocksdestroyed + "<br>Deaths:  " + data.deaths + "<br>Points:  " + data.points + "<br>Time Alive:  " + data.timealive + "<br>Rainbow Eggs:  " + data.rainboweggs +
            "<br>Sheep Unlocked:  " + data.sheepunlock + "<br>Shovel Upgrade  " + data.shovelupgrade 
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "timv" || document.getElementById("gameBox").value === 'Trouble in Mineville') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/timv`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Trouble in Mineville Stats<hr>Total Points:  " + data.total_points + "<br>Most Points:  " + data.most_points + "<br>Role Points:  " + data.role_points
            + "<br>T Point:  " + data.t_points + "<br>I Points:  " + data.i_points + "<br>D Points:  " + data.d_points + "<br>Active Detective Stick:  " + data.active_detectivestick + "<br>Detective Sticks:  " + data.detectivesticks +
            "<br>Active Flare Upgrade:  " + data.active_flareupgrade + "<br>Flare Upgrade  " + data.flareupgrade + "<br>Detective Book:  " + data.detectivebook 
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "sky" || document.getElementById("gameBox").value === 'SkyWars') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/sky`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive SkyWars Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Games Played:  " + data.gamesplayed
            + "<br>Kills:  " + data.kills + "<br>Deaths:  " + data.deaths + "<br>Most Points:  " + data.most_points + "<br>Time Alive:  " + data.timealive
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 
        
        } else if (document.getElementById("gameBox").value === "lab" || document.getElementById("gameBox").value === 'The Lab') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/lab`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive The Lab Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Games Played:  " + data.gamesplayed
            + "<hr><strong>Total Game Victories</strong><br>Electric Floor:  " + data.game_victories.ELECTRICFLOOR + "<br>Snowman:  " + data.game_victories.SNOWMAN + "<br>Rocket Race:  " + data.game_victories.ROCKETRACE + "<br>Breaking Blocks:  " + data.game_victories.BREAKINGBLOCKS +
            "<br>Splegg:  " + data.game_victories.SPLEGG + "<br>Catastrophic:  " + data.game_victories.CATASTROPHIC + "<br>Fight:  " + data.game_victories.FIGHT
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "draw" || document.getElementById("gameBox").value === 'Draw It') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/draw`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive DRAW Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Games Played:  " + data.gamesplayed
            + "<br>Total Correct Guesses:  " + data.correct_guesses + "<br>Total Incorrect Guesses:  " + data.incorrect_guesses + "<br>Skips:  " + data.skips
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "ef" || document.getElementById("gameBox").value === 'Electric Floor') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/ef`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Electric Floor Stats<hr>Victories:  " + data.victories + "<br>Outlived:  " + data.outlived + "<br>Games Played:  " + data.gamesplayed
            + "<br>Points:  " + data.points + "<br>Blocks Activated:  " + data.blocksactivated + "<br>Title:  " + data.title
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "grav" || document.getElementById("gameBox").value === 'Gravity') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/grav`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Gravity Stats<hr>Victories:  " + data.victories + "<br>Points:  " + data.points + "<br><hr><strong>Map Records</strong><br>Library:  " + data.maprecords.LIBRARY
            + "<br>Mobs:  " + data.maprecords.MOBS + "<br>Drain:  " + data.maprecords.DRAIN + "<br>Wave:  " + data.maprecords.WAVE + "<br>Toys:  " + data.maprecords.TOYS + "<br>Rhythm:  " + data.maprecords.RHYTHM + "<br>Pacman  " + data.maprecords.PACMAN +
            "<br>Floatlands:  " + data.maprecords.FLOATLANDS + "<br>Hypnosis:  " + data.maprecords.HYPNOSIS + "<br>Deep Sea:  " + data.maprecords.DEEP_SEA + "<br>Plants:  " + data.maprecords.PLANTS + "<br>Meteor" + data.maprecords.METEOR +
            "<br>Lab:  " + data.maprecords.LAB + "<br>Ruins:  " + data.maprecords.RUINS + "<br>Pyramid:  " + data.maprecords.PYRAMID + "<br>Tetris:  " + data.maprecords.TETRIS + "<br>Trees:  " + data.maprecords.TREES +
            "<br>Arctic:  " + data.maprecords.ARCTIC + "<br>Factory:  " + data.maprecords.FACTORY + "<br>Lush:  " + data.maprecords.LUSH + "<br>Rain:  " + data.maprecords.RAIN + "<br>Arachnophobia:  " + data.maprecords.ARACHNOPHOBIA +
            "<br>Overgrown:  " + data.maprecords.OVERGROWN
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "gnt" || document.getElementById("gameBox").value === 'SkyGiants') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/gnt`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive SkyGiants Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Games Played:  " + data.games_played +
            "<br>Kills:  " + data.kills + "<br>Deaths:  " + data.deaths + "<br>Gold Earned:  " + data.gold_earned + "<br>Beasts Slain:  " + data.beasts_slain + "<br>Shutdowns:  " + data.shutdowns + "<br>Title:  " + data.title
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "spl" || document.getElementById("gameBox").value === 'Sploop') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/spl`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Sploop Stats<hr>Total Points:  " + data.total_points + "<br>Victories:  " + data.victories + "<br>Games Played:  " + data.games_played +
            "<br>Kills:  " + data.kills + "<br>Deaths:  " + data.deaths + "<br>Blocks Painted:  " + data.blocks_painted + "<br>Ultimates Earned:  " + data.ultimates_earned + "<br>Title:  " + data.title
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 

        } else if (document.getElementById("gameBox").value === "mimv" || document.getElementById("gameBox").value === 'Murder in Mineville') {
            const apiURL = `https://api.hivemc.com/v1/player/${playerName}/mimv`;
            const data = await fetch(apiURL).then(response => response.json());
            document.querySelector("#panel").innerHTML = "<img src=" + avatarURL + playerName + "><br>" + playerName + "'s Hive Murder in MineVille Stats<hr>Total Points:  " + data.total_points + "<br>Games Played:  " + data.games_played + "<br>Victories:  " + data.victories +
            "<br>Kills:  " + data.kills + "<br>Deaths:  " + data.deaths + "<br>Last Used Emote:  " + data.lastUsedEmote + "<br>Preferred Emote Menu:  " + data.preferredEmoteSelectorMenu + "<br>Title:  " + data.title
            
            var panel = document.getElementById("panel");
            panel.style.display = "block";

            document.querySelector("#link").innerHTML = "<a href=" + apiURL + ">Raw JSON Link"
            var link = document.getElementById("link");
            link.style.display = "block"; 
        }