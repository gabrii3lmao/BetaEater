# Beta Eater - Bot do Discord

O **BetaEater** é um bot para Discord feito puramente para estudo e diversão.  
---

## 🚀 Funcionalidades
- Responde automaticamente mensagens que contenham palavras-chave como **moggado**, **its over** ou **sobrou nada**.
- Traz frases aleatórias a partir de um banco (`db.json`) cuidadosamente selecionado para humilhar qualquer um.
- Agora ele também tem uma ferramenta de gerar nomes aleatórios com base em um banco de dados (também em `db.json`).
- Foi feito apenas para eu treinar **JavaScript, Node.js e lógica de bots**.  
---

## 🎯 Objetivo do projeto
Este bot foi desenvolvido para:
- praticar lógica de programação
- trabalhar com eventos e API do Discord
- aplicar modularização (controller, view e utils)
- manipular JSON como base de dados
- estruturar um projeto Node.js de forma limpa
---

## 🧠 Tecnologias utilizadas
- Node.js + JavaScript
- discord.js
- JSON (para armazenamento local)
- Padrões básicos de MVC
--- 
📁 Arquitetura do projeto
```
src/
 ├─ utils/
 │    └─ nameGenerator.js    → módulo de geração de nomes
 │
 ├─ controller.js            → lógica principal (regras e comandos)
 ├─ view.js                  → formatação e apresentação das mensagens                
 ├─ package.json             → dependências e scripts
 ├─ package-lock.json
 └─ README.md
index.js -> ponto de entrada do bot (login + rota principal)
db.json -> banco de dados local com frases e nomes

```
--- 
## ⚠️ Aviso importante
Esse projeto é **apenas para fins de estudo**.  
Nada aqui deve ser levado a sério.  
O bot é **irônico**, **memeístico** e não tem nenhum propósito além de me ajudar a aprender a programar.  

## 📦 Como adicionar ele no servidor?
* você pode usar o link:  https://discord.com/oauth2/authorize?client_id=1405984276016529439&permissions=2147871744&integration_type=0&scope=bot
