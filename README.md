# Meu PC Roda

Projeto inicial reorganizado em React + Vite, com módulos independentes.

## Requisitos
- Node.js 20.19+ ou 22.12+
- npm

## Rodar localmente
1. Extraia o ZIP.
2. Abra a pasta `meu-pc-roda` no VS Code.
3. Abra o terminal dentro da pasta.
4. Execute:

```bash
npm install
npm run dev
```

5. Abra o endereço local exibido pelo Vite (normalmente http://localhost:5173).

## Gerar versão de produção

```bash
npm run build
npm run preview
```

O resultado fica na pasta `dist`.

## O que já existe nesta primeira base
- Banco demonstrativo de jogos com busca e filtros.
- Teste seu PC com estimativa indicativa de FPS.
- Comparador de GPUs e CPUs.
- Montador de PC com verificações iniciais de socket e tipo de memória.
- Configurações custo-benefício demonstrativas.
- Links de busca da Amazon preparados para receber o ID real de associado.

## Importante: dados e precisão
Os dados incluídos são uma amostra de demonstração, não um catálogo completo nem benchmarks oficiais. As estimativas de FPS são aproximações ilustrativas e não devem ser apresentadas como garantia. Antes de publicar, precisamos substituir/validar os dados com fontes e benchmarks rastreáveis.

## Próximas integrações
- API de jogos (por exemplo, RAWG), por meio de backend/proxy seguro e respeitando o plano/licença.
- Banco Supabase/PostgreSQL para catálogo e atualizações.
- Fonte confiável de benchmarks para GPUs/CPUs.
- Fonte de preços e disponibilidade para recomendações e links de afiliado.
- Testes automatizados e monitoramento.

## Amazon
Defina `VITE_AMAZON_ASSOCIATE_TAG` somente com seu identificador oficial, após aprovação no programa. Os links atuais são buscas da Amazon e usam um identificador de exemplo vazio. Identifique claramente links afiliados e siga as regras do programa.
