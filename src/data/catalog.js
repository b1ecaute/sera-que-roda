// Amostra inicial para validar a experiência. Não é um catálogo completo.
export const games = [
  { id: "cs2", name: "Counter-Strike 2", genre: "FPS", minimum: "GTX 1050 Ti", recommended: "RTX 2070", ram: 8, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg" },
  { id: "valorant", name: "VALORANT", genre: "FPS", minimum: "Intel HD 4000", recommended: "GTX 1050 Ti", ram: 4, image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.jpg" },
  { id: "fortnite", name: "Fortnite", genre: "Battle Royale", minimum: "GTX 960", recommended: "RTX 3060", ram: 8, image: "https://cdn2.unrealengine.com/fortnite-og-social-1920x1080-1920x1080-1a7f3c4e0a5b.jpg" },
  { id: "gta5", name: "GTA V", genre: "Ação", minimum: "GTX 660", recommended: "GTX 1660", ram: 8, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg" },
  { id: "minecraft", name: "Minecraft", genre: "Sandbox", minimum: "Intel HD 4000", recommended: "GTX 1060", ram: 4, image: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MC_The_Wild_Update_Themed_KeyArt_800x450.jpg" },
  { id: "elden-ring", name: "Elden Ring", genre: "RPG", minimum: "GTX 1060 3GB", recommended: "GTX 1070", ram: 12, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg" },
  { id: "cyberpunk", name: "Cyberpunk 2077", genre: "RPG", minimum: "GTX 1060 6GB", recommended: "RTX 2060", ram: 12, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg" },
  { id: "rdr2", name: "Red Dead Redemption 2", genre: "Ação", minimum: "GTX 770", recommended: "GTX 1060 6GB", ram: 8, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg" },
  { id: "apex", name: "Apex Legends", genre: "Battle Royale", minimum: "GTX 950", recommended: "GTX 970", ram: 6, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg" },
  { id: "forza-horizon-5", name: "Forza Horizon 5", genre: "Corrida", minimum: "GTX 780", recommended: "GTX 1070", ram: 8, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg" }
];

export const gpus = [
  { id: "gtx1650", name: "GeForce GTX 1650", brand: "NVIDIA", vram: 4, tier: 35, watts: 75, price: 850, memory: "GDDR6" },
  { id: "rx6600", name: "Radeon RX 6600", brand: "AMD", vram: 8, tier: 62, watts: 132, price: 1250, memory: "GDDR6" },
  { id: "rtx3060", name: "GeForce RTX 3060", brand: "NVIDIA", vram: 12, tier: 68, watts: 170, price: 1650, memory: "GDDR6" },
  { id: "rx7600", name: "Radeon RX 7600", brand: "AMD", vram: 8, tier: 76, watts: 165, price: 1750, memory: "GDDR6" },
  { id: "rtx4060", name: "GeForce RTX 4060", brand: "NVIDIA", vram: 8, tier: 80, watts: 115, price: 1950, memory: "GDDR6" },
  { id: "rtx4070", name: "GeForce RTX 4070", brand: "NVIDIA", vram: 12, tier: 112, watts: 200, price: 3650, memory: "GDDR6X" }
];

export const cpus = [
  { id: "r5-5500", name: "Ryzen 5 5500", brand: "AMD", cores: 6, threads: 12, tier: 52, socket: "AM4", ram: "DDR4", price: 550 },
  { id: "r5-5600", name: "Ryzen 5 5600", brand: "AMD", cores: 6, threads: 12, tier: 66, socket: "AM4", ram: "DDR4", price: 750 },
  { id: "r7-5700x", name: "Ryzen 7 5700X", brand: "AMD", cores: 8, threads: 16, tier: 78, socket: "AM4", ram: "DDR4", price: 1050 },
  { id: "i5-12400f", name: "Core i5-12400F", brand: "Intel", cores: 6, threads: 12, tier: 68, socket: "LGA1700", ram: "DDR4/DDR5", price: 850 },
  { id: "i5-13400f", name: "Core i5-13400F", brand: "Intel", cores: 10, threads: 16, tier: 82, socket: "LGA1700", ram: "DDR4/DDR5", price: 1150 },
  { id: "r5-7600", name: "Ryzen 5 7600", brand: "AMD", cores: 6, threads: 12, tier: 88, socket: "AM5", ram: "DDR5", price: 1250 }
];

export const builds = [
  { id: "entry", label: "Entrada gamer", budget: "Até R$ 2.500", cpu: "Ryzen 5 5500", gpu: "Radeon RX 6600", ram: "16 GB DDR4", storage: "SSD NVMe 500 GB", note: "Boa base para jogos competitivos em 1080p." },
  { id: "balanced", label: "Custo-benefício", budget: "Até R$ 3.500", cpu: "Ryzen 5 5600", gpu: "GeForce RTX 4060", ram: "16 GB DDR4", storage: "SSD NVMe 1 TB", note: "Equilíbrio para 1080p em qualidade alta." },
  { id: "performance", label: "Desempenho", budget: "Até R$ 5.000", cpu: "Ryzen 7 5700X", gpu: "GeForce RTX 4070", ram: "32 GB DDR4", storage: "SSD NVMe 1 TB", note: "Configuração mais forte para 1440p, sujeita a preços." }
];
