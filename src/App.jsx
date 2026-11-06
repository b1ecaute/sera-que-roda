import React, { useState, useMemo } from "react";
import "./index.css";

// ======================================================
// BANCO DE JOGOS
// ======================================================

const gameData = [
  ["Counter-Strike 2", "Competitivo", "GTX 1650", 8, 1.0, "730"],
  ["Valorant", "Competitivo", "GT 1030", 4, 0.45, 0],
  ["Fortnite", "Competitivo", "GTX 960", 8, 0.85, 0],
  ["League of Legends", "Competitivo", "GT 730", 4, 0.35, 0],
  ["Dota 2", "Competitivo", "GT 1030", 4, 0.45, "570"],
  ["Apex Legends", "Competitivo", "GTX 1650", 8, 1.0, "1172470"],
  ["Rainbow Six Siege", "Competitivo", "GTX 1650", 8, 0.85, "359550"],
  ["Overwatch 2", "Competitivo", "GTX 1650", 8, 0.85, 0],
  ["Rocket League", "Competitivo", "GT 1030", 4, 0.4, "252950"],
  ["PUBG: Battlegrounds", "Competitivo", "GTX 1650", 8, 1.0, "578080"],
  ["Call of Duty: Warzone", "Competitivo", "RTX 2060", 16, 1.5, 0],
  ["Team Fortress 2", "Competitivo", "GT 710", 4, 0.25, "440"],
  ["Paladins", "Competitivo", "GT 730", 4, 0.4, "444090"],
  ["Brawlhalla", "Competitivo", "GT 710", 4, 0.2, "291550"],
  ["THE FINALS", "Competitivo", "RTX 2060", 16, 1.4, "2073850"],
  ["Marvel Rivals", "Competitivo", "RTX 2060", 16, 1.5, "2767030"],
  ["Deadlock", "Competitivo", "GTX 1650", 8, 1.0, "1422450"],
  ["War Thunder", "Competitivo", "GTX 750 Ti", 8, 0.55, "236390"],
  ["World of Tanks", "Competitivo", "GT 1030", 4, 0.4, "1407200"],
  ["Escape from Tarkov", "Competitivo", "RTX 2060", 16, 1.5, 0],

  ["Grand Theft Auto V", "Mundo aberto", "GTX 1630", 8, 0.85, "271590"],
  ["Red Dead Redemption 2", "Mundo aberto", "GTX 1060", 12, 1.3, "1174180"],
  ["Cyberpunk 2077", "Mundo aberto", "RTX 2060", 16, 1.5, "1091500"],
  ["The Witcher 3", "Mundo aberto", "GTX 1060", 8, 1.0, "292030"],
  ["Forza Horizon 5", "Mundo aberto", "GTX 1070", 16, 1.0, "1551360"],
  ["Forza Horizon 4", "Mundo aberto", "GTX 970", 8, 0.8, "1293830"],
  ["Assassin's Creed Valhalla", "Mundo aberto", "GTX 1060", 8, 1.2, "2208920"],
  ["Assassin's Creed Odyssey", "Mundo aberto", "GTX 970", 8, 1.0, "812140"],
  ["Assassin's Creed Origins", "Mundo aberto", "GTX 960", 8, 0.85, "582160"],
  ["Watch Dogs 2", "Mundo aberto", "GTX 970", 8, 1.0, "447040"],
  ["Far Cry 5", "Mundo aberto", "GTX 970", 8, 0.9, "552520"],
  ["Far Cry 6", "Mundo aberto", "GTX 1060", 8, 1.1, "2369390"],
  ["Days Gone", "Mundo aberto", "GTX 1060", 8, 1.0, "1259420"],
  ["Horizon Zero Dawn", "Mundo aberto", "GTX 1060", 8, 1.0, "1151640"],
  ["Horizon Forbidden West", "Mundo aberto", "RTX 2060", 16, 1.4, "2420110"],
  ["Dying Light 2", "Mundo aberto", "GTX 1060", 8, 1.2, "534380"],
  ["No Man's Sky", "Mundo aberto", "GTX 960", 8, 0.9, "275850"],
  ["The Elder Scrolls V: Skyrim", "Mundo aberto", "GT 1030", 8, 0.5, "489830"],
  ["Kingdom Come: Deliverance", "Mundo aberto", "GTX 1060", 8, 1.0, "379430"],
  ["Kingdom Come: Deliverance II", "Mundo aberto", "RTX 2060", 16, 1.4, "1771300"],

  ["God of War", "Ação e aventura", "GTX 1060", 8, 1.0, "1593500"],
  ["God of War Ragnarök", "Ação e aventura", "RTX 2060", 16, 1.3, "2322010"],
  ["Marvel's Spider-Man Remastered", "Ação e aventura", "GTX 1060", 16, 1.1, "1817070"],
  ["Marvel's Spider-Man: Miles Morales", "Ação e aventura", "GTX 1060", 16, 1.1, "1817190"],
  ["Uncharted: Legacy of Thieves", "Ação e aventura", "GTX 1060", 16, 1.1, "1659420"],
  ["The Last of Us Part I", "Ação e aventura", "RTX 2060", 16, 1.4, "1888930"],
  ["The Last of Us Part II Remastered", "Ação e aventura", "RTX 2060", 16, 1.5, "2531310"],
  ["Hogwarts Legacy", "Ação e aventura", "RTX 2060", 16, 1.4, "990080"],
  ["Elden Ring", "Ação e aventura", "GTX 1060", 12, 1.0, "1245620"],
  ["Black Myth: Wukong", "Ação e aventura", "RTX 3060", 16, 1.7, "2358720"],
  ["Sekiro: Shadows Die Twice", "Ação e aventura", "GTX 970", 8, 0.85, "814380"],
  ["Lies of P", "Ação e aventura", "GTX 1060", 8, 1.0, "1627720"],
  ["Hollow Knight", "Ação e aventura", "GT 710", 4, 0.2, "367520"],
  ["Cuphead", "Ação e aventura", "GT 710", 4, 0.2, "268910"],
  ["Ori and the Will of the Wisps", "Ação e aventura", "GTX 750 Ti", 4, 0.45, "1057090"],

  ["Resident Evil 2 Remake", "Terror", "GTX 960", 8, 0.8, "883710"],
  ["Resident Evil 3 Remake", "Terror", "GTX 960", 8, 0.85, "952060"],
  ["Resident Evil 4 Remake", "Terror", "GTX 1060", 8, 1.1, "2050650"],
  ["Resident Evil Village", "Terror", "GTX 1060", 8, 0.9, "1196590"],
  ["Resident Evil 7", "Terror", "GTX 960", 8, 0.7, "418370"],
  ["Silent Hill 2 Remake", "Terror", "RTX 2060", 16, 1.4, "2124490"],
  ["Dead by Daylight", "Terror", "GTX 960", 8, 0.75, "381210"],
  ["Phasmophobia", "Terror", "GTX 970", 8, 0.8, "739630"],
  ["Outlast", "Terror", "GT 730", 4, 0.35, "238320"],
  ["Outlast 2", "Terror", "GTX 750 Ti", 4, 0.55, "414700"],
  ["The Forest", "Terror", "GTX 750 Ti", 8, 0.65, "242760"],
  ["Sons of the Forest", "Terror", "RTX 2060", 16, 1.4, "1326470"],

  ["EA Sports FC 25", "Esportes", "GTX 1050 Ti", 8, 0.7, "2669320"],
  ["EA Sports FC 26", "Esportes", "GTX 1650", 8, 0.85, 0],
  ["eFootball", "Esportes", "GTX 750 Ti", 8, 0.55, "1665460"],
  ["F1 24", "Corrida", "GTX 1060", 8, 1.0, "2488620"],
  ["F1 25", "Corrida", "RTX 2060", 16, 1.2, "3059520"],
  ["Forza Motorsport", "Corrida", "GTX 1070", 16, 1.2, "2440510"],
  ["Need for Speed Heat", "Corrida", "GTX 970", 8, 0.9, "1222680"],
  ["Need for Speed Unbound", "Corrida", "GTX 1060", 8, 1.0, "1846380"],
  ["The Crew Motorfest", "Corrida", "GTX 1060", 8, 1.0, "2698940"],
  ["Assetto Corsa", "Corrida", "GT 1030", 4, 0.45, "244210"],
  ["Assetto Corsa Competizione", "Corrida", "GTX 1060", 8, 0.95, "805550"],
  ["Euro Truck Simulator 2", "Simulação", "GT 1030", 4, 0.4, "227300"],

  ["Baldur's Gate 3", "RPG", "GTX 1060", 8, 1.1, "1086940"],
  ["Diablo IV", "RPG", "GTX 970", 8, 1.0, "2344520"],
  ["Path of Exile", "RPG", "GTX 750 Ti", 8, 0.65, "238960"],
  ["Path of Exile 2", "RPG", "RTX 2060", 16, 1.3, "2694490"],
  ["Final Fantasy XV", "RPG", "GTX 1060", 8, 1.0, "637650"],
  ["Final Fantasy VII Remake", "RPG", "GTX 1060", 8, 0.95, "1462040"],
  ["Monster Hunter: World", "RPG", "GTX 1060", 8, 0.9, "582010"],
  ["Monster Hunter Wilds", "RPG", "RTX 3060", 16, 1.7, "2246340"],
  ["Dragon's Dogma 2", "RPG", "RTX 2060", 16, 1.5, "2054970"],
  ["Diablo II: Resurrected", "RPG", "GTX 960", 8, 0.7, "1222670"],
  ["Civilization VI", "Estratégia", "GT 730", 4, 0.4, "289070"],
  ["Age of Empires II: Definitive Edition", "Estratégia", "GT 730", 4, 0.4, "813780"],
  ["Age of Empires IV", "Estratégia", "GTX 750 Ti", 8, 0.65, "1466860"],
  ["Cities: Skylines", "Simulação", "GTX 750 Ti", 8, 0.7, "255710"],
  ["Cities: Skylines II", "Simulação", "RTX 3060", 16, 1.7, "949230"],

  ["Minecraft", "Leve", "GTX 750 Ti", 4, 0.35, "1672970"],
  ["Roblox", "Leve", "GT 710", 4, 0.2, 0],
  ["The Sims 4", "Leve", "GT 730", 4, 0.3, "1222670"],
  ["Terraria", "Leve", "GT 710", 4, 0.15, "105600"],
  ["Stardew Valley", "Leve", "GT 710", 4, 0.12, "413150"],
  ["Among Us", "Leve", "GT 710", 4, 0.12, "945360"],
  ["Fall Guys", "Leve", "GT 1030", 4, 0.4, "1097150"],
  ["Left 4 Dead 2", "Leve", "GT 710", 4, 0.2, "550"],
  ["Portal 2", "Leve", "GT 710", 4, 0.15, "620"],
  ["Garry's Mod", "Leve", "GT 710", 4, 0.2, "4000"],
  ["Don't Starve Together", "Leve", "GT 710", 4, 0.15, "322330"],
  ["The Binding of Isaac: Rebirth", "Leve", "GT 710", 4, 0.12, "250900"],
  ["Cuphead", "Leve", "GT 710", 4, 0.2, "268910"],
  ["Unturned", "Leve", "GT 730", 4, 0.25, "304930"],
  ["Brawlhalla", "Leve", "GT 710", 4, 0.15, "291550"],

  ["Grand Theft Auto VI", "Lançamentos", "A definir", 0, null, 0, "Em breve"],
  ["The Witcher IV", "Lançamentos", "A definir", 0, null, 0, "Em breve"],
  ["Marvel's Wolverine", "Lançamentos", "A definir", 0, null, 0, "Em breve"],
  ["Fable", "Lançamentos", "A definir", 0, null, 0, "Em breve"],
  ["007 First Light", "Lançamentos", "A definir", 0, null, 0, "Em breve"],
  ["The Elder Scrolls VI", "Lançamentos", "A definir", 0, null, 0, "Em breve"]
];

const games = gameData.map(
  ([name, genre, gpu, ram, weight, steamId, status = "Disponível"]) => ({
    name,
    genre,
    gpu,
    ram,
    weight,
    upcoming: status === "Em breve",
    status,
    image: steamId
      ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamId}/header.jpg`
      : `https://placehold.co/600x338/151c2b/ffffff?text=${encodeURIComponent(name)}`
  })
);

// ======================================================
// CATÁLOGO DE PLACAS DE VÍDEO
// ======================================================

const gpuData = [
  ["GeForce 210", 5, "512 MB", 100],
  ["GT 610", 6, "1 GB", 120],
  ["GT 710", 7, "2 GB", 180],
  ["GT 730", 10, "2 GB", 220],
  ["GT 740", 13, "2 GB", 250],
  ["GT 1030 DDR4", 13, "2 GB", 300],
  ["GT 1030 GDDR5", 19, "2 GB", 350],
  ["GTX 650", 15, "1 GB", 200],
  ["GTX 750", 20, "1 GB", 250],
  ["GTX 750 Ti", 24, "2 GB", 300],
  ["GTX 950", 29, "2 GB", 350],
  ["GTX 960", 32, "2 GB", 400],
  ["GTX 1050", 32, "2 GB", 450],
  ["GTX 1050 Ti", 35, "4 GB", 500],
  ["GTX 1630", 30, "4 GB", 450],
  ["GTX 1650", 45, "4 GB", 650],
  ["GTX 1650 Super", 52, "4 GB", 750],
  ["GTX 1060 3GB", 43, "3 GB", 500],
  ["GTX 1060 6GB", 50, "6 GB", 600],
  ["GTX 970", 46, "4 GB", 450],
  ["GTX 980", 53, "4 GB", 550],
  ["GTX 980 Ti", 62, "6 GB", 650],
  ["GTX 1070", 60, "8 GB", 650],
  ["GTX 1070 Ti", 67, "8 GB", 750],
  ["GTX 1080", 73, "8 GB", 850],
  ["GTX 1080 Ti", 85, "11 GB", 1000],
  ["GTX 1660", 56, "6 GB", 750],
  ["GTX 1660 Super", 63, "6 GB", 850],
  ["GTX 1660 Ti", 65, "6 GB", 900],
  ["RTX 2060", 70, "6 GB", 950],
  ["RTX 2060 Super", 77, "8 GB", 1100],
  ["RTX 2070", 80, "8 GB", 1200],
  ["RTX 2070 Super", 88, "8 GB", 1300],
  ["RTX 2080", 94, "8 GB", 1450],
  ["RTX 2080 Super", 100, "8 GB", 1550],
  ["RTX 2080 Ti", 112, "11 GB", 1800],
  ["RTX 3050 6GB", 55, "6 GB", 900],
  ["RTX 3050 8GB", 62, "8 GB", 1000],
  ["RTX 3060 8GB", 72, "8 GB", 1200],
  ["RTX 3060 12GB", 82, "12 GB", 1400],
  ["RTX 3060", 82, "12 GB", 1400],
  ["RTX 3060 Ti", 95, "8 GB", 1600],
  ["RTX 3070", 105, "8 GB", 1800],
  ["RTX 3070 Ti", 115, "8 GB", 2000],
  ["RTX 3080 10GB", 130, "10 GB", 2300],
  ["RTX 3080 12GB", 138, "12 GB", 2500],
  ["RTX 3080 Ti", 145, "12 GB", 2700],
  ["RTX 3090", 155, "24 GB", 3200],
  ["RTX 3090 Ti", 165, "24 GB", 3500],
  ["RTX 4060", 95, "8 GB", 1600],
  ["RTX 4060 Ti 8GB", 110, "8 GB", 2000],
  ["RTX 4060 Ti 16GB", 112, "16 GB", 2300],
  ["RTX 4070", 130, "12 GB", 2800],
  ["RTX 4070 Super", 145, "12 GB", 3200],
  ["RTX 4070 Ti", 155, "12 GB", 3700],
  ["RTX 4070 Ti Super", 170, "16 GB", 4200],
  ["RTX 4080", 185, "16 GB", 5200],
  ["RTX 4080 Super", 195, "16 GB", 5500],
  ["RTX 4090", 240, "24 GB", 10000],
  ["Radeon HD 5450", 4, "1 GB", 100],
  ["Radeon HD 6670", 9, "1 GB", 150],
  ["Radeon HD 7750", 13, "1 GB", 180],
  ["Radeon R7 240", 10, "2 GB", 150],
  ["Radeon R7 250", 14, "2 GB", 180],
  ["Radeon R7 360", 20, "2 GB", 220],
  ["Radeon R9 270", 25, "2 GB", 250],
  ["Radeon R9 280X", 35, "3 GB", 300],
  ["RX 460", 25, "2 GB", 250],
  ["RX 470", 38, "4 GB", 350],
  ["RX 480", 43, "8 GB", 400],
  ["RX 550", 15, "4 GB", 250],
  ["RX 560", 25, "4 GB", 300],
  ["RX 570", 40, "4 GB", 350],
  ["RX 580 8GB", 47, "8 GB", 450],
  ["RX 590", 52, "8 GB", 500],
  ["RX 5500 XT", 50, "8 GB", 600],
  ["RX 5600 XT", 68, "6 GB", 750],
  ["RX 5700 XT", 78, "8 GB", 850],
  ["RX 6400", 38, "4 GB", 650],
  ["RX 6500 XT", 42, "4 GB", 700],
  ["RX 6600", 75, "8 GB", 1100],
  ["RX 6600 XT", 85, "8 GB", 1300],
  ["RX 6650 XT", 90, "8 GB", 1400],
  ["RX 6700 XT", 105, "12 GB", 1700],
  ["RX 6750 XT", 112, "12 GB", 1900],
  ["RX 6800", 125, "16 GB", 2300],
  ["RX 6800 XT", 140, "16 GB", 2600],
  ["RX 6900 XT", 155, "16 GB", 3000],
  ["RX 7600", 94, "8 GB", 1500],
  ["RX 7600 XT", 105, "16 GB", 1800],
  ["RX 7700 XT", 125, "12 GB", 2300],
  ["RX 7800 XT", 145, "16 GB", 2800],
  ["RX 7900 GRE", 165, "16 GB", 3500],
  ["RX 7900 XT", 185, "20 GB", 4300],
  ["RX 7900 XTX", 205, "24 GB", 5000],
  ["Intel UHD 610 (integrado)", 5, "Compartilhada", 0],
  ["Intel UHD 630 (integrado)", 9, "Compartilhada", 0],
  ["Intel UHD 730 (integrado)", 14, "Compartilhada", 0],
  ["Intel UHD 770 (integrado)", 20, "Compartilhada", 0],
  ["Radeon Vega 3 (integrado)", 10, "Compartilhada", 0],
  ["Radeon Vega 7 (integrado)", 22, "Compartilhada", 0],
  ["Radeon Vega 8 (integrado)", 25, "Compartilhada", 0],
  ["Radeon Vega 11 (integrado)", 28, "Compartilhada", 0],
  ["Radeon 610M (integrado)", 24, "Compartilhada", 0],
  ["Radeon 680M (integrado)", 45, "Compartilhada", 0],
  ["Radeon 780M (integrado)", 55, "Compartilhada", 0]
];

const gpus = gpuData.map(([name, score, memory, price]) => ({
  name, score, memory, price
}));

// ======================================================
// CATÁLOGO DE PROCESSADORES
// ======================================================

const cpuData = [
  ["Celeron G1610", 8, 2, 100],
  ["Celeron G1840", 10, 2, 120],
  ["Celeron G3900", 12, 2, 130],
  ["Celeron G3930", 13, 2, 140],
  ["Celeron G4900", 16, 2, 160],
  ["Pentium G4560", 20, 2, 180],
  ["Pentium G5400", 23, 2, 200],
  ["Pentium G6400", 25, 2, 220],
  ["Core i3-2100", 15, 2, 120],
  ["Core i5-2400", 23, 4, 150],
  ["Core i7-2600", 30, 4, 200],
  ["Core i5-3470", 28, 4, 180],
  ["Core i7-3770", 35, 4, 250],
  ["Core i5-4460", 32, 4, 180],
  ["Core i5-4590", 34, 4, 190],
  ["Core i7-4770", 40, 4, 250],
  ["Core i7-4790", 43, 4, 280],
  ["Core i3-6100", 30, 2, 180],
  ["Core i5-6400", 36, 4, 220],
  ["Core i7-6700", 48, 4, 300],
  ["Core i3-7100", 32, 2, 200],
  ["Core i5-7400", 40, 4, 250],
  ["Core i7-7700", 52, 4, 350],
  ["Core i3-8100", 38, 4, 250],
  ["Core i5-8400", 55, 6, 300],
  ["Core i7-8700", 68, 6, 400],
  ["Core i3-9100F", 42, 4, 250],
  ["Core i5-9400F", 58, 6, 350],
  ["Core i7-9700K", 78, 8, 550],
  ["Core i9-9900K", 90, 8, 700],
  ["Core i3-10100F", 48, 4, 350],
  ["Core i3-10100", 50, 4, 400],
  ["Core i5-10400F", 65, 6, 450],
  ["Core i7-10700K", 88, 8, 700],
  ["Core i9-10900K", 105, 10, 950],
  ["Core i5-11400F", 72, 6, 500],
  ["Core i5-11600K", 80, 6, 600],
  ["Core i7-11700K", 95, 8, 800],
  ["Core i9-11900K", 100, 8, 950],
  ["Core i3-12100F", 65, 4, 450],
  ["Core i3-12100", 68, 4, 500],
  ["Core i5-12400F", 85, 6, 650],
  ["Core i5-12400", 87, 6, 700],
  ["Core i5-12600K", 100, 10, 850],
  ["Core i7-12700F", 112, 12, 1000],
  ["Core i7-12700K", 120, 12, 1150],
  ["Core i9-12900K", 140, 16, 1500],
  ["Core i3-13100F", 70, 4, 550],
  ["Core i5-13400F", 105, 10, 850],
  ["Core i5-13500", 115, 14, 1000],
  ["Core i5-13600K", 130, 14, 1200],
  ["Core i7-13700F", 140, 16, 1450],
  ["Core i7-13700K", 150, 16, 1600],
  ["Core i9-13900K", 175, 24, 2200],
  ["Core i5-14400F", 110, 10, 950],
  ["Core i5-14600K", 140, 14, 1400],
  ["Core i7-14700K", 165, 20, 1900],
  ["Core i9-14900K", 185, 24, 2600],
  ["Athlon 200GE", 15, 2, 150],
  ["Athlon 3000G", 18, 2, 180],
  ["A6-9500", 10, 2, 100],
  ["A8-9600", 14, 4, 120],
  ["A10-9700", 16, 4, 150],
  ["A12-9800", 18, 4, 180],
  ["Ryzen 3 1200", 25, 4, 180],
  ["Ryzen 5 1400", 32, 4, 220],
  ["Ryzen 5 1600", 42, 6, 250],
  ["Ryzen 7 1700", 52, 8, 350],
  ["Ryzen 3 2200G", 30, 4, 250],
  ["Ryzen 5 2400G", 38, 4, 300],
  ["Ryzen 5 2600", 55, 6, 300],
  ["Ryzen 5 2600X", 60, 6, 350],
  ["Ryzen 7 2700", 68, 8, 400],
  ["Ryzen 7 2700X", 72, 8, 450],
  ["Ryzen 3 3100", 48, 4, 300],
  ["Ryzen 3 3200G", 35, 4, 300],
  ["Ryzen 3 3300X", 55, 4, 350],
  ["Ryzen 5 3400G", 45, 4, 350],
  ["Ryzen 5 3500", 58, 6, 350],
  ["Ryzen 5 3600", 65, 6, 400],
  ["Ryzen 5 3600X", 68, 6, 450],
  ["Ryzen 7 3700X", 82, 8, 600],
  ["Ryzen 7 3800X", 87, 8, 650],
  ["Ryzen 9 3900X", 105, 12, 850],
  ["Ryzen 9 3950X", 120, 16, 1100],
  ["Ryzen 3 4100", 50, 4, 350],
  ["Ryzen 5 4500", 58, 6, 400],
  ["Ryzen 5 4600G", 62, 6, 450],
  ["Ryzen 5 5500", 68, 6, 450],
  ["Ryzen 5 5600", 82, 6, 550],
  ["Ryzen 5 5600G", 75, 6, 600],
  ["Ryzen 5 5600X", 85, 6, 650],
  ["Ryzen 7 5700G", 88, 8, 750],
  ["Ryzen 7 5700X", 98, 8, 800],
  ["Ryzen 7 5800X", 105, 8, 900],
  ["Ryzen 7 5800X3D", 125, 8, 1200],
  ["Ryzen 9 5900X", 125, 12, 1300],
  ["Ryzen 9 5950X", 140, 16, 1600],
  ["Ryzen 5 7500F", 115, 6, 950],
  ["Ryzen 5 7600", 120, 6, 1100],
  ["Ryzen 5 7600X", 125, 6, 1200],
  ["Ryzen 7 7700", 135, 8, 1450],
  ["Ryzen 7 7700X", 140, 8, 1550],
  ["Ryzen 7 7800X3D", 165, 8, 1900],
  ["Ryzen 9 7900", 155, 12, 1900],
  ["Ryzen 9 7900X", 165, 12, 2100],
  ["Ryzen 9 7950X", 185, 16, 2700],
  ["Ryzen 9 7950X3D", 195, 16, 3200],
  ["Ryzen 5 9600X", 135, 6, 1500],
  ["Ryzen 7 9700X", 155, 8, 1900],
  ["Ryzen 7 9800X3D", 190, 8, 2600],
  ["Ryzen 9 9900X", 180, 12, 2400],
  ["Ryzen 9 9950X", 205, 16, 3300]
];

const cpus = cpuData.map(([name, score, cores, price]) => ({
  name, score, cores, price
}));

const menu = [
  ["home", "Início", "⌂"],
  ["games", "Banco de jogos", "🎮"],
  ["test", "Teste seu PC", "⚡"],
  ["internet", "Teste de internet", "🌐"],
  ["builder", "Monte seu PC", "🛠"]
];

const categories = [
  "Todas",
  "Competitivo",
  "Mundo aberto",
  "Ação e aventura",
  "Terror",
  "Corrida",
  "Esportes",
  "RPG",
  "Estratégia",
  "Simulação",
  "Leve",
  "Lançamentos"
];

// ======================================================
// COMPONENTES AUXILIARES
// ======================================================

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Espaços reservados para anúncios.
// Ainda não são anúncios reais do Google AdSense.

function AdSlot({ label = "Espaço reservado para anúncio" }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: 110,
        margin: "28px 0",
        padding: 18,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        background: "rgba(15, 23, 42, 0.45)",
        border: "1px dashed rgba(56, 189, 248, 0.35)",
        borderRadius: 14,
        textAlign: "center"
      }}
    >
      <span style={{
        color: "#38BDF8",
        fontSize: 10,
        fontWeight: 900,
        letterSpacing: 2
      }}>
        PUBLICIDADE
      </span>
      <span style={{ color: "#94A3B8", fontSize: 12 }}>
        {label}
      </span>
    </div>
  );
}

// Impede que as requisições do teste fiquem travadas indefinidamente.

async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }
}

// ======================================================
// TESTE DE INTERNET
// ======================================================

function InternetTest() {
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState("");
  const [phase, setPhase] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [animation, setAnimation] = useState(0);

  const measurePing = async () => {
    const values = [];
    let failures = 0;

    for (let i = 0; i < 10; i++) {
      const start = performance.now();

      try {
        const response = await fetchWithTimeout(
          `https://speed.cloudflare.com/__down?bytes=0&t=${Date.now()}-${i}`,
          { cache: "no-store" },
          8000
        );

        if (!response.ok) throw new Error("Falha na medição");

        values.push(performance.now() - start);
      } catch {
        failures++;
      }
    }

    const average = values.length
      ? values.reduce((a, b) => a + b, 0) / values.length
      : null;

    const jitter = values.length > 1
      ? values.slice(1).reduce(
          (total, value, index) =>
            total + Math.abs(value - values[index]),
          0
        ) / (values.length - 1)
      : null;

    return {
      ping: average === null ? null : Math.round(average),
      jitter: jitter === null ? null : Math.round(jitter),
      failures
    };
  };

  const getRank = (data) => {
    // Não classifica uma medição incompleta como excelente.
    if (data.ping === null || data.jitter === null) {
      return {
        name: "INCOMPLETO",
        icon: "⚠️",
        color: "#FBBF24",
        score: 0
      };
    }

    if (
      data.ping <= 20 &&
      data.jitter <= 5 &&
      data.failures === 0 &&
      data.download >= 100
    ) {
      return { name: "ELITE", icon: "👑", color: "#FACC15", score: 100 };
    }

    if (
      data.ping <= 40 &&
      data.jitter <= 12 &&
      data.failures === 0
    ) {
      return { name: "DIAMANTE", icon: "💎", color: "#38BDF8", score: 90 };
    }

    if (
      data.ping <= 70 &&
      data.jitter <= 20 &&
      data.failures <= 1
    ) {
      return { name: "OURO", icon: "🥇", color: "#F59E0B", score: 75 };
    }

    if (
      data.ping <= 110 &&
      data.jitter <= 35 &&
      data.failures <= 2
    ) {
      return { name: "PRATA", icon: "🥈", color: "#CBD5E1", score: 60 };
    }

    return { name: "BRONZE", icon: "🥉", color: "#CD7F32", score: 40 };
  };

  const getGames = (data) => {
    const validMeasurement =
      data.ping !== null && data.jitter !== null;

    return [
      {
        name: "Valorant",
        description: "FPS competitivo",
        good: validMeasurement &&
          data.ping <= 50 &&
          data.jitter <= 15 &&
          data.failures === 0
      },
      {
        name: "Counter-Strike 2",
        description: "FPS competitivo",
        good: validMeasurement &&
          data.ping <= 50 &&
          data.jitter <= 15 &&
          data.failures === 0
      },
      {
        name: "Fortnite",
        description: "Battle Royale",
        good: validMeasurement &&
          data.ping <= 80 &&
          data.jitter <= 25 &&
          data.failures <= 1
      },
      {
        name: "Call of Duty: Warzone",
        description: "Battle Royale",
        good: validMeasurement &&
          data.ping <= 80 &&
          data.jitter <= 25 &&
          data.failures <= 1
      },
      {
        name: "League of Legends",
        description: "MOBA",
        good: validMeasurement &&
          data.ping <= 100 &&
          data.jitter <= 30 &&
          data.failures <= 2
      }
    ];
  };

  const startTest = async () => {
    if (testing) return;

    setTesting(true);
    setResult(null);
    setError("");
    setAnimation(0);

    try {
      setPhase("ping");
      setProgress("Analisando latência e estabilidade...");
      setAnimation(20);

      const latency = await measurePing();

      if (latency.ping === null) {
        throw new Error("Não foi possível conectar ao servidor.");
      }

      setPhase("download");
      setProgress("Analisando velocidade de download...");
      setAnimation(45);

      const downloadStart = performance.now();

      const downloadResponse = await fetchWithTimeout(
        `https://speed.cloudflare.com/__down?bytes=10000000&t=${Date.now()}`,
        { cache: "no-store" },
        30000
      );

      if (!downloadResponse.ok) {
        throw new Error("Falha no download.");
      }

      const downloadData = await downloadResponse.arrayBuffer();

      if (!downloadData.byteLength) {
        throw new Error("O servidor não enviou dados para o teste.");
      }

      const downloadTime = (performance.now() - downloadStart) / 1000;

      if (downloadTime <= 0) {
        throw new Error("Tempo inválido no download.");
      }

      const download =
        (downloadData.byteLength * 8) / downloadTime / 1000000;

      setPhase("upload");
      setProgress("Analisando velocidade de upload...");
      setAnimation(75);

      const uploadData = new Blob([new Uint8Array(5000000)]);
      const uploadStart = performance.now();

      const uploadResponse = await fetchWithTimeout(
        "https://speed.cloudflare.com/__up",
        {
          method: "POST",
          body: uploadData
        },
        30000
      );

      if (!uploadResponse.ok) {
        throw new Error("Falha no upload.");
      }

      const uploadTime = (performance.now() - uploadStart) / 1000;

      if (uploadTime <= 0) {
        throw new Error("Tempo inválido no upload.");
      }

      const upload =
        (uploadData.size * 8) / uploadTime / 1000000;

      const data = {
        ...latency,
        download: Number(download.toFixed(2)),
        upload: Number(upload.toFixed(2)),
        loss: Math.round((latency.failures / 10) * 100),
        date: new Date().toLocaleString("pt-BR")
      };

      data.rank = getRank(data);

      setPhase("complete");
      setAnimation(100);
      setResult(data);
      setHistory(previous => [data, ...previous].slice(0, 5));
      setProgress("Diagnóstico concluído!");

    } catch (err) {
      let message = err.message;

      if (err.name === "AbortError") {
        message = "O teste demorou demais e foi interrompido. Tente novamente.";
      } else if (
        message === "Failed to fetch" ||
        message === "Load failed"
      ) {
        message = "Não foi possível acessar o servidor de teste. Verifique sua conexão e tente novamente.";
      }

      setError(
        message || "Não foi possível concluir o teste."
      );
      setPhase("idle");
      setProgress("");
    } finally {
      setTesting(false);
    }
  };

  const quality = result
    ? result.ping === null || result.jitter === null
      ? "MEDIÇÃO INCOMPLETA"
      : result.ping <= 30 && result.jitter <= 10 && result.failures === 0
      ? "CONEXÃO EXCELENTE"
      : result.ping <= 60 && result.jitter <= 20
      ? "CONEXÃO BOA"
      : result.ping <= 100
      ? "CONEXÃO MODERADA"
      : "CONEXÃO INSTÁVEL"
    : "AGUARDANDO TESTE";

  const games = result ? getGames(result) : [];

  const speed = result
    ? Math.min(result.download, 1000)
    : 0;

  const gauge = result
    ? Math.min((speed / 1000) * 100, 100)
    : animation;

  const panel = {
    background: "linear-gradient(145deg,#0b1222,#101d34)",
    border: "1px solid rgba(56,189,248,.2)",
    borderRadius: "18px",
    padding: "22px",
    color: "#E2E8F0",
    boxShadow: "0 12px 40px rgba(0,0,0,.22)"
  };

  const metric = {
    background: "rgba(30,41,59,.75)",
    border: "1px solid rgba(56,189,248,.12)",
    borderRadius: "14px",
    padding: "18px"
  };

  return (
    <section className="content-section page-section">
      <style>{`
        @keyframes cyberPulse {
          0%,100% { opacity:.45; transform:scale(.96); }
          50% { opacity:1; transform:scale(1.04); }
        }
        @keyframes radarSpin {
          from { transform:rotate(0deg); }
          to { transform:rotate(360deg); }
        }
        @keyframes cyberGlow {
          0%,100% { box-shadow:0 0 12px rgba(14,165,233,.15); }
          50% { box-shadow:0 0 35px rgba(14,165,233,.45); }
        }
        .cyber-panel { position:relative; overflow:hidden; }
        .cyber-panel:after {
          content:"";
          position:absolute;
          left:0; right:0; top:0;
          height:2px;
          background:linear-gradient(90deg,transparent,#38BDF8,transparent);
          opacity:.7;
        }
        .cyber-radar {
          position:relative;
          width:190px;
          height:190px;
          border-radius:50%;
          border:1px solid rgba(56,189,248,.45);
          background:
            radial-gradient(circle,transparent 22%,rgba(56,189,248,.12) 23%,transparent 24%),
            radial-gradient(circle,transparent 48%,rgba(56,189,248,.15) 49%,transparent 50%),
            radial-gradient(circle,transparent 72%,rgba(56,189,248,.2) 73%,transparent 74%),
            rgba(8,20,38,.9);
          animation:cyberGlow 3s infinite;
        }
        .cyber-radar:before {
          content:"";
          position:absolute;
          inset:0;
          border-radius:50%;
          background:conic-gradient(from 0deg,transparent 65%,rgba(34,211,238,.5),transparent);
          animation:radarSpin 3s linear infinite;
        }
        .cyber-radar:after {
          content:"";
          position:absolute;
          width:8px;
          height:8px;
          border-radius:50%;
          background:#38BDF8;
          box-shadow:0 0 15px #38BDF8;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
        }
        .cyber-button {
          width:100%;
          border:1px solid #38BDF8;
          border-radius:12px;
          background:linear-gradient(100deg,#075985,#0369A1,#2563EB);
          color:white;
          padding:16px;
          font-weight:900;
          letter-spacing:1px;
          cursor:pointer;
          transition:.2s;
          box-shadow:0 0 22px rgba(14,165,233,.2);
        }
        .cyber-button:hover { filter:brightness(1.2); transform:translateY(-2px); }
        .cyber-button:disabled { opacity:.6; cursor:wait; }
        .cyber-number { font-size:clamp(32px,6vw,52px); font-weight:900; color:#fff; line-height:1.1; }
        .cyber-muted { color:#94A3B8; font-size:12px; }
        .cyber-label { color:#38BDF8; font-size:11px; font-weight:800; letter-spacing:1.5px; }
        .cyber-rank { animation:cyberPulse 2.5s infinite; }
        .cyber-bar { height:8px; border-radius:20px; background:#1E293B; overflow:hidden; }
        .cyber-bar span { display:block; height:100%; border-radius:20px; transition:width .5s; background:linear-gradient(90deg,#06B6D4,#3B82F6,#A78BFA); }
        .cyber-game { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:13px; background:rgba(30,41,59,.65); border-radius:10px; margin-top:9px; border:1px solid rgba(148,163,184,.1); }
        .cyber-game-status { font-size:11px; font-weight:800; white-space:nowrap; }
        .cyber-gauge { width:190px; height:190px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:conic-gradient(#38BDF8 0%,#2563EB var(--gauge),#1E293B var(--gauge),#1E293B 100%); position:relative; }
        .cyber-gauge:before { content:""; position:absolute; inset:12px; background:#0B1222; border-radius:50%; }
        .cyber-gauge-content { position:relative; z-index:1; text-align:center; }
        @media(max-width:600px) {
          .cyber-radar,.cyber-gauge { width:160px;height:160px; }
          .cyber-game { align-items:flex-start; flex-direction:column; }
          .cyber-game-status { white-space:normal; }
        }
      `}</style>

      <SectionTitle
        eyebrow="NETWORK COMMAND CENTER"
        title="Teste sua internet"
        description="Descubra se sua conexão está pronta para dominar o mundo gamer."
      />

      <div
        style={{
          ...panel,
          marginBottom: 22,
          background: "linear-gradient(125deg,#071426,#102B4A,#10172A)"
        }}
        className="cyber-panel"
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 22
        }}>
          <div>
            <div className="cyber-label">SERÁ QUE RODA? // NETWORK SYSTEM</div>
            <h2 style={{ color: "#fff", margin: "8px 0", fontSize: 25 }}>
              GAMING NETWORK
            </h2>
            <div className="cyber-muted">
              CENTRAL DE DIAGNÓSTICO DE CONEXÃO
            </div>
          </div>

          <div style={{
            border: `1px solid ${
              error
                ? "rgba(239,68,68,.4)"
                : testing
                ? "rgba(250,204,21,.4)"
                : "rgba(34,197,94,.4)"
            }`,
            color: error ? "#FCA5A5" : testing ? "#FACC15" : "#4ADE80",
            padding: "8px 12px",
            borderRadius: 30,
            fontSize: 11,
            fontWeight: 900
          }}>
            ● {error
              ? "ERRO NO TESTE"
              : testing
              ? "ANALISANDO"
              : result
              ? "DIAGNÓSTICO CONCLUÍDO"
              : "SISTEMA PRONTO"}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 25,
          alignItems: "center"
        }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {testing ? (
              <div className="cyber-radar" />
            ) : (
              <div className="cyber-gauge" style={{
                "--gauge": `${gauge}%`
              }}>
                <div className="cyber-gauge-content">
                  <div className="cyber-label">DOWNLOAD</div>
                  <div className="cyber-number">
                    {result ? result.download : "--"}
                  </div>
                  <div className="cyber-muted">Mbps</div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="cyber-label">
              {testing ? "EXECUTANDO DIAGNÓSTICO" : "STATUS DA CONEXÃO"}
            </div>

            <h2 style={{
              color: "#fff",
              fontSize: 24,
              margin: "9px 0"
            }}>
              {testing
                ? "ANALISANDO..."
                : result
                ? quality
                : "READY TO PLAY?"}
            </h2>

            <p style={{ color: "#94A3B8", fontSize: 13, lineHeight: 1.6 }}>
              {testing
                ? progress
                : result
                ? "Seu diagnóstico de conexão foi concluído. Confira os indicadores e a avaliação gamer abaixo."
                : "Prepare sua conexão. Vamos verificar ping, jitter, download e upload."}
            </p>

            {testing && (
              <div style={{ margin: "18px 0" }}>
                <div className="cyber-bar">
                  <span style={{ width: `${animation}%` }} />
                </div>
                <div className="cyber-muted" style={{ marginTop: 7 }}>
                  {animation}% DO DIAGNÓSTICO
                </div>
              </div>
            )}

            <button
              className="cyber-button"
              onClick={startTest}
              disabled={testing}
            >
              {testing ? "◌ TESTE EM ANDAMENTO..." : "⚡ INICIAR DIAGNÓSTICO"}
            </button>
          </div>
        </div>

        {error && (
          <div style={{
            marginTop: 18,
            padding: 13,
            borderRadius: 10,
            background: "rgba(239,68,68,.12)",
            color: "#FCA5A5",
            fontSize: 13
          }}>
            ⚠️ {error}
          </div>
        )}
      </div>

      {result && (
        <>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(145px,1fr))",
            gap: 12,
            marginBottom: 22
          }}>
            {[
              { name: "PING", value: result.ping ?? "--", unit: "ms", icon: "◉", color: "#38BDF8" },
              { name: "JITTER", value: result.jitter ?? "--", unit: "ms", icon: "⌁", color: "#A78BFA" },
              { name: "DOWNLOAD", value: result.download, unit: "Mbps", icon: "↓", color: "#34D399" },
              { name: "UPLOAD", value: result.upload, unit: "Mbps", icon: "↑", color: "#F472B6" },
              { name: "FALHAS", value: result.failures, unit: "/ 10", icon: "◇", color: "#FBBF24" }
            ].map(item => (
              <div key={item.name} style={metric}>
                <div style={{
                  color: item.color,
                  fontSize: 20,
                  fontWeight: 900
                }}>
                  {item.icon}
                </div>
                <div className="cyber-label" style={{ marginTop: 8 }}>
                  {item.name}
                </div>
                <div style={{
                  fontSize: 25,
                  color: "#fff",
                  fontWeight: 900,
                  marginTop: 5
                }}>
                  {item.value}
                </div>
                <div className="cyber-muted">{item.unit}</div>
              </div>
            ))}
          </div>

          <div style={{
            ...panel,
            marginBottom: 22,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
            gap: 20,
            alignItems: "center"
          }}>
            <div style={{ textAlign: "center" }}>
              <div className="cyber-label">PATENTE DA CONEXÃO</div>
              <div className="cyber-rank" style={{ fontSize: 65, margin: "10px 0" }}>
                {result.rank.icon}
              </div>
              <h2 style={{
                color: result.rank.color,
                fontSize: 29,
                margin: 0,
                letterSpacing: 2
              }}>
                {result.rank.name}
              </h2>
              <div className="cyber-muted">CLASSIFICAÇÃO GAMER</div>
            </div>

            <div>
              <div className="cyber-label">PONTUAÇÃO DE CONEXÃO</div>
              <div style={{
                fontSize: 48,
                color: "#fff",
                fontWeight: 900,
                margin: "8px 0"
              }}>
                {result.rank.score}
                <small style={{ fontSize: 18, color: "#94A3B8" }}>/100</small>
              </div>
              <div className="cyber-bar">
                <span style={{ width: `${result.rank.score}%` }} />
              </div>
              <p style={{
                color: "#94A3B8",
                fontSize: 12,
                lineHeight: 1.6
              }}>
                Pontuação indicativa criada a partir dos resultados deste teste.
                Não representa uma certificação ou garantia de desempenho em jogos.
              </p>
            </div>
          </div>

          <div style={{ ...panel, marginBottom: 22 }}>
            <div className="cyber-label">🎮 GAME COMPATIBILITY SCANNER</div>
            <h3 style={{ color: "#fff", margin: "8px 0 4px" }}>
              Diagnóstico para jogos
            </h3>
            <p className="cyber-muted">
              Avaliação indicativa baseada em latência, jitter e falhas de teste.
            </p>

            {games.map(item => (
              <div className="cyber-game" key={item.name}>
                <div>
                  <strong style={{ color: "#E2E8F0", fontSize: 13 }}>
                    {item.name}
                  </strong>
                  <div className="cyber-muted">{item.description}</div>
                </div>
                <div className="cyber-game-status" style={{
                  color: item.good ? "#4ADE80" : "#FBBF24"
                }}>
                  {item.good ? "● CONEXÃO FAVORÁVEL" : "● PODE OSCILAR"}
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...panel, marginBottom: 22 }}>
            <div className="cyber-label">📡 RESULTADO DO DIAGNÓSTICO</div>
            <h3 style={{ color: "#fff", margin: "8px 0" }}>
              {quality}
            </h3>
            <p style={{ color: "#CBD5E1", fontSize: 13 }}>
              {result.ping === null
                ? "Não foi possível obter uma medição confiável de ping."
                : result.ping <= 30
                ? "A latência medida está baixa."
                : "A latência medida pode afetar a resposta em jogos competitivos."}
              {" "}
              {result.jitter === null
                ? "Não foi possível calcular o jitter."
                : result.jitter <= 10
                ? "A variação entre as medições foi pequena."
                : "A variação entre as medições merece atenção."}
            </p>
          </div>
        </>
      )}

      {history.length > 0 && (
        <div style={panel}>
          <div className="cyber-label">📊 NETWORK HISTORY</div>
          <h3 style={{ color: "#fff", margin: "8px 0 15px" }}>
            Histórico de testes
          </h3>

          {history.map((item, index) => (
            <div key={`${item.date}-${index}`} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              padding: "12px 0",
              borderBottom: "1px solid rgba(148,163,184,.12)"
            }}>
              <div>
                <strong style={{ color: item.rank.color }}>
                  {item.rank.icon} {item.rank.name}
                </strong>
                <div className="cyber-muted">{item.date}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <strong style={{ color: "#fff" }}>
                  {item.download} Mbps
                </strong>
                <div className="cyber-muted">
                  Ping: {item.ping ?? "--"} ms
                </div>
              </div>
            </div>
          ))}
          <p className="cyber-muted" style={{ marginTop: 12 }}>
            O histórico fica disponível enquanto esta página permanecer aberta.
          </p>
        </div>
      )}

      <div style={{
        ...panel,
        marginTop: 22,
        background: "rgba(15,23,42,.7)"
      }}>
        <div className="cyber-label">ℹ️ SOBRE AS MEDIÇÕES</div>
        <p style={{
          color: "#94A3B8",
          fontSize: 12,
          lineHeight: 1.7,
          marginBottom: 0
        }}>
          Os testes utilizam os serviços públicos da Cloudflare. Ping e jitter
          são estimados com requisições HTTP, portanto não equivalem a ping ICMP
          ou à latência até o servidor de um jogo. Falhas indicam tentativas
          HTTP malsucedidas, não uma medição completa de perda de pacotes.
          Download e upload são medições aproximadas e podem variar conforme
          Wi-Fi, equipamento, servidor, rota e operadora. A medição de upload
          considera o tempo da requisição e não substitui um teste especializado.
          A patente é uma classificação indicativa do Será Que Roda?.
        </p>
      </div>
    </section>
  );
}

// ======================================================
// APLICAÇÃO PRINCIPAL
// ======================================================

function App() {
  const [page, setPage] = useState("home");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [gameStatus, setGameStatus] = useState("Todos");

  const [gpu, setGpu] = useState("RTX 3060");
  const [cpu, setCpu] = useState("Ryzen 5 5600");
  const [ram, setRam] = useState("16");
  const [game, setGame] = useState("Counter-Strike 2");
  const [resolution, setResolution] = useState("1080p");

  const [builder, setBuilder] = useState({
    cpu: "Ryzen 5 5600",
    gpu: "RTX 3060",
    motherboard: "MSI B550M PRO-VDH WIFI",
    ram: "Kingston Fury Beast 16GB (2x8GB) DDR4 3200MHz",
    storage: "WD Black SN770 1TB NVMe",
    power: "Corsair CV650 650W 80 Plus Bronze",
    case: "Corsair 4000D Airflow"
  });
  const [openStoreFor, setOpenStoreFor] = useState(null);

  const filteredGames = useMemo(() => {
    return games.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "Todas" || item.genre === category;
      const matchesStatus =
        gameStatus === "Todos" ||
        (gameStatus === "Disponíveis" && !item.upcoming) ||
        (gameStatus === "Em breve" && item.upcoming);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, gameStatus]);

  const selectedGpu = gpus.find(item => item.name === gpu) || gpus[0];
  const selectedCpu = cpus.find(item => item.name === cpu) || cpus[0];
  const selectedGame = games.find(item => item.name === game);

  const fps = selectedGame && !selectedGame.upcoming
    ? Math.max(
        5,
        Math.round(
          Math.min(selectedGpu.score, selectedCpu.score * 1.25) *
          (Number(ram) < 8 ? 0.65 : Number(ram) < 16 ? 0.85 : 1) *
          (resolution === "1440p" ? 0.72 : resolution === "4K" ? 0.42 : 1) *
          (selectedGame.weight || 1) *
          1.5
        )
      )
    : null;

  const amazonUrl = query =>
    `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}`;

  // Links de busca das lojas. Eles ainda não são links afiliados:
  // substitua/complete cada URL com seu rastreamento após a aprovação nos programas.
  const storeSearchUrl = (store, query) => {
    const encoded = encodeURIComponent(query);
    const urls = {
      amazon: `https://www.amazon.com.br/s?k=${encoded}`,
      kabum: `https://www.kabum.com.br/busca/${encoded}`,
      pichau: `https://www.pichau.com.br/busca`,
      terabyte: `https://www.terabyteshop.com.br/busca?str=${encoded}`
    };
    return urls[store] || amazonUrl(query);
  };

  const stores = [
    { id: "amazon", name: "Amazon Brasil", note: "Pesquisar na Amazon", color: "#F59E0B" },
    { id: "kabum", name: "KaBuM!", note: "Pesquisar no KaBuM!", color: "#A3E635" },
    { id: "pichau", name: "Pichau", note: "Pesquisar na Pichau", color: "#F97316" },
    { id: "terabyte", name: "TerabyteShop", note: "Pesquisar na Terabyte", color: "#38BDF8" }
  ];

  const navigate = id => {
    setPage(id);
    setSearch("");
    setCategory("Todas");
    setGameStatus("Todos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => navigate("home")}>
          <span className="brand-icon">S</span>
          <span>SERÁ QUE <b>RODA?</b></span>
        </button>

        <nav className="desktop-nav">
          {menu.slice(1).map(item => (
            <button
              key={item[0]}
              className={page === item[0] ? "nav-active" : ""}
              onClick={() => navigate(item[0])}
            >
              {item[1]}
            </button>
          ))}
        </nav>

        <button className="header-cta" onClick={() => navigate("test")}>
          Teste seu PC <span>↗</span>
        </button>
      </header>

      <main>
        {page === "home" && (
          <>
            <section className="hero">
              <div className="hero-content">
                <div className="hero-tag">
                  <span className="live-dot"></span>
                  SEU UNIVERSO GAMER
                </div>

                <h1>
                  Descubra o que seu PC<br />
                  é capaz de <span>rodar.</span>
                </h1>

                <p>
                  Descubra seu desempenho, explore jogos e encontre
                  as melhores peças para montar seu próximo PC.
                </p>

                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => navigate("test")}>
                    ⚡ Teste seu PC
                  </button>
                  <button className="secondary-btn" onClick={() => navigate("games")}>
                    Explorar jogos ↗
                  </button>
                </div>

                <div className="hero-stats">
                  <div><strong>{games.length}+</strong><span>jogos no catálogo</span></div>
                  <div><strong>PC</strong><span>sob medida</span></div>
                  <div><strong>100%</strong><span>foco gamer</span></div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-orbit orbit-one"></div>
                <div className="hero-orbit orbit-two"></div>
                <div className="hero-pc">🖥️</div>

                <div className="floating-card fps-card">
                  <span>FPS ESTIMADO</span>
                  <strong>144</strong>
                  <small>DESEMPENHO GAMER</small>
                </div>

                <div className="floating-card gpu-card">
                  <span>GPU</span>
                  <strong>RTX</strong>
                  <small>SEU PRÓXIMO UPGRADE</small>
                </div>
              </div>
            </section>

            <AdSlot label="Anúncio principal" />

            <section className="quick-tools">
              {menu.slice(1).map(item => (
                <button className="tool-tile" key={item[0]} onClick={() => navigate(item[0])}>
                  <span>{item[2]}</span>
                  <strong>{item[1]}</strong>
                  <small>Explorar ferramenta ↗</small>
                </button>
              ))}
            </section>

            <section className="content-section">
              <SectionTitle
                eyebrow="COMECE POR AQUI"
                title="O que você quer descobrir?"
                description="Ferramentas para ajudar você a fazer a melhor escolha."
              />

              <div className="feature-grid">
                <div className="feature-card feature-main">
                  <span className="feature-icon">⚡</span>
                  <h3>Seu PC roda esse jogo?</h3>
                  <p>Selecione suas peças e descubra uma estimativa de desempenho.</p>
                  <button onClick={() => navigate("test")}>Fazer teste →</button>
                </div>

                <div className="feature-card">
                  <span className="feature-icon">🎮</span>
                  <h3>Explore jogos</h3>
                  <p>Pesquise jogos e confira requisitos de hardware.</p>
                  <button onClick={() => navigate("games")}>Ver jogos →</button>
                </div>

                <div className="feature-card">
                  <span className="feature-icon">🌐</span>
                  <h3>Teste sua internet</h3>
                  <p>Descubra se sua conexão está pronta para jogar online.</p>
                  <button onClick={() => navigate("internet")}>Testar conexão →</button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* BANCO DE JOGOS */}
        {page === "games" && (
          <section className="content-section page-section">
            <SectionTitle
              eyebrow="CATÁLOGO GAMER"
              title="Banco de jogos"
              description={`Explore ${games.length} jogos, encontre seus favoritos e teste seu computador.`}
            />

            <div className="search-bar">
              <span>⌕</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Pesquisar jogos pelo nome..."
              />
            </div>

            <div className="panel" style={{ marginBottom: 24 }}>
              <label>Categoria</label>
              <select value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(item => <option key={item}>{item}</option>)}
              </select>

              <label style={{ marginTop: 14 }}>Disponibilidade</label>
              <select value={gameStatus} onChange={e => setGameStatus(e.target.value)}>
                <option>Todos</option>
                <option>Disponíveis</option>
                <option>Em breve</option>
              </select>

              <p style={{ marginTop: 14 }}>
                Exibindo <strong>{filteredGames.length}</strong> de {games.length} jogos.
              </p>
            </div>

            <AdSlot label="Anúncios entre os jogos" />

            <div className="games-grid">
              {filteredGames.map(item => (
                <article className="game-card" key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={e => {
                      if (e.currentTarget.dataset.fallback !== "true") {
                        e.currentTarget.dataset.fallback = "true";
                        e.currentTarget.src =
                          `https://placehold.co/600x338/151c2b/ffffff?text=${encodeURIComponent(item.name)}`;
                      }
                    }}
                  />

                  <div className="game-info">
                    <span>{item.genre}</span>
                    <h3>{item.name}</h3>

                    {item.upcoming ? (
                      <p>🚀 Lançamento para acompanhar</p>
                    ) : (
                      <p>GPU de referência: {item.gpu}</p>
                    )}

                    <button
                      onClick={() => {
                        setGame(item.name);
                        navigate("test");
                      }}
                    >
                      {item.upcoming ? "Acompanhar jogo →" : "Testar meu PC →"}
                    </button>
                  </div>
                </article>
              ))}

              {filteredGames.length === 0 && <p>Nenhum jogo encontrado.</p>}
            </div>
          </section>
        )}

        {/* TESTE DE FPS */}
        {page === "test" && (
          <section className="content-section page-section">
            <SectionTitle
              eyebrow="DESEMPENHO"
              title="Teste seu PC"
              description="Escolha seu hardware, selecione um jogo e veja uma estimativa ilustrativa de FPS."
            />

            <div className="calculator-layout">
              <div className="panel">
                <h3>Configure seu computador</h3>

                <label>Placa de vídeo</label>
                <select value={gpu} onChange={e => setGpu(e.target.value)}>
                  {gpus.map(x => <option key={x.name}>{x.name}</option>)}
                </select>

                <label>Processador</label>
                <select value={cpu} onChange={e => setCpu(e.target.value)}>
                  {cpus.map(x => <option key={x.name}>{x.name}</option>)}
                </select>

                <label>Memória RAM</label>
                <select value={ram} onChange={e => setRam(e.target.value)}>
                  <option value="4">4 GB</option>
                  <option value="8">8 GB</option>
                  <option value="16">16 GB</option>
                  <option value="32">32 GB</option>
                </select>

                <label>Jogo ({games.length} disponíveis)</label>
                <select value={game} onChange={e => setGame(e.target.value)}>
                  {categories.filter(x => x !== "Todas").map(cat => (
                    <optgroup key={cat} label={cat}>
                      {games
                        .filter(x => x.genre === cat)
                        .map(x => (
                          <option key={x.name} value={x.name}>
                            {x.name}
                          </option>
                        ))}
                    </optgroup>
                  ))}
                </select>

                <label>Resolução</label>
                <div className="segmented">
                  {["1080p", "1440p", "4K"].map(x => (
                    <button
                      key={x}
                      className={resolution === x ? "selected" : ""}
                      onClick={() => setResolution(x)}
                    >
                      {x}
                    </button>
                  ))}
                </div>

                <small className="disclaimer">
                  Se escolher vídeo integrado, selecione também o processador
                  compatível. Nem todo processador possui vídeo integrado.
                </small>
              </div>

              <div className="result-panel">
                <span className="eyebrow">
                  {selectedGame?.upcoming ? "LANÇAMENTO" : "RESULTADO ESTIMADO"}
                </span>

                <h3>{game}</h3>

                {selectedGame?.upcoming ? (
                  <>
                    <div className="fps-number">—</div>
                    <strong>Requisitos ainda não disponíveis</strong>
                    <p>
                      Estamos acompanhando este lançamento. Assim que houver
                      requisitos e benchmarks confiáveis, poderemos estimar o desempenho.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="fps-number">{fps}<small> FPS</small></div>

                    <div className="fps-meter">
                      <span style={{ width: `${Math.min(fps / 180 * 100, 100)}%` }} />
                    </div>

                    <strong>
                      {fps >= 100
                        ? "Excelente desempenho"
                        : fps >= 60
                        ? "Bom desempenho"
                        : fps >= 30
                        ? "Desempenho moderado"
                        : "Pode apresentar dificuldades"}
                    </strong>

                    <p>{gpu} · {cpu} · {ram} GB RAM · {resolution}</p>
                    <p>
                      GPU de referência do jogo: {selectedGame?.gpu} ·
                      RAM de referência: {selectedGame?.ram} GB
                    </p>
                  </>
                )}

                <small className="disclaimer">
                  Os resultados são estimativas demonstrativas baseadas em
                  índices internos, não benchmarks reais. O FPS real varia
                  conforme drivers, configurações gráficas, mapa, atualizações
                  e condições do computador.
                </small>
              </div>
            </div>
          </section>
        )}

        {/* TESTE DE INTERNET */}
        {page === "internet" && <InternetTest />}


        {/* MONTE SEU PC */}
        {page === "builder" && (
          <section className="content-section page-section">
            <SectionTitle
              eyebrow="PC BUILDER // SHOPPING CENTER"
              title="Monte seu PC"
              description="Escolha as sete peças do seu computador entre modelos populares e pesquise nas lojas parceiras."
            />

            <style>{`
              .builder-shop-layout {
                display:grid;
                grid-template-columns:minmax(0,1.05fr) minmax(280px,.95fr);
                gap:20px;
                align-items:start;
              }
              .builder-field { margin-bottom:15px; }
              .builder-field label { display:block; margin-bottom:7px; }
              .builder-summary-row {
                display:flex; justify-content:space-between; gap:12px;
                padding:11px 0; border-bottom:1px solid rgba(148,163,184,.13);
                color:#CBD5E1; font-size:13px;
              }
              .builder-summary-row strong { color:#F8FAFC; text-align:right; }
              .builder-offers { margin-top:22px; }
              .builder-component-offer {
                margin-top:10px; padding:12px 0;
                border-bottom:1px solid rgba(148,163,184,.13);
              }
              .builder-component-heading {
                display:flex; align-items:center; justify-content:space-between;
                gap:12px;
              }
              .builder-component-heading strong { color:#F8FAFC; font-size:13px; }
              .builder-toggle {
                border:1px solid rgba(56,189,248,.35); border-radius:8px;
                background:rgba(14,165,233,.12); color:#BAE6FD;
                padding:8px 12px; font-size:11px; font-weight:800;
                cursor:pointer; white-space:nowrap;
              }
              .builder-toggle:hover { background:rgba(14,165,233,.24); }
              .builder-offer-grid {
                display:grid; grid-template-columns:repeat(2,minmax(0,1fr));
                gap:10px; margin-top:12px;
              }
              .builder-store {
                display:flex; flex-direction:column; gap:9px;
                padding:13px; border:1px solid rgba(56,189,248,.18);
                border-radius:12px; background:rgba(15,23,42,.72);
                min-width:0;
              }
              .builder-store-name { color:#F8FAFC; font-size:13px; font-weight:800; }
              .builder-store a {
                display:block; text-align:center; text-decoration:none;
                color:#E0F2FE; background:rgba(14,165,233,.14);
                border:1px solid rgba(56,189,248,.35); border-radius:8px;
                padding:9px 8px; font-size:11px; font-weight:800;
              }
              .builder-store a:hover { background:rgba(14,165,233,.28); }
              .builder-disclosure {
                margin-top:16px; padding:12px; border-radius:10px;
                background:rgba(245,158,11,.08); border:1px solid rgba(245,158,11,.2);
                color:#CBD5E1; font-size:11px; line-height:1.6;
              }
              @media(max-width:760px) {
                .builder-shop-layout { grid-template-columns:1fr; }
                .builder-offer-grid { grid-template-columns:1fr; }
              }
            `}</style>

            <div className="builder-shop-layout">
              <div className="panel">
                <h3>🛠️ Escolha suas peças</h3>
                <p className="disclaimer">
                  Selecionamos modelos conhecidos e populares para facilitar a montagem.
                  Confira sempre a compatibilidade entre processador, placa-mãe e memória.
                </p>

                {[
                  { key: "cpu", label: "Processador", options: [
                    "Ryzen 5 5500", "Ryzen 5 5600", "Ryzen 7 5700X", "Ryzen 7 5800X3D",
                    "Ryzen 5 7500F", "Ryzen 5 7600", "Ryzen 7 7800X3D", "Ryzen 5 9600X",
                    "Ryzen 7 9800X3D", "Core i5-12400F", "Core i5-13400F", "Core i5-14400F",
                    "Core i5-14600K", "Core i7-14700K"
                  ]},
                  { key: "gpu", label: "Placa de vídeo", options: [
                    "RX 6600", "RX 6650 XT", "RX 7600", "RX 7700 XT", "RX 7800 XT",
                    "RTX 3060", "RTX 3060 Ti", "RTX 4060", "RTX 4060 Ti 8GB", "RTX 4070",
                    "RTX 4070 Super", "RTX 4070 Ti Super", "RTX 4080 Super", "RTX 4090"
                  ]},
                  { key: "motherboard", label: "Placa-mãe", options: [
                    "MSI B550M PRO-VDH WIFI", "Gigabyte B550M DS3H", "ASUS TUF Gaming B550M-PLUS",
                    "MSI PRO B650M-A WIFI", "Gigabyte B650M DS3H", "ASUS PRIME H610M-E D4",
                    "Gigabyte B760M DS3H DDR4"
                  ]},
                  { key: "ram", label: "Memória RAM", options: [
                    "Kingston Fury Beast 16GB (2x8GB) DDR4 3200MHz",
                    "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
                    "Kingston Fury Beast 32GB (2x16GB) DDR4 3200MHz",
                    "Kingston Fury Beast 32GB (2x16GB) DDR5 6000MHz",
                    "Corsair Vengeance 32GB (2x16GB) DDR5 6000MHz"
                  ]},
                  { key: "storage", label: "SSD / Armazenamento", options: [
                    "Kingston NV2 1TB NVMe", "WD Black SN770 1TB NVMe",
                    "Kingston NV3 1TB NVMe", "Samsung 990 EVO 1TB NVMe",
                    "Crucial BX500 1TB SATA"
                  ]},
                  { key: "power", label: "Fonte", options: [
                    "MSI MAG A650BN 650W 80 Plus Bronze",
                    "Corsair CV650 650W 80 Plus Bronze",
                    "XPG Pylon 650W 80 Plus Bronze",
                    "Cooler Master MWE 750W 80 Plus Bronze",
                    "Corsair RM750e 750W 80 Plus Gold"
                  ]},
                  { key: "case", label: "Gabinete", options: [
                    "Corsair 4000D Airflow", "Montech Air 903 Base",
                    "Cooler Master MasterBox Q300L", "NZXT H5 Flow",
                    "Lian Li Lancool 216"
                  ]}
                ].map(field => (
                  <div className="builder-field" key={field.key}>
                    <label>{field.label}</label>
                    <select
                      value={builder[field.key]}
                      onChange={e => setBuilder({ ...builder, [field.key]: e.target.value })}
                    >
                      {field.options.map(name => (
                        <option key={name} value={name}>{name}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="result-panel">
                <span className="eyebrow">SUA CONFIGURAÇÃO</span>
                <h3>Meu PC personalizado</h3>
                <p className="disclaimer">
                  Confira abaixo cada componente e escolha em qual loja deseja pesquisar.
                </p>

                {[
                  ["Processador", builder.cpu],
                  ["Placa de vídeo", builder.gpu],
                  ["Placa-mãe", builder.motherboard],
                  ["Memória RAM", builder.ram],
                  ["Armazenamento", builder.storage],
                  ["Fonte", builder.power],
                  ["Gabinete", builder.case]
                ].map(([label, value]) => (
                  <div className="builder-summary-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}

                <div className="builder-offers">
                  <span className="eyebrow">ENCONTRE SUA PEÇA</span>
                  <h3 style={{ marginTop: 7 }}>Compare lojas</h3>
                  <p className="disclaimer">
                    Escolha uma loja para pesquisar o componente selecionado.
                    O preço e a disponibilidade serão informados pela própria loja.
                  </p>

                  {[
                    ["Processador", builder.cpu],
                    ["Placa de vídeo", builder.gpu],
                    ["Placa-mãe", builder.motherboard],
                    ["Memória RAM", builder.ram],
                    ["Armazenamento", builder.storage],
                    ["Fonte", builder.power],
                    ["Gabinete", builder.case]
                  ].map(([label, product]) => (
                    <div className="builder-component-offer" key={label}>
                      <div className="builder-component-heading">
                        <strong>{label}: {product}</strong>
                        <button
                          type="button"
                          className="builder-toggle"
                          aria-expanded={openStoreFor === label}
                          onClick={() => setOpenStoreFor(openStoreFor === label ? null : label)}
                        >
                          {openStoreFor === label ? "Fechar lojas −" : "Ver lojas +"}
                        </button>
                      </div>
                      {openStoreFor === label && (
                        <div className="builder-offer-grid">
                          {stores.map(store => (
                            <div className="builder-store" key={`${label}-${store.id}`}>
                              <span className="builder-store-name">
                                <span style={{ color: store.color }}>● </span>
                                {store.name}
                              </span>
                              <a
                                href={storeSearchUrl(store.id, product)}
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                              >
                                Pesquisar na loja ↗
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="builder-disclosure">
                  <strong>Transparência:</strong> estes são links de pesquisa nas lojas,
                  ainda sem rastreamento de afiliado. Depois que você tiver os links ou
                  identificadores aprovados de cada programa, podemos conectá-los para
                  que as compras qualificadas gerem comissão. Os preços não são
                  consultados automaticamente nesta versão.
                </div>
              </div>
            </div>

            <AdSlot label="Ofertas de componentes para PC" />
          </section>
        )}

        {/* SOBRE NÓS */}
        {page === "about" && (
          <section className="content-section page-section legal-page">
            <SectionTitle
              eyebrow="CONHEÇA O PROJETO"
              title="Sobre nós"
              description="Tecnologia e informação para ajudar você a fazer escolhas melhores no mundo gamer."
            />

            <article className="legal-card">
              <h2>O que é o SERÁ QUE RODA?</h2>
              <p>
                O SERÁ QUE RODA? é um projeto criado para ajudar jogadores
                a conhecer melhor o desempenho de seus computadores,
                explorar jogos e encontrar componentes para montar ou
                atualizar seus PCs.
              </p>

              <h2>O que você encontra aqui?</h2>
              <ul>
                <li><strong>Banco de jogos:</strong> um catálogo para pesquisar jogos e consultar informações de hardware.</li>
                <li><strong>Teste seu PC:</strong> uma ferramenta que apresenta estimativas ilustrativas de FPS conforme as peças selecionadas.</li>
                <li><strong>Teste de internet:</strong> medições aproximadas de ping, jitter, download e upload.</li>
                <li><strong>Monte seu PC:</strong> uma ferramenta para selecionar componentes e pesquisar produtos em lojas externas.</li>
              </ul>

              <h2>Nosso compromisso</h2>
              <p>
                Nosso objetivo é oferecer informações acessíveis e facilitar
                a pesquisa de quem gosta de tecnologia e jogos.
                Trabalhamos para melhorar continuamente as ferramentas e
                informações disponíveis.
              </p>

              <p className="legal-note">
                As estimativas de desempenho não substituem benchmarks reais.
                Compatibilidade, preços e disponibilidade devem ser conferidos
                antes de qualquer compra.
              </p>
            </article>
          </section>
        )}

        {/* POLÍTICA DE PRIVACIDADE */}
        {page === "privacy" && (
          <section className="content-section page-section legal-page">
            <SectionTitle
              eyebrow="TRANSPARÊNCIA E PROTEÇÃO DE DADOS"
              title="Política de Privacidade"
              description="Saiba como funciona o tratamento de informações durante o uso do SERÁ QUE RODA?."
            />

            <article className="legal-card">
              <p><strong>Última atualização:</strong> 6 de novembro de 2026.</p>

              <h2>1. Sobre esta política</h2>
              <p>
                Esta Política de Privacidade explica como o SERÁ QUE RODA?
                trata informações relacionadas à navegação e à utilização
                de suas ferramentas.
              </p>

              <h2>2. Informações e dados</h2>
              <p>
                O site não possui, nesta versão, um sistema próprio de cadastro
                de usuários ou armazenamento de mensagens de contato.
                Informações inseridas nas ferramentas são utilizadas para
                apresentar os resultados solicitados na própria página.
              </p>
              <p>
                O teste de internet utiliza serviços públicos da Cloudflare
                para realizar medições de conexão. Esses serviços podem
                receber informações técnicas necessárias às requisições,
                conforme as políticas do próprio fornecedor.
              </p>

              <h2>3. Cookies e tecnologias semelhantes</h2>
              <p>
                O funcionamento do site e de serviços externos pode envolver
                cookies ou tecnologias semelhantes. Caso ferramentas de
                análise ou publicidade sejam ativadas, elas poderão utilizar
                essas tecnologias conforme suas próprias configurações e
                políticas.
              </p>

              <h2>4. Google Analytics e Google AdSense</h2>
              <p>
                O espaço reservado a anúncios no site não significa que
                publicidade do Google esteja ativa. Caso o Google AdSense
                ou o Google Analytics sejam implementados futuramente,
                esta política será atualizada para explicar seu funcionamento.
              </p>
              <p>
                Quando utilizados, esses serviços poderão tratar informações
                de navegação e utilizar cookies ou tecnologias semelhantes,
                de acordo com as políticas e configurações aplicáveis do Google.
              </p>

              <h2>5. Links e serviços de terceiros</h2>
              <p>
                O site pode apresentar links para lojas e serviços externos,
                como Amazon, KaBuM!, Pichau e TerabyteShop, além de recursos
                fornecidos por terceiros. Ao acessar esses serviços, você
                estará sujeito às políticas de privacidade de cada fornecedor.
              </p>

              <h2>6. Segurança</h2>
              <p>
                Adotamos cuidados razoáveis na manutenção do site.
                Entretanto, nenhum serviço disponível na internet pode
                garantir segurança absoluta contra todos os riscos.
              </p>

              <h2>7. Direitos do titular dos dados</h2>
              <p>
                Nos termos da Lei Geral de Proteção de Dados (LGPD),
                você pode solicitar informações sobre o tratamento de
                dados pessoais eventualmente realizado pelo site,
                bem como exercer os direitos previstos na legislação.
              </p>

              <h2>8. Alterações nesta política</h2>
              <p>
                Esta política poderá ser atualizada para refletir mudanças
                nas funcionalidades, nos serviços utilizados ou nas
                obrigações legais.
              </p>

              <h2>9. Contato</h2>
              <p>
                Para dúvidas sobre privacidade e proteção de dados,
                entre em contato pelo e-mail:{" "}
                <a href="mailto:seraqueroda7@gmail.com">
                  seraqueroda7@gmail.com
                </a>.
              </p>
            </article>
          </section>
        )}

        {/* CONTATO */}
        {page === "contact" && (
          <section className="content-section page-section legal-page">
            <SectionTitle
              eyebrow="FALE CONOSCO"
              title="Contato"
              description="Tem alguma dúvida, sugestão ou encontrou um problema? Entre em contato."
            />

            <article className="legal-card contact-card">
              <div className="contact-icon">✉️</div>
              <h2>Estamos à disposição!</h2>
              <p>
                Sua opinião é importante para melhorar o SERÁ QUE RODA?.
                Envie sua dúvida, sugestão ou relato de problema pelo nosso
                endereço de e-mail.
              </p>

              <a
                className="primary-btn contact-email"
                href="mailto:seraqueroda7@gmail.com?subject=Contato%20-%20SER%C3%81%20QUE%20RODA%3F"
              >
                Enviar e-mail ↗
              </a>

              <p className="contact-address">
                seraqueroda7@gmail.com
              </p>

              <small className="legal-note">
                Ao clicar, seu aplicativo de e-mail será aberto para que
                você possa escrever e enviar sua mensagem.
              </small>
            </article>
          </section>
        )}
      </main>

      <footer className="footer">
        <button className="brand" onClick={() => navigate("home")}>
          <span className="brand-icon">S</span>
          <span>SERÁ QUE <b>RODA?</b></span>
        </button>

        <p>Seu universo gamer começa aqui.</p>

        <nav className="footer-links" aria-label="Links institucionais">
          <button onClick={() => navigate("about")}>Sobre nós</button>
          <button onClick={() => navigate("privacy")}>Política de Privacidade</button>
          <button onClick={() => navigate("contact")}>Contato</button>
        </nav>

        <small>
          Links de afiliados podem gerar comissão. Preços e disponibilidade podem mudar.
        </small>
        <small>© {new Date().getFullYear()} Será Que Roda?.</small>
      </footer>
    </div>
  );
}

export default App; 