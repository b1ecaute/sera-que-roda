export const brl = (value) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

export const amazonSearchUrl = (query) => {
  const tag = import.meta.env.VITE_AMAZON_ASSOCIATE_TAG || "";
  const base = `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}`;
  return tag ? `${base}&tag=${encodeURIComponent(tag)}` : base;
};

export function estimateFps({ gpu, cpu, ram, game, resolution, quality }) {
  // Modelo ilustrativo inicial. Será substituído por dados de benchmarks verificáveis.
  const resolutionFactor = { "1080p": 1, "1440p": 0.72, "4K": 0.43 }[resolution] ?? 1;
  const qualityFactor = { Baixo: 1.2, Médio: 1, Alto: 0.78, Ultra: 0.62 }[quality] ?? 1;
  const cpuFactor = Math.min(1.18, Math.max(0.62, cpu.tier / 70));
  const ramFactor = ram >= 16 ? 1 : 0.72;
  const gameFactor = game.genre === "FPS" ? 1.15 : game.genre === "RPG" ? 0.78 : 1;
  return Math.max(8, Math.round((gpu.tier * 1.15 + 15) * resolutionFactor * qualityFactor * cpuFactor * ramFactor * gameFactor));
}

export function isRamCompatible(cpuRam, selectedRam) {
  return cpuRam === selectedRam || cpuRam.includes(selectedRam) || selectedRam.includes(cpuRam);
}
