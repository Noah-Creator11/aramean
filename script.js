window.addEventListener('load', function() {
    var apkListElement = document.getElementById('apkList');
  
    // Dummy data for APKs
    var apkData = [
      { name: 'Minecraft', url: 'https://files.apkmodget.com/games/minecraft-1-20-10-20-apkmodget.com.apk' },
      { name: 'Roblox', url: 'https://files.apkmodget.com/games/roblox-mod-apk-v2.525.378-apkmodget.com.apk' },
      { name: 'Subway Surfers', url: 'https://files.apkmodget.com/games/subway-surfers-mod-apk-v3.12.0-apkmodget.com.apk' },
      { name: 'Fortnite', url: 'https://dw57.uptodown.com/dwn/_q-mArxWXcBoDrCcJIrj_umbBbMwS8ubOjR-YmP5QSEknBZpT-Inak_Am2pL0sDzXGID3TpZf72vzcK_ZUzvw8QaPu0pONvOGNJbFjfpmVQosIWXBCzF2Ttd7lQqW6fs/WEJyALWMJL9yDeYU-Ntb54GEclEwP4_nC6hHB7cEJ6TCg_9HY98MxHbAunfMLbTxV5omt3YZRyaIIDWlRZyqlpOOnFyyjc3Knac0-3IwJqtOqFWSXjSokPqv5molkRO4/mOO1n8gpkGZ6ezVs_5KJ8tzVAEGnEgx5B-9R9GS_dJl4PetWroxKRBsfdlX2nCXtXTQb-fbZhZFQ5Ic-vIcpz-IvJ6xybVgf76t0TIlZgFs=/fortnite-25-11-0-26227037-android.apk' },
      { name: 'Among Us', url: 'https://files.apkmodget.com/games/among-us-mod-2022.7.12-apkmodget.com.apk' },
      { name: 'Call of Duty', url: 'https://d-e03.winudf.com/b/XAPK/Y29tLmFjdGl2aXNpb24uY2FsbG9mZHV0eS5zaG9vdGVyXzE0ODY5XzUzMTFiYzk?_fn=Q2FsbCBvZiBEdXR5IE1vYmlsZSBTZWFzb24gNl8xLjAuMzlfQXBrcHVyZS54YXBr&_p=Y29tLmFjdGl2aXNpb24uY2FsbG9mZHV0eS5zaG9vdGVy&download_id=1638203410185600&is_hot=true&k=d5a7be8f73974b6bc90545a3b7bfd2a264afb177&uu=https%3A%2F%2Fd-32.winudf.com%2Fb%2FXAPK%2FY29tLmFjdGl2aXNpb24uY2FsbG9mZHV0eS5zaG9vdGVyXzE0ODY5XzUzMTFiYzk%3Fk%3D202e552e6158da83ca90195a56e0e5ef64afb177' },
      { name: 'Brawl Stars', url: 'https://files.apkmodget.com/games/Brawl-Stars-43.238-apkmodget.com.apk' },
      { name: 'TikTok (Coins)', url: 'https://files.apkmodget.com/apps/TikTok-99.0.00-apkmodget.com.apk' },
      { name: 'Clash Royale', url: 'https://files.apkmodget.com/games/clash-royale-mod-apk-v3.3186.7-apkmodget.com.apk' },
      { name: 'Clash of Clans', url: 'https://files.apkmodget.com/games/clash-of-clans-mod_15.292.17-apkmodget.com.apk' },
      { name: 'Youtube (Premium)', url: 'https://files.apkmodget.com/apps/YouTube_18.18.36-apkmodget.com.apk' },
      { name: 'Spotify (Premium)', url: 'https://files.apkmodget.com/apps/Spotify_8.8.48.523-apkmodget.com.apk' },
      { name: 'Smashy Road Wanted 2 (SRW2)', url: 'https://d-e03.winudf.com/b/APK/Y29tLnJrZ2FtZXMuYmFzaXNnYW1lXzc0X2Q0ZTMyNDEy?_fn=U21hc2h5IFJvYWQ6IFdhbnRlZCAyXzEuNDRfQXBrcHVyZS5hcGs&_p=Y29tLnJrZ2FtZXMuYmFzaXNnYW1l&download_id=1459900260970419&is_hot=false&k=2af8ba196bde937350495c6fb0f565db64afb7fb&uu=https%3A%2F%2Fd-04.winudf.com%2Fb%2FAPK%2FY29tLnJrZ2FtZXMuYmFzaXNnYW1lXzc0X2Q0ZTMyNDEy%3Fk%3D9ed5bf6ddc64e8a28fb630f868f0fe1064afb7fb' },
      { name: 'Mob Controll', url: 'https://files.getmodsapk.com/ROOT/All%20Documents%20File//Folder%2011/Mob%20Control//Mob-Control-v2.56.0-MOD-MENU-GMA-(Getmodsapk.com).apk' },
      { name: 'Stealth Master', url: 'https://files.apkmodget.com/games/stealth-master-mod-1.11.9-apkmodget.com.apk' },
      { name: 'Netflifx', url: 'https://files.apkmodget.com/apps/netflix-v8.67.1-apkmodget.com.apk' },
      { name: 'Solar Smash', url: 'https://files.apkmodget.com/games/Solar-Smash-1.8.9-apkmodget.com.apk' },
      { name: 'The Catapult 2', url: 'https://files.apkmodget.com/games/the-catapult-2-mod-apk-v7.1.4-apkmodget.com.apk' },
      { name: 'Stick War legacy', url: 'https://files.apkmodget.com/games/stick-war-legacy-mod_2023.1.7-apkmodget.com.apk' },
      { name: 'Sim City Build', url: 'https://files.apkmodget.com/games/simcity-buildit-mod-apk-v1.41.5.104402-apkmodget.com.apk' },
      { name: 'Angry Birds 2', url: 'https://files.apkmodget.com/games/angry-birds-2-mod-apk-v3.12.1-apkmodget.com.apk' },
      { name: 'Hill Climb Racing 2', url: 'https://files.apkmodget.com/games/hill-climb-racing-2-mod-apk-v1.55.3-apkmodget.com.apk' },
      { name: 'Coin Master', url: 'https://files.apkmodget.com/games/Coin-Master-v3.4.6-apkmodget.com.apk' },
      { name: 'Magic Tiles 3', url: 'https://files.apkmodget.com/apps/magic-tiles-3-mod-apk-v9.044.005-apkmodget.com.apk' },
      { name: 'FIFA', url: 'https://files.apkmodget.com/games/fifa-mobile-apk-v18.1.01-apkmodget.com.apk' },
      { name: 'Fruit Ninja', url: 'https://files.apkmodget.com/games/fruit-ninja-mod-3.17.0-apkmodget.com.apk' },
      { name: 'Toca Life (Ausstehend)', url: 'https://files.apkmodget.com/apps/magic-tiles-3-mod-apk-v9.044.005-apkmodget.com.apk' },
      { name: 'Genshin Impact', url: 'https://files.apkmodget.com/games/Genshin-Impact-1.0.0-apkmodget.com.apk' },
      {name: 'Plants vs Zombies 2 (PVZ)', url: 'https://files.apkmodget.com/games/plants-vs-zombies-2-mod-apk-v10.5.2-apkmodget.com.apk' },
      { name: 'Bowmasters', url: 'https://files.apkmodget.com/games/Bowmasters-2.15.17-apkmodget.com.apk' },
      { name: 'Bouncemasters', url: 'https://files.apkmodget.com/games/bouncemasters-mod-1.4.8-apkmodget.com.apk' },
      { name: 'Geometry dash', url: 'https://files.apkmodget.com/games/geometry-dash-mod-apk-v2.111-apkmodget.com.apk' },
      { name: 'Redball', url: 'https://files.apkmodget.com/games/red-ball-4-mod-apk-v1.5-apkmodget.com.apk' },
      { name: 'Geometry dash Ice', url: 'https://files.apkmodget.com/games/geometry-dash-subzero-apk-v2.2.12-apkmodget.com.apk' },
      { name: 'Tomb of the Mask', url: 'https://apkdata.a56b31353d7c030e6002c8fb6324539f.r2.cloudflarestorage.com/d2/Game/2023/T6/Tomb%20of%20The%20mask_v1.12.1_mod_apkdone.com.apk?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=39841b1dab4483f633cdb074881195a3%2F20230712%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20230712T122452Z&X-Amz-Expires=7200&X-Amz-Signature=bb419c985565422e64695d4a4a691179806ca6aa43d70a2b570b417701a754f4&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3DTomb%20of%20The%20mask_v1.12.1_mod_apkdone.com.apk&x-id=GetObject' },
      { name: 'Idle Miner', url: 'https://files.apkmodget.com/games/idle-miner-tycoon-mod-apk-v3.84.0-apkmodget.com.apk' },
      { name: 'Stumble Guys', url: 'https://files.apkmodget.com/games/stumble-guys-mod-apk-v0.51.4-apkmodget.com.apk' },
      { name: 'Snake.io', url: 'https://files.apkmodget.com/games/snake-io-mod-apk-v1.18.51-apkmodget.com.apk' },
      { name: 'Fall Guys', url: 'https://files.apkmodget.com/games/Fall-Guys-Ultimate-Knockout-1.0.4-apkmodget.com.apk' },
      { name: 'Temple run', url: 'https://files.apkmodget.com/games/Temple-Final-Run-3-1.0.1-apkmodget.com.apk' },
      { name: 'Five Nights at Freddy', url: 'https://files.apkmodget.com/games/five-nights-at-freddys-3-apk-v1.07-apkmodget.com.apk' },
      { name: 'Toca Hair Salon (Ausstehend)', url: 'https://files.apkmodget.com/games/Temple-Final-Run-3-1.0.1-apkmodget.com.apk' },
      { name: 'Toca lab', url: 'https://files.apkmodget.com/games/toca-lab-elements-apk-v2.2.2-apkmodget.com.apk' },
      { name: 'Monopoly', url: 'https://files.apkmodget.com/games/monopoly-mod-1.7.14-apkmodget.com.apk' },
      { name: 'Candy Crush', url: 'https://files.apkmodget.com/games/candy-crush-saga-mod-apk-v1.251.1.1-apkmodget.com.apk' },
      { name: 'Sonic Original', url: 'https://files.apkmodget.com/games/sonic-dash-mod-5.6.0-apkmodget.com.apk' },
      { name: 'Sonic Forces', url: 'https://files.apkmodget.com/games/Spider-Man-Ultimate-Power-Original-v4.10.8-apkmodget.com.apk' },
      { name: 'GTA 5 (PC port to Device)', url: 'https://files.apkmodget.com/games/GTA5-v1.08-apkmodget.com.apk' },
      { name: 'UNO', url: 'https://files.apkmodget.com/games/uno-mod-apk-v1.10.9439-apkmodget.com.apk' },
      { name: 'Tiles Hop music', url: 'https://files.apkmodget.com/games/tiles-hop-mod-apk-3.9.8-apkmodget.com.apk' },
      { name: 'Going Balls', url: 'https://files.apkmodget.com/games/going-balls-mod-apk-v1.53-apkmodget.com.apk' },
      { name: 'Lords mobile', url: 'https://files.apkmodget.com/games/lords-mobile-2.83-apkmodget.com.apk' },
      { name: 'Bloons TD 6', url: 'https://files.apkmodget.com/games/bloons-td-6-mod-32.3-apkmodget.com.apk' },
      { name: 'Kirby (Original)', url: 'https://dw38.uptodown.com/dwn/73rlcpvaVPUBjozVpXreocMS6bgX2P5nqU51xmfMkKJ3sDXviYC60rmr6bVxP_8eDvGHX4ph-tNCoRFoGnJN33t_AfV0qMSXCxMaWJvaAx72sg-GF0MVSBY7KevApnO2/xlHI-oWrVfxSJIn2tPqX8V2vA6s1CqV154GgXzzflFEm4Z5Bs90TmxqghptJ8J0CDXIkkduMtE1WRQE5Pkubm12sWp10SLY-5HxvXRl2P2loWzkYkgTWu4n-Deo5pDqp/u7rHmHyJXbGHpIzqCBLV3VUfeXs0NePbnB4wIQoh7Pfhz1nUVv79zn-AaaLP9oEmvIOf7aCmKIu-WBF8RFX27A==/kirby-original-2-9.apk' },
      { name: 'Mario run', url: 'https://files.apkmodget.com/games/super-mario-bros-apkmodget.com.apk' },
    ];
  
    // Generate APK list
   apkData.forEach(function(apk) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      link.textContent = apk.name;
      link.href = apk.url;
      listItem.appendChild(link);
      apkListElement.appendChild(listItem);
    });
  });